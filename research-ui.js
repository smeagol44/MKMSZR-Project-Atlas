(function () {
  "use strict";

  const { element, link, wikiLink, options, disclosure, textWithCode } = window.AtlasUI;
  const data = window.MKMSZ_GHIDRA_DATA;
  const get = id => document.getElementById("research-" + id);
  const kind = get("kind");
  const scope = get("scope");
  const search = get("query");
  const records = get("records");
  const count = get("count");
  const more = get("more");
  const repo = "https://github.com/" + data.sourceRepo;
  const pinned = repo + "/blob/" + data.sourceCommit + "/";
  const sources = get("sources");
  sources.append(link("Manifests at " + data.sourceCommit.slice(0, 8),
                      repo + "/tree/" + data.sourceCommit + "/analysis"),
                 wikiLink("Function Registry", "Function-Registry.md"));

  for (const item of data.findings) {
    const row = element("article", "update-row");
    const heading = element("div", "update-heading");
    heading.append(element("h4", "", item.title), element("span", "evidence-label", item.evidence));
    const refs = element("div", "source-links");
    refs.append(link("PR #" + item.pr, repo + "/pull/" + item.pr));
    if (item.source) refs.append(link("Manifest", pinned + item.source));
    row.append(heading, element("p", "", item.detail), refs);
    get("findings").append(row);
  }

  const audit = data.maintainerImport;
  const knowledge = data.knowledgeScope;
  const auditNode = get("audit");
  auditNode.append(
    element("p", "desc", "October 9 local Ghidra audit: " + audit.exact + "/" + audit.checked +
      " exact checks with zero mismatches. The newer manifests await a fresh maintainer import and audit."),
    element("p", "desc", "October Wiki audit: " + knowledge.routedFindings + "/" + knowledge.enumeratedFindings +
      " enumerated findings routed to a source. This measures the reviewed Wiki sample."),
    link("Local audit sign-off", pinned + "docs/local-migration-handoff.md")
  );

  const scopes = new Map(data.records.map(item => [item.scope || "global", item.location || "Global"]));
  options(kind, Object.entries(data.navigationCounts).map(([type, total]) => [type, type + " (" + total + ")"]));
  options(scope, [...scopes].sort(([a], [b]) => a.localeCompare(b)));

  function renderRecord(item) {
    const heading = [
      element("span", "record-title", item.title),
      element("code", "record-address", item.address),
      element("span", "record-scope", item.location || "Global"),
      element("span", "record-kind", item.category),
    ];
    const body = element("div", "index-body");
    body.append(element("span", "evidence-label", item.evidence), textWithCode(item.detail),
                link("Manifest source", pinned + item.source));
    return disclosure(heading, body);
  }

  const pageSize = 25;
  let shown = 0;
  let matches = [];
  function appendPage() {
    const next = matches.slice(shown, shown + pageSize);
    const entries = next.map(renderRecord);
    records.append(...entries);
    shown += next.length;
    count.textContent = "Showing " + shown + " of " + matches.length +
      (matches.length === data.records.length ? " records" : " matching records · " + data.records.length + " in catalog");
    more.hidden = shown >= matches.length;
    return entries[0];
  }

  function render() {
    const terms = search.value.trim().toLowerCase().split(/\s+/);
    matches = data.records.filter(item => {
      const searchable = [...Object.values(item), item.location || "Global"].join(" ").toLowerCase();
      return (kind.value === "all" || item.category === kind.value)
        && (scope.value === "all" || (item.scope || "global") === scope.value)
        && terms.every(term => searchable.includes(term));
    });
    records.replaceChildren();
    shown = 0;
    appendPage();
    if (!matches.length) records.append(element("p", "empty-state", "No matching metadata."));
  }

  kind.addEventListener("change", render);
  scope.addEventListener("change", render);
  search.addEventListener("input", render);
  get("reset").addEventListener("click", () => {
    kind.value = scope.value = "all";
    search.value = "";
    render();
    search.focus();
  });
  more.addEventListener("click", () => appendPage()?.querySelector("summary").focus());
  render();
})();
