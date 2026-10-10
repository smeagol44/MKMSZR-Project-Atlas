import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
for (const file of ["memory-data.js", "patch-data.js", "stage-data.js", "project-data.js", "ghidra-data.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const memory = context.window.MKMSZ_MEMORY_DATA;
const patches = context.window.MKMSZ_PATCH_DATA;
const stages = context.window.MKMSZ_STAGE_DATA;
const project = context.window.MKMSZ_PROJECT_DATA;
const ghidra = context.window.MKMSZ_GHIDRA_DATA;
for (const [name, value] of Object.entries({ memory, patches, stages, project, ghidra })) {
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
  ["rom", "rom.production.controls_extension"],
  ["rom", "rom.production.temple_special_check"],
  ["rom", "rom.production.lifecycle_v06"],
  ["rom", "rom.production.toasty_module"],
  ["rom", "rom.production.progression_flash"],
  ["rom", "rom.production.global_materializer_helper"],
  ["rom", "rom.production.inventory_hud_runtime"],
  ["rom", "rom.production.inventory_hud_portraits"],
  ["rom", "rom.production.inventory_hud_common_package"],
  ["rom", "rom.production.inventory_hud_data"],
  ["rom", "rom.production.toasty_audio_sample"],
  ["rom", "rom.production.temple_intro_audio_sample"],
  ["rom", "rom.production.file_5e_title"],
  ["rom", "rom.production.safe_selector_move_helper"],
  ["rom", "rom.production.global_stage_resources"],
  ["rom", "rom.generated.unassigned_tail"],
  ["rdram", "rdram.production.expansion_pool"],
  ["rdram", "rdram.production.turn_module"],
  ["rdram", "rdram.production.controls_extension"],
  ["rdram", "rdram.production.temple_special_check"],
  ["rdram", "rdram.production.lifecycle_v06"],
  ["rdram", "rdram.production.toasty_module"],
  ["rdram", "rdram.production.progression_flash"],
  ["rdram", "rdram.production.global_materializer_helper"],
  ["rdram", "rdram.production.inventory_hud_runtime"],
];
for (const [spaceName, id] of requiredCurrentRecords) {
  if (!memory[spaceName].records.some(record => record.id === id)) {
    throw new Error("missing current memory record: " + id);
  }
}
const rdramRecord = id => memory.rdram.records.find(record => record.id === id);
const turn = rdramRecord("rdram.production.turn_module");
const controls = rdramRecord("rdram.production.controls_extension");
const donor = rdramRecord("rdram.production.toasty_module");
const progression = rdramRecord("rdram.production.progression_flash");
const materializer = rdramRecord("rdram.production.global_materializer_helper");
const inventoryHud = rdramRecord("rdram.production.inventory_hud_runtime");
const switchOwner = rdramRecord("rdram.production.inventory_menu_switch");
const legendOwner = rdramRecord("rdram.production.inventory_legend");
if (!switchOwner || !legendOwner ||
    switchOwner.start !== inventoryHud.end || switchOwner.end !== 0x1B2F44 ||
    legendOwner.start !== 0x1B2F50 || legendOwner.end !== 0x1B30E6)
  throw new Error("Inventory four-box/legend runtime owners drifted");
const focusEdges = [0x1AF420, 0x1AF820, turn.start, turn.end, controls.start, controls.end, donor.start, donor.end, progression.start, progression.end, materializer.start, materializer.end, inventoryHud.start, inventoryHud.end, 0x1B3420];
if (focusEdges[1] !== focusEdges[2] || controls.start !== 0x1AFC30 || controls.end !== 0x1B0880 ||
    donor.start !== 0x1B1000 || donor.end !== 0x1B2132 ||
    progression.start !== 0x1B2160 || progression.end !== 0x1B2310 ||
    materializer.start !== 0x1B2310 || materializer.end !== 0x1B28F0 ||
    inventoryHud.start !== 0x1B28F0 || inventoryHud.end !== 0x1B2DF0 ||
    focusEdges.some((edge, index) => index && edge < focusEdges[index - 1]) ||
    focusEdges.at(-1) - focusEdges[0] !== 0x4000) {
  throw new Error("RDRAM focus no longer partitions the 16 KiB reservation");
}
const controlsSlices = memory.rdram.controlsSlices;
const expectedControlsSlices = [
  ["attack", 0x1AFC30, 0x1AFE90],
  ["specials", 0x1AFE90, 0x1B0310],
  ["jump", 0x1B0310, 0x1B0690],
  ["run", 0x1B0690, 0x1B0880],
];
if (!Array.isArray(controlsSlices) || controlsSlices.length !== expectedControlsSlices.length ||
    controlsSlices.some((slice, index) => {
      const [id, start, end] = expectedControlsSlices[index];
      return slice.id !== id || slice.start !== start || slice.end !== end ||
        !slice.title || !slice.description || !slice.notes ||
        (index && slice.start !== controlsSlices[index - 1].end);
    }) || controlsSlices[0].start !== controls.start || controlsSlices.at(-1).end !== controls.end ||
    controlsSlices.reduce((sum, slice) => sum + slice.end - slice.start, 0) !== controls.end - controls.start) {
  throw new Error("controls display slices must partition the canonical RDRAM owner exactly");
}
const romRecord = id => memory.rom.records.find(record => record.id === id);
if (romRecord("rom.production.controls_extension").start !== 0xF68410 ||
    romRecord("rom.production.controls_extension").end !== 0xF69060 ||
    romRecord("rom.production.toasty_module").start !== 0xF697E0 ||
    romRecord("rom.production.toasty_module").end !== 0xF6A912 ||
    romRecord("rom.production.progression_flash").start !== 0xF6A940 ||
    romRecord("rom.production.progression_flash").end !== 0xF6AAF0 ||
    romRecord("rom.production.global_materializer_helper").start !== 0xF6AAF0 ||
    romRecord("rom.production.global_materializer_helper").end !== 0xF6B0D0 ||
    romRecord("rom.production.inventory_hud_runtime").start !== 0xF6B0D0 ||
    romRecord("rom.production.inventory_hud_runtime").end !== 0xF6B5D0 ||
    romRecord("rom.production.toasty_audio_sample").start !== 0xF6B5D0 ||
    romRecord("rom.production.toasty_audio_sample").end !== 0xF6BDE6 ||
    romRecord("rom.production.temple_intro_audio_sample").start !== 0xF6BDF0 ||
    romRecord("rom.production.temple_intro_audio_sample").end !== 0xF6D810) {
  throw new Error("ROM controls / donor-audio bounds diverge from the canonical map");
}
if (romRecord("rom.production.global_stage_resources").start !== 0x1000000 ||
    romRecord("rom.production.global_stage_resources").end !== 0x1800000 ||
    romRecord("rom.production.inventory_hud_portraits").start !== 0x1800000 ||
    romRecord("rom.production.inventory_hud_portraits").end !== 0x1808DC0 ||
    romRecord("rom.production.inventory_hud_common_package").start !== 0x1809000 ||
    romRecord("rom.production.inventory_hud_common_package").end !== 0x1814000 ||
    romRecord("rom.production.inventory_hud_data").start !== 0x1814000 ||
    romRecord("rom.production.inventory_hud_data").end !== 0x1815200 ||
    romRecord("rom.production.inventory_menu_switch_transport").start !== 0x1816000 ||
     romRecord("rom.production.inventory_menu_switch_transport").end !== 0x1819C00 ||
     romRecord("rom.generated.inventory_transport_alignment").start !== 0x1815200 ||
     romRecord("rom.generated.inventory_transport_alignment").end !== 0x1816000 ||
     romRecord("rom.generated.unassigned_tail").start !== 0x1819C00 ||
    romRecord("rom.generated.unassigned_tail").end !== 0x2000000) {
  throw new Error("generated-output extension diverges from global-v2 / Inventory HUD allocation policy");
}
if (romRecord("rom.production.file_5e_title").start !== 0x4E3060 ||
    romRecord("rom.production.file_5e_title").end !== 0x512440 ||
    romRecord("rom.stock.title_former_high").start !== 0xF90000 ||
    romRecord("rom.stock.title_former_high").end !== 0xFC1000) {
  throw new Error("current in-place title ownership diverges from the canonical map");
}
const currentHighRom = memory.rom.records.filter(record => record.class === "production" && record.start >= 0xF00000 && record.start < 0x1000000);
const sortedHighRom = [...currentHighRom].sort((a, b) => a.start - b.start);
if (sortedHighRom.some((record, index) => record.end > 0x1000000 ||
    (index && record.start < sortedHighRom[index - 1].end))) {
  throw new Error("current high-ROM focus allocations overlap or exceed the image");
}
for (const id of [
  "prod-turn-action", "prod-turn-decision", "prod-turn-release", "prod-turn-menu",
  "prod-shared-file1a", "prod-toasty-trigger", "prod-toasty-init", "prod-toasty-hud",
  "prod-required-powers-gate", "prod-selector-move-helper", "prod-selector-blue-palette",
  "prod-sealed-label", "prod-progression-flash-module", "prod-global-materializer-helper",
  "prod-inventory-hud-preview", "prod-inventory-hud-row", "prod-inventory-hud-helper-span",
  "prod-inventory-hud-data-size", "prod-inventory-hud-required-label", "prod-inventory-hud-check-count",
  "prod-inventory-menu-switch-hook", "prod-inventory-legend-hook",
  "prod-inventory-empty-box-power-ups", "prod-shared-file-1a-transport",
  "prod-temple-audio-event123", "prod-temple-audio-event124", "prod-temple-audio-event125",
  "prod-temple-audio-host-patch", "prod-temple-audio-host-subpatch", "prod-temple-audio-host-wave",
  "prod-temple-audio-host-predictor", "proof-sektor-v85",
]) {
  if (!patches.patches.some(patch => patch.id === id)) {
    throw new Error("missing current patch record: " + id);
  }
}

const html = fs.readFileSync("index.html", "utf8");
new vm.Script(fs.readFileSync("research-ui.js", "utf8"), {filename:"research-ui.js"});
const counts={Function:139,Global:35,"Code label":2,Bookmark:105,Type:12,"Typed data":1,Comment:232};
if (ghidra.sourceRepo !== "smeagol44/MKMSZ-Ghidra" ||
    ghidra.maintainerImport.exact !== 623 || ghidra.maintainerImport.checked !== 623 ||
    ghidra.maintainerImport.mismatches !== 0 ||
    ghidra.records.length !== 526) throw new Error("Ghidra verified manifest snapshot is inconsistent");
for (const [cat,num] of Object.entries(counts)) {
  if (ghidra.records.filter(r=>r.category===cat).length!==num)
    throw new Error("Ghidra metadata category drift: "+cat);
}
if (!ghidra.records.some(r=>r.category==="Typed data" && r.address==="0x800B0F68" &&
      r.title==="stock_low_kick_special_descriptor") ||
    !ghidra.records.some(r=>r.category==="Bookmark" && r.address==="0x80030974" &&
      r.detail.includes("switch arm of 0x800304C0")))
  throw new Error("Ghidra stock-knowledge navigation regression");
if (!html.includes('data-view="research"') || !html.includes('id="research-records"') ||
    !html.includes('src="ghidra-data.js?v=research-20261010"') ||
    !html.includes('src="research-ui.js?v=research-20261010"'))
  throw new Error("Ghidra research page assets not wired up");
if (!project.featureBoard.find(f=>f.name==="Randomizer HUD")?.detail.includes("upstream correction Pending") ||
    !project.featureBoard.find(f=>f.name==="Four Inventory Boxes")?.detail.includes("Left/Right"))
  throw new Error("Recent Inventory feature state absent");
const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1])
  .filter(script => script.trim());
