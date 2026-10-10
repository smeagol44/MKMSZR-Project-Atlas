// Dependency-free DOM smoke test for the responsive MKT compatibility explorer.
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

class StubNode {
  constructor(tag="div"){
    this.tagName=tag;this.children=[];this.dataset={};this.style={};
    this.attributes={};this.events={};this.hidden=false;this.className="";
    this.textContent="";this.value="all";this.title="";
    this.classList={
      toggle:(value,active)=>{
        const tokens=new Set(this.className.split(/\s+/).filter(Boolean));
        if(active)tokens.add(value);else tokens.delete(value);
        this.className=[...tokens].join(" ");
      }
    };
  }
  append(...children){this.children.push(...children);return this}
  replaceChildren(...children){this.children=[...children];return this}
  setAttribute(name,value){this.attributes[name]=String(value)}
  addEventListener(type,fn){this.events[type]=fn}
  dispatch(type){assert.ok(this.events[type],"missing "+type+" on "+this.tagName);this.events[type]()}
  querySelector(selector){
    const target=selector.startsWith(".")?selector.slice(1):null;
    const walk=node=>{
      if(target&&node.className.split(/\s+/).includes(target))return node;
      for(const child of node.children){const found=walk(child);if(found)return found}
      return null;
    };
    return walk(this);
  }
  querySelectorAll(selector){
    const all=[];
    const visit=node=>{
      if((selector==="button"&&node.tagName==="button")||
         (selector==="button[data-key]"&&node.tagName==="button"&&node.dataset.key))all.push(node);
      for(const child of node.children)visit(child);
    };
    visit(this);return all;
  }
}
const ids=[
"compat-area","compat-status","compat-q","compat-reset",
"compat-areas","compat-stats","compat-status-scale","compat-count",
"compat-groups","compat-table","compat-mode-cards","compat-mode-table","compat-milestones"
];
const els=Object.fromEntries(ids.map(id=>[id,new StubNode(id==="compat-q"?"input":"div")]));
for(const k of ["compat-area","compat-status"])els[k].value="all";
els["compat-q"].value="";
const root=new StubNode("section");
root.querySelector=sel=>els[sel.slice(1)]||null;
const document={
  getElementById:id=>id==="view-compat"?root:null,
  createElement:tag=>new StubNode(tag)
};
const sandbox={window:{},document,console};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("project-data.js","utf8"),sandbox,{filename:"project-data.js"});
vm.runInContext(fs.readFileSync("mkt-compat-ui.js","utf8"),sandbox,{filename:"mkt-compat-ui.js"});
const data=sandbox.window.MKMSZ_PROJECT_DATA.compatibility;
assert.equal(data.length,28);
assert.equal(els["compat-count"].textContent.startsWith("28 of 28"),true);
assert.equal(els["compat-stats"].children.length,4);
assert.equal(els["compat-milestones"].children.length,4);
assert.equal(els["compat-groups"].children.length,new Set(data.map(r=>r.area)).size);
for (const group of els["compat-groups"].children) {
  const list=group.children[1];
  assert.equal(Number(list.dataset.count),list.children.length);
}
assert.equal(els["compat-groups"].children.find(g=>g.children[1].dataset.count==="5").children[1].children.length,5);
assert.equal(els["compat-table"].hidden,true);
assert.equal(els["compat-mode-cards"].attributes["aria-pressed"],"true");
const filtered=els["compat-status"];
filtered.value="runtime";filtered.dispatch("change");
assert.equal(els["compat-count"].textContent.startsWith("7 of 28"),true);
const search=els["compat-q"];search.value="first-visible";search.dispatch("input");
assert.equal(els["compat-count"].textContent.startsWith("1 of 28"),true);
search.value="";search.dispatch("input");
els["compat-mode-table"].dispatch("click");
assert.equal(els["compat-groups"].hidden,true);
assert.equal(els["compat-table"].hidden,false);
assert.equal(els["compat-mode-table"].attributes["aria-pressed"],"true");
const table=els["compat-table"].children[0];
assert.equal(table.tagName,"table");
const body=table.children.find(x=>x.tagName==="tbody");
assert.equal(body.children.length,14); // seven filtered capabilities, two rows per item
const detailToggle=body.children[0].querySelector(".compat-table-expand");
assert.ok(detailToggle);
assert.equal(detailToggle.attributes["aria-expanded"],"false");
detailToggle.dispatch("click");
assert.equal(detailToggle.attributes["aria-expanded"],"true");
assert.equal(body.children[1].hidden,false);
els["compat-reset"].dispatch("click");
assert.equal(els["compat-count"].textContent.startsWith("28 of 28"),true);
els["compat-mode-cards"].dispatch("click");
assert.equal(els["compat-groups"].hidden,false);
const item=els["compat-groups"].children[0].children[1].children[0];
const evidence=item.children.find(x=>x.className==="compat-insight");
assert.ok(evidence && evidence.children.some(c=>c.tagName==="p"&&c.textContent.length>10));
assert.ok(evidence && evidence.children.some(c=>c.tagName==="a"&&c.href.includes("github.com")));
const areaChips=els["compat-areas"].querySelectorAll("button");
assert.ok(areaChips.length>5);
areaChips[1].dispatch("click");
const firstArea=data[0].area;
assert.equal(els["compat-count"].textContent.startsWith(data.filter(r=>r.area===firstArea).length+" of 28"),true);
console.log("MKT compatibility DOM smoke: 28 records, bounded milestones, status/search/area filters, card/table toggles, accessible table expansion and source links PASS");
