/* MKT → MKMSZ compatibility explorer: present the canonical 28 records without altering evidence. */
(function(){
"use strict";
const data=window.MKMSZ_PROJECT_DATA.compatibility;
const root=document.getElementById("view-compat");
if(!root || !Array.isArray(data))return;
const areaSelect=root.querySelector("#compat-area");
const statusSelect=root.querySelector("#compat-status");
const search=root.querySelector("#compat-q");
const reset=root.querySelector("#compat-reset");
const areaChips=root.querySelector("#compat-areas");
const stats=root.querySelector("#compat-stats");
const milestones=root.querySelector("#compat-milestones");
const scale=root.querySelector("#compat-status-scale");
const count=root.querySelector("#compat-count");
const groups=root.querySelector("#compat-groups");
const table=root.querySelector("#compat-table");
const modeCards=root.querySelector("#compat-mode-cards");
const modeTable=root.querySelector("#compat-mode-table");
const wiki="https://github.com/smeagol44/MKMSZ-Randomizer/blob/main/wiki/";
const statusList=[
 ["established","Established","Accepted architecture"],
 ["covered","Covered","Native primitive established"],
 ["runtime","Runtime-proven","Bounded proof only"],
 ["partial","Partial","Some mapping remains"],
 ["pending","Pending","Not yet composed"],
 ["missing","Missing","No general adapter"],
 ["rejected","Rejected","Unsupported direct path"]
];
const labels=Object.fromEntries(statusList.map(x=>[x[0],x[1]]));
for(const item of (window.MKMSZ_PROJECT_DATA.compatibilityMilestones||[])){
 const tile=document.createElement("article");tile.className="compat-milestone";
 const top=document.createElement("div");top.className="compat-milestone-head";
 const version=document.createElement("strong");version.textContent=item.version;
 const ev=document.createElement("span");ev.textContent="PROOF · "+item.version;
 top.append(version,ev);
 const title=document.createElement("h4");title.textContent=item.title;
 const description=document.createElement("p");description.textContent=item.detail;
 const anchor=document.createElement("a");anchor.className="compat-source";
 anchor.textContent="See proof owner ↗";
 anchor.href=wiki+encodeURIComponent(item.source);anchor.target="_blank";anchor.rel="noopener noreferrer";
 tile.append(top,title,description,anchor);milestones.append(tile);
}

const areas=[...new Set(data.map(x=>x.area))];
let mode="cards";
function node(tag,cls,text){
 const el=document.createElement(tag);
 if(cls)el.className=cls;
 if(text!==undefined)el.textContent=text;
 return el;
}
function sourceLink(row){
 const a=node("a","compat-source","Read canonical owner ↗");
 a.href=wiki+encodeURIComponent(row.source);a.target="_blank";a.rel="noopener noreferrer";
 return a;
}
function badge(status){
 const b=node("span","compat-status-pill status-"+status,labels[status]);
 b.dataset.status=status;return b;
}
function tally(items,key){return items.filter(x=>x.status===key).length}
function setStatus(key){
 statusSelect.value=key;render();
}
for(const area of areas){
 const option=node("option","",area);option.value=area;areaSelect.append(option);
}
for(const [key,label] of statusList){
 const option=node("option","",label);option.value=key;statusSelect.append(option);
}
const categories=[
 ["Foundation",()=>["established","covered"].reduce((n,key)=>n+tally(data,key),0),"Defined strategy & native operations"],
 ["Bounded proofs",()=>tally(data,"runtime"),"Demonstrated on specific routes"],
 ["Still translating",()=>tally(data,"partial")+tally(data,"pending"),"Research/integration still needed"],
 ["Unresolved / ruled out",()=>tally(data,"missing")+tally(data,"rejected"),"Missing adapters and rejected direct routes"]
];
for(const [title,value,subtitle] of categories){
 const box=node("div","compat-kpi");
 box.append(node("span","compat-kpi-label",title),node("strong","compat-kpi-value",String(value())),node("small","compat-kpi-note",subtitle));
 stats.append(box);
}
const distribution=node("div","compat-meter");
distribution.setAttribute("role","group");
distribution.setAttribute("aria-label","Filter the 28 compatibility records by evidence status");
for(const [key,label,description] of statusList){
 const total=tally(data,key);
 const btn=node("button","compat-meter-segment status-"+key);
 btn.type="button";btn.dataset.key=key;btn.style.flex=String(total);
 btn.setAttribute("aria-label",label+": "+total+" records. Click to filter.");
 btn.title=label+": "+total+" • "+description;
 btn.addEventListener("click",()=>setStatus(statusSelect.value===key?"all":key));
 distribution.append(btn);
}
scale.append(distribution);
const legend=node("div","compat-legend");
for(const [key,label,description] of statusList){
 const b=node("button","compat-legend-item");
 b.type="button";b.dataset.key=key;
 b.append(node("span","compat-dot status-"+key),node("span","",label+" · "+tally(data,key)));
 b.title=description;
 b.addEventListener("click",()=>setStatus(statusSelect.value===key?"all":key));
 legend.append(b);
}
scale.append(legend);
const chipAll=node("button","compat-area-chip","All areas · "+data.length);
chipAll.type="button";chipAll.dataset.area="all";areaChips.append(chipAll);
for(const area of areas){
 const chip=node("button","compat-area-chip",area+" · "+data.filter(x=>x.area===area).length);
 chip.type="button";chip.dataset.area=area;areaChips.append(chip);
}
for(const chip of areaChips.querySelectorAll("button")){
 chip.addEventListener("click",()=>{areaSelect.value=chip.dataset.area;render()});
}
function makeBadgeRow(row){
 const div=node("div","compat-card-top");
 div.append(node("span","compat-area-tag",row.area),badge(row.status));
 return div;
}
function flow(row){
 const wrap=node("div","compat-mini-flow");
 const donor=node("div","compat-mini-side");
 donor.append(node("span","compat-mini-label","MKT donor"),node("strong","",row.donor));
 const arrow=node("span","compat-mini-arrow","→");
 arrow.setAttribute("aria-hidden","true");
 const target=node("div","compat-mini-side");
 target.append(node("span","compat-mini-label","MKMSZ target"),node("strong","",row.target));
 wrap.append(donor,arrow,target);
 return wrap;
}
function insight(row){
 const wrap=node("div","compat-insight");
 wrap.append(node("p","compat-insight-copy",row.detail),sourceLink(row));
 return wrap;
}
function card(row){
 const article=node("article","compat-capability status-"+row.status);
 article.append(makeBadgeRow(row),node("h3","",row.capability),flow(row),insight(row));
 return article;
}
function tableCell(row,key){
 const td=node("td");
 if(key==="status")td.append(badge(row.status));
 else if(key==="capability"){
   const button=node("button","compat-table-expand",row.capability);
   button.type="button";
   td.append(button);
 } else td.textContent=row[key];
 return td;
}
function renderTable(items){
 table.replaceChildren();
 const tableEl=node("table","compat-data-table");
 const cap=node("caption","","MKT donor capability comparison; choose a capability to see its evidence");
 tableEl.append(cap);
 const thead=node("thead"),heads=node("tr");
 for(const col of ["Area","Capability · details","MKT donor","MKMSZ target","Status"]){
   const th=node("th","",col);th.scope="col";heads.append(th);
 }
 thead.append(heads);tableEl.append(thead);
 const tbody=node("tbody");
 for(const row of items){
   const tr=node("tr","compat-data-row status-"+row.status);
   const detailTr=node("tr","compat-data-detail");detailTr.hidden=true;
   for(const col of ["area","capability","donor","target","status"])tr.append(tableCell(row,col));
   const detailTd=node("td");detailTd.colSpan=5;
   detailTd.append(node("p","",row.detail),sourceLink(row));detailTr.append(detailTd);
   const button=tr.querySelector(".compat-table-expand");
   button.setAttribute("aria-expanded","false");
   button.addEventListener("click",()=>{
      const next=detailTr.hidden;
      detailTr.hidden=!next;
      button.setAttribute("aria-expanded",String(next));
   });
   tbody.append(tr,detailTr);
 }
 tableEl.append(tbody);
 table.append(tableEl);
}
function renderCards(items){
 groups.replaceChildren();
 const matchingAreas=[...new Set(items.map(x=>x.area))];
 for(const area of matchingAreas){
   const group=node("section","compat-area-group");
   const header=node("div","compat-area-head");
   header.append(node("h3","",area),node("span","",items.filter(x=>x.area===area).length+" capabilities"));
   const rows=items.filter(x=>x.area===area);
   const list=node("div","compat-card-grid");
   list.dataset.count=String(rows.length);
   for(const row of rows)list.append(card(row));
   group.append(header,list);groups.append(group);
 }
}
function render(){
 const area=areaSelect.value,stat=statusSelect.value,term=search.value.trim().toLowerCase();
 const filtered=data.filter(x=>(area==="all"||x.area===area) &&
  (stat==="all"||x.status===stat) &&
  (!term||[x.area,x.capability,x.donor,x.target,x.status,x.detail].join(" ").toLowerCase().includes(term)));
 const result=String(filtered.length)+" of "+data.length+" capabilities";
 count.textContent=result+(filtered.length?" · Browse the translation cards below":" · No matches — try Reset");
 for(const chip of areaChips.querySelectorAll("button")){
  const active=chip.dataset.area===area;
  chip.classList.toggle("is-active",active);
  chip.setAttribute("aria-pressed",String(active));
 }
 for(const b of scale.querySelectorAll("button[data-key]")){
  const active=b.dataset.key===stat;
  b.classList.toggle("is-active",active);
  b.setAttribute("aria-pressed",String(active));
 }
 modeCards.classList.toggle("is-active",mode==="cards");
 modeTable.classList.toggle("is-active",mode==="table");
 modeCards.setAttribute("aria-pressed",String(mode==="cards"));
 modeTable.setAttribute("aria-pressed",String(mode==="table"));
 groups.hidden=mode!=="cards";table.hidden=mode!=="table";
 renderCards(filtered);
 renderTable(filtered);
 if(!filtered.length){
    if(mode==="cards")groups.append(node("p","compat-empty","No matching capabilities. Adjust the filters or reset."));
    else table.append(node("p","compat-empty","No matching capabilities. Adjust the filters or reset."));
 }
}
areaSelect.addEventListener("change",render);
statusSelect.addEventListener("change",render);
search.addEventListener("input",render);
reset.addEventListener("click",()=>{areaSelect.value="all";statusSelect.value="all";search.value="";render()});
modeCards.addEventListener("click",()=>{mode="cards";render()});
modeTable.addEventListener("click",()=>{mode="table";render()});
render();
})();
