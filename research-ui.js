// Read-only, source-linked Atlas rendering. Metadata is escaped through textContent.
(function(){
"use strict";
const d=window.MKMSZ_GHIDRA_DATA;
if(!d)return;
const stats=document.getElementById("research-stats"),
 findings=document.getElementById("research-findings"),
 kind=document.getElementById("research-kind"),
 search=document.getElementById("research-query"),
 reset=document.getElementById("research-reset"),
 count=document.getElementById("research-count"),
 records=document.getElementById("research-records"),
 more=document.getElementById("research-more");
const sources=(repo,path)=>"https://github.com/"+repo+"/blob/main/"+path;
function elt(tag,cls,value){
 const v=document.createElement(tag);
 if(cls)v.className=cls;
 if(value!==undefined)v.textContent=value;
 return v;
}
const figures=[
 ["Local import audit",d.maintainerImport.exact+"/"+d.maintainerImport.checked,"0 mismatches, user-observed"],
 ["Named functions / globals",d.maintainerImport.functions+" / "+d.maintainerImport.globals,"Clean-ROM global scope"],
 ["Managed types / comments / bookmarks",d.maintainerImport.types+" / "+d.maintainerImport.comments+" / "+d.maintainerImport.bookmarks,"Detailed type descriptions audited"],
 ["Known Wiki findings routed",d.knowledgeScope.routedFindings+"/"+d.knowledgeScope.enumeratedFindings,"Not an all-code completion measure"]
];
for(const [label,value,note] of figures){
 const card=elt("div","mem-stat");
 card.append(elt("span","",label),elt("strong","",value),elt("small","",note));
 stats.append(card);
}
for(const item of d.findings){
 const card=elt("article","research-finding"),
 link=elt("a","","View owner source ↗");
 link.href=sources(item.sourceRepo,item.source);link.target="_blank";link.rel="noreferrer";
 card.append(elt("h3","",item.title),elt("div","research-meta",item.date+" · "+item.evidence),
             elt("p","",item.detail),link);
 findings.append(card);
}
const types=[...new Set(d.records.map(x=>x.category))];
for(const value of types){const option=elt("option","",value);option.value=value;kind.append(option)}
let pageSize=60;
function makeRecord(item){
 const card=elt("article","research-record");
 const link=elt("a","",item.source+" ↗");
 link.href=sources(d.sourceRepo,item.source);link.target="_blank";link.rel="noreferrer";
 card.append(elt("div","address",item.address+" · "+item.category),
             elt("h3","",item.title),elt("div","research-meta",item.evidence),
             elt("p","",item.detail),link);
 return card;
}
function render(){
 const term=search.value.trim().toLowerCase(),type=kind.value;
 const matching=d.records.filter(item=>(type==="all"||item.category===type)&&
  (!term||[item.category,item.address,item.title,item.evidence,item.detail].join(" ").toLowerCase().includes(term)));
 records.replaceChildren(...matching.slice(0,pageSize).map(makeRecord));
 count.textContent="Showing "+Math.min(pageSize,matching.length)+" of "+matching.length+
  " searchable metadata records · Ghidra "+d.sourceCommit.slice(0,12)+" · locally audited "+d.maintainerImport.date;
 more.hidden=matching.length<=pageSize;
}
kind.addEventListener("change",()=>{pageSize=60;render()});
search.addEventListener("input",()=>{pageSize=60;render()});
reset.addEventListener("click",()=>{kind.value="all";search.value="";pageSize=60;render()});
more.addEventListener("click",()=>{pageSize+=60;render()});
render();
})();