for (const [index, script] of inlineScripts.entries()) {
  new vm.Script(script, { filename: "index-inline-" + index + ".js" });
}
if (/\btail&&\{record:tail\b/.test(html)) {
  throw new Error("dashboard contains stale undefined RDRAM capacity tail reference");
}
if (!html.includes("seg.dataset.recordId=r.id") ||
    !html.includes("selectMemoryRecord(key,space,r,r.owner)") ||
    !html.includes("function syncMemorySelection(key,id)")) {
  throw new Error("ROM/RDRAM bars and exact records are not wired into shared selection state");
}
if (html.includes('.roadmap-segment:hover,.roadmap-segment.selected{outline')) {
  throw new Error("roadmap selector uses the old clipped outline geometry");
}
if (!html.includes("inventoryHudTail&&{record:inventoryHudTail") ||
     !html.includes("inventorySwitch&&{record:inventorySwitch") ||
     !html.includes("inventoryLegend&&{record:inventoryLegend") ||
    !html.includes("progression&&{record:progression") ||
    !html.includes("materializer&&{record:materializer") ||
    !html.includes("inventoryHud&&{record:inventoryHud")) {
  throw new Error("RDRAM capacity renderer is missing current progression/materializer/Inventory HUD slices");
}
if (!html.includes("Game Over inventory boundary") ||
    !html.includes("Native Inventory HUD") ||
    !html.includes("Inventory HUD generated assets")) {
  throw new Error("Decomp Readiness is missing current lifecycle/HUD findings");
}
const shuffledPower = project.featureBoard.find(feature => feature.name === "Shuffled Power Order");
const hudFeature = project.featureBoard.find(feature => feature.name === "Randomizer HUD");
const webFeature = project.featureBoard.find(feature => feature.name === "Browser Patcher Experience");
if (!shuffledPower || shuffledPower.state !== "beta" || shuffledPower.scope !== "1.0" ||
    !hudFeature || hudFeature.state !== "beta" || hudFeature.kind !== "have" ||
    !webFeature || webFeature.state !== "production") {
  throw new Error("Feature Board is missing current shuffled-power / HUD / web-patcher state");
}

for (const patch of patches.patches) {
  if (!["production", "proof-only"].includes(patch.class)) throw new Error("patch class: " + patch.id);
  if (patch.romStart !== null && !(patch.romStart >= 0 && patch.romEnd <= 0x2000000 && patch.romStart < patch.romEnd)) {
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
