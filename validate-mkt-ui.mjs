// Dependency-free interaction checks for the Atlas research indexes.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

class StubNode {
  constructor(tag = "div") {
    this.tagName = tag;
    this.children = [];
    this.attributes = {};
    this.events = {};
    this.hidden = false;
    this.className = "";
    this.textContent = "";
    this.value = "";
  }

  append(...children) { this.children.push(...children); }
  replaceChildren(...children) { this.children = children; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  addEventListener(type, callback) { this.events[type] = callback; }
  dispatch(type) { this.events[type](); }
  focus() { this.focused = true; }
  querySelector(tag) { return this.children.find(child => child.tagName === tag); }
}

const ids = new Set([...fs.readFileSync("index.html", "utf8").matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const nodes = new Map();
const document = {
  getElementById(id) {
    assert.ok(ids.has(id), "Missing element #" + id);
    if (!nodes.has(id)) nodes.set(id, new StubNode());
    return nodes.get(id);
  },
  createElement(tag) { return new StubNode(tag); },
};
const get = id => document.getElementById(id);
const selects = ["compat-area", "compat-status", "research-kind", "research-scope"];
selects.forEach(id => { get(id).value = "all"; });

const sandbox = vm.createContext({ window: {}, document });
for (const file of ["project-data.js", "ghidra-data.js", "atlas-ui.js", "mkt-compat-ui.js", "research-ui.js"]) {
  vm.runInContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });
}

const data = sandbox.window.MKMSZ_PROJECT_DATA.compatibility;
const list = get("compat-groups");
const table = get("compat-table");
assert.equal(get("compat-count").textContent, "28 of 28 capabilities");
assert.equal(get("compat-milestones").children.length, 4);
assert.equal(list.children.length, new Set(data.map(row => row.area)).size);
assert.equal(list.children.flatMap(group => group.children[1].children).length, 28);
assert.equal(table.hidden, true);
const entry = list.children[0].children[1].children[0];
assert.equal(entry.tagName, "details");
assert.equal(entry.querySelector("summary").children[0].textContent, data[0].capability);
assert.ok(entry.children[1].querySelector("a").href.endsWith(data[0].source));

const status = get("compat-status");
status.value = "runtime";
status.dispatch("change");
assert.equal(get("compat-count").textContent, "9 of 28 capabilities");
const search = get("compat-q");
search.value = "first-visible";
search.dispatch("input");
assert.equal(get("compat-count").textContent, "1 of 28 capabilities");
get("compat-mode-table").dispatch("click");
assert.equal(list.hidden, true);
assert.equal(table.hidden, false);
assert.equal(get("compat-mode-table").attributes["aria-pressed"], "true");
const body = table.children[0].querySelector("tbody");
assert.equal(body.children.length, 1);
assert.ok(body.children[0].children[3].querySelector("a").href);
get("compat-reset").dispatch("click");
assert.equal(get("compat-count").textContent, "28 of 28 capabilities");
get("compat-mode-list").dispatch("click");
assert.equal(list.hidden, false);

const ghidra = sandbox.window.MKMSZ_GHIDRA_DATA;
const records = get("research-records");
const researchCount = get("research-count");
const more = get("research-more");
assert.equal(researchCount.textContent, "Showing 25 of 624 records");
const firstRecord = records.children[0];
more.dispatch("click");
assert.equal(researchCount.textContent, "Showing 50 of 624 records");
assert.equal(records.children[0], firstRecord);
assert.equal(records.children[25].querySelector("summary").focused, true);

get("research-scope").value = "overlay_water";
get("research-scope").dispatch("change");
assert.ok(records.children.every(row => row.querySelector("summary").children[2].textContent === "Water · file 0xA1"));
get("research-kind").value = "Comment";
get("research-kind").dispatch("change");
get("research-query").value = "0x802f11a0";
get("research-query").dispatch("input");
assert.equal(records.children.length, 1);
assert.equal(more.hidden, true);
assert.ok(records.children[0].children[1].querySelector("a").href.includes(ghidra.sourceCommit + "/analysis/comments.tsv"));

get("research-reset").dispatch("click");
assert.equal(researchCount.textContent, "Showing 25 of 624 records");
get("research-kind").value = "Global";
get("research-kind").dispatch("change");
assert.ok(researchCount.textContent.includes("65 matching records"));
get("research-query").value = "missing-test-address";
get("research-query").dispatch("input");
assert.equal(records.children[0].textContent, "No matching metadata.");

console.log("Atlas research UI smoke passed: filters, details, comparison, scope, pagination, and source links");
