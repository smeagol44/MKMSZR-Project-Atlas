import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
for (const file of ["memory-data.js", "patch-data.js", "stage-data.js", "project-data.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const memory = context.window.MKMSZ_MEMORY_DATA;
const patches = context.window.MKMSZ_PATCH_DATA;
const stages = context.window.MKMSZ_STAGE_DATA;
const project = context.window.MKMSZ_PROJECT_DATA;
for (const [name, value] of Object.entries({ memory, patches, stages, project })) {
  if (!value) throw new Error(name + " data is missing");
  if (!/^[0-9a-f]{40}$/.test(value.sourceCommit)) {
    throw new Error(name + ": sourceCommit must be a full Git SHA");
  }
}
if (new Set([memory.sourceCommit, patches.sourceCommit, stages.sourceCommit, project.sourceCommit]).size !== 1) {
  throw new Error("research snapshots do not point at the same MKMSZR commit");
}

const classes = new Set([
  "stock-known", "stock-unknown", "production", "confirmed-free", "candidate-free",
  "dynamic", "proof-only", "rejected/conflict", "alias/view",
]);
const ids = new Set();
for (const key of ["rom", "rdram"]) {
  const space = memory[key];
  if (space.grid * space.grid * space.bucketSize !== space.end - space.start) {
    throw new Error(key + ": grid/bucket geometry does not cover the declared space exactly");
  }
  for (const record of space.records) {
    if (ids.has(record.id)) throw new Error("duplicate region_id: " + record.id);
    ids.add(record.id);
    if (!classes.has(record.class)) throw new Error(record.id + ": unknown class " + record.class);
    if (!(record.start >= space.start && record.end <= space.end && record.start < record.end)) {
      throw new Error(record.id + ": interval is outside " + key + " bounds");
    }
    const match = record.range.match(/^\[0x([0-9A-F]+), 0x([0-9A-F]+)\)$/i);
    if (!match || Number.parseInt(match[1], 16) !== record.start || Number.parseInt(match[2], 16) !== record.end) {
      throw new Error(record.id + ": range text does not match numeric bounds");
    }
  }
}

if (stages.stages.length !== 8) throw new Error("Stage Atlas must contain eight main stages");
if (stages.stages.reduce((n, stage) => n + stage.pickups, 0) !== 84) {
  throw new Error("Stage Atlas ordinary-pickup total must equal 84");
}
const nativeIds = stages.stages.map(stage => stage.native).join(",");
if (nativeIds !== "0,1,2,3,4,5,8,9") throw new Error("unexpected main-stage native ID order");

const featureStates = new Set(["production", "beta", "proof", "partial", "needed", "open"]);
const featureKinds = new Set(["have", "need", "want", "unknown", "future"]);
for (const feature of project.featureBoard) {
  if (!featureStates.has(feature.state)) throw new Error("feature state: " + feature.name);
  if (!featureKinds.has(feature.kind)) throw new Error("feature kind: " + feature.name);
}
const compatStates = new Set(["established", "covered", "runtime", "partial", "pending", "missing", "rejected"]);
for (const row of project.compatibility) {
  if (!compatStates.has(row.status)) throw new Error("compatibility status: " + row.capability);
}

const requiredCurrentRecords = [
  ["rom", "rom.production.shared_file_entry_1a"],
  ["rom", "rom.production.turn_shared_prefix"],
  ["rom", "rom.production.toasty_module"],
  ["rom", "rom.production.toasty_audio_sample"],
  ["rdram", "rdram.production.expansion_pool"],
  ["rdram", "rdram.production.turn_module"],
  ["rdram", "rdram.production.toasty_module"],
];
for (const [spaceName, id] of requiredCurrentRecords) {
  if (!memory[spaceName].records.some(record => record.id === id)) {
    throw new Error("missing current memory record: " + id);
  }
}
const rdramRecord = id => memory.rdram.records.find(record => record.id === id);
const turn = rdramRecord("rdram.production.turn_module");
const donor = rdramRecord("rdram.production.toasty_module");
const focusEdges = [0x1AF420, 0x1AF820, turn.start, turn.end, donor.start, donor.end, 0x1B3420];
if (focusEdges[1] !== focusEdges[2] || focusEdges[4] !== 0x1B0000 ||
    focusEdges.some((edge, index) => index && edge < focusEdges[index - 1]) ||
    focusEdges.at(-1) - focusEdges[0] !== 0x4000) {
  throw new Error("RDRAM focus no longer partitions the 16 KiB reservation");
}
const currentHighRom = memory.rom.records.filter(record => record.class === "production" && record.start >= 0xF00000);
const sortedHighRom = [...currentHighRom].sort((a, b) => a.start - b.start);
if (sortedHighRom.some((record, index) => record.end > 0x1000000 ||
    (index && record.start < sortedHighRom[index - 1].end))) {
  throw new Error("current high-ROM focus allocations overlap or exceed the image");
}
for (const id of ["prod-turn-action", "prod-turn-decision", "prod-turn-release", "prod-turn-menu", "prod-shared-file1a", "prod-toasty-trigger", "prod-toasty-init", "prod-toasty-hud", "proof-sektor-v85"]) {
  if (!patches.patches.some(patch => patch.id === id)) {
    throw new Error("missing current patch record: " + id);
  }
}

const html = fs.readFileSync("index.html", "utf8");
const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1])
  .filter(script => script.trim());
for (const [index, script] of inlineScripts.entries()) {
  new vm.Script(script, { filename: "index-inline-" + index + ".js" });
}

for (const patch of patches.patches) {
  if (!["production", "proof-only"].includes(patch.class)) throw new Error("patch class: " + patch.id);
  if (patch.romStart !== null && !(patch.romStart >= 0 && patch.romEnd <= 0x1000000 && patch.romStart < patch.romEnd)) {
    throw new Error("patch ROM bounds: " + patch.id);
  }
  if (patch.physicalStart !== null && !(patch.physicalStart >= 0 && patch.physicalEnd <= 0x400000 && patch.physicalStart < patch.physicalEnd)) {
    throw new Error("patch RDRAM bounds: " + patch.id);
  }
}

console.log(
  "Research maps validated:",
  memory.rom.records.length + " ROM intervals,",
  memory.rdram.records.length + " RDRAM intervals,",
  patches.patches.length + " patch sites,",
  stages.stages.length + " stages / 84 pickups,",
  project.featureBoard.length + " feature cards,",
  project.compatibility.length + " compatibility rows,",
  inlineScripts.length + " inline script(s) parsed,",
  "source " + memory.sourceCommit.slice(0, 12)
);
