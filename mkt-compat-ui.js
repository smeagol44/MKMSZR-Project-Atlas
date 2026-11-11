(function () {
  "use strict";

  const { element, wikiLink, options, disclosure, textWithCode, projectUpdate } = window.AtlasUI;
  const { compatibility, compatibilityMilestones, fighterUpdates } = window.MKMSZ_PROJECT_DATA;
  const get = id => document.getElementById("compat-" + id);
  const search = get("q");
  const area = get("area");
  const status = get("status");
  const list = get("groups");
  const comparison = get("table");
  const listMode = get("mode-list");
  const compareMode = get("mode-table");
  const count = get("count");

  const statuses = new Map([
    ["established", "Established"],
    ["covered", "Host primitive"],
    ["runtime", "Runtime-confirmed"],
    ["partial", "Partial"],
    ["pending", "Pending"],
    ["missing", "Missing"],
    ["rejected", "Rejected"],
  ]);
  const areas = [...new Set(compatibility.map(row => row.area))];
  const population = key => compatibility.filter(row => row.status === key).length;
  options(area, areas.map(name => [name, name]));
  options(status, [...statuses].map(([key, label]) => [key, label + " (" + population(key) + ")"]));

  for (const update of fighterUpdates) {
    document.getElementById("fighter-updates").append(projectUpdate(...update));
  }
  for (const proof of compatibilityMilestones) {
    const row = element("article", "update-row");
    const heading = element("div", "update-heading");
    heading.append(element("h4", "", proof.version + " · " + proof.title),
                   element("span", "evidence-label", proof.evidence));
    row.append(heading, element("p", "", proof.detail), wikiLink("Proof owner", proof.source));
    get("milestones").append(row);
  }

  function evidence(status) {
    return element("span", "evidence-label evidence-" + status, statuses.get(status));
  }

  function capability(row) {
    const body = element("div", "index-body");
    const mapping = element("dl", "mapping");
    mapping.append(element("dt", "", "MKT donor"), element("dd", "", row.donor),
                   element("dt", "", "MKMSZ host"), element("dd", "", row.target));
    body.append(mapping, textWithCode(row.detail), wikiLink("Wiki owner", row.source));
    return disclosure([element("span", "record-title", row.capability), evidence(row.status)], body);
  }

  function renderList(rows) {
    for (const name of areas) {
      const matching = rows.filter(row => row.area === name);
      if (!matching.length) continue;
      const group = element("section", "capability-group");
      const entries = element("div", "index-list");
      entries.append(...matching.map(capability));
      group.append(element("h4", "", name), entries);
      list.append(group);
    }
  }

  function renderComparison(rows) {
    const table = element("table", "comparison-table");
    table.append(element("caption", "visually-hidden", "MKT to MKMSZ capability comparison"));
    const head = element("thead");
    const columns = element("tr");
    for (const title of ["Capability", "MKT donor", "MKMSZ host", "Evidence"]) {
      const cell = element("th", "", title);
      cell.scope = "col";
      columns.append(cell);
    }
    head.append(columns);
    const body = element("tbody");
    for (const row of rows) {
      const tr = element("tr");
      const title = element("th", "");
      title.scope = "row";
      title.append(element("strong", "", row.capability), element("small", "", row.area));
      const proof = element("td");
      proof.append(evidence(row.status), textWithCode(row.detail), wikiLink("Wiki owner", row.source));
      tr.append(title, element("td", "", row.donor), element("td", "", row.target), proof);
      body.append(tr);
    }
    table.append(head, body);
    comparison.append(table);
  }

  let compare = false;
  function render() {
    const terms = search.value.trim().toLowerCase().split(/\s+/);
    const rows = compatibility.filter(row => {
      const searchable = [...Object.values(row), statuses.get(row.status)].join(" ").toLowerCase();
      return (area.value === "all" || row.area === area.value)
        && (status.value === "all" || row.status === status.value)
        && terms.every(term => searchable.includes(term));
    });
    count.textContent = rows.length + " of " + compatibility.length + " capabilities";
    list.hidden = compare;
    comparison.hidden = !compare;
    listMode.setAttribute("aria-pressed", String(!compare));
    compareMode.setAttribute("aria-pressed", String(compare));
    list.replaceChildren();
    comparison.replaceChildren();
    if (!rows.length) {
      (compare ? comparison : list).append(element("p", "empty-state", "No matching capabilities."));
    } else if (compare) {
      renderComparison(rows);
    } else {
      renderList(rows);
    }
  }

  area.addEventListener("change", render);
  status.addEventListener("change", render);
  search.addEventListener("input", render);
  get("reset").addEventListener("click", () => {
    search.value = "";
    area.value = status.value = "all";
    render();
    search.focus();
  });
  listMode.addEventListener("click", () => { compare = false; render(); });
  compareMode.addEventListener("click", () => { compare = true; render(); });
  render();
})();
