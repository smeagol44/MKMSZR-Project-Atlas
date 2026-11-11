(function () {
  "use strict";

  const { element, link, options, disclosure, textWithCode } = window.AtlasUI;
  const { rows, previousTotals, wikiCommit, ghidraCommit, snapshot } = window.MKMSZ_READINESS_DATA;
  const get = name => document.getElementById("readiness-" + name);
  const rating = get("rating");
  const subsystem = get("subsystem");
  const search = get("query");
  const list = get("findings");
  const more = get("more");
  const grid = get("grid");
  const heading = get("findings-title");
  const statuses = [
    ["g", "Decomp-ready"],
    ["y", "Partial"],
    ["b", "Largely unknown"],
  ];

  const wiki = "https://github.com/smeagol44/MKMSZ-Randomizer/blob/" + wikiCommit + "/wiki/";
  get("sources").append(
    link("Wiki evidence · " + wikiCommit.slice(0, 7), wiki + "Function-Registry.md"),
    link("Ghidra manifests · " + ghidraCommit.slice(0, 7),
         "https://github.com/smeagol44/MKMSZ-Ghidra/tree/" + ghidraCommit + "/analysis")
  );

  options(rating, statuses);
  options(subsystem, rows.map(row => [row.name, row.name]));

  const totals = statuses.map(([key, label]) => [key, label, rows.reduce((sum, row) => sum + row.counts[key], 0)]);
  for (const [key, label, total] of totals) {
    const stat = element("div", "readiness-stat");
    stat.append(element("span", "readiness-swatch readiness-" + key),
                element("strong", "", String(total)),
                element("span", "", label));
    get("totals").append(stat);
  }

  const gains = rows.flatMap(row => row.findings).filter(
    ([key, , , , , , reviewed, previous]) => reviewed === snapshot && key === "g" && previous === "y"
  );
  const reviewDate = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", timeZone: "UTC" })
    .format(new Date(snapshot + "T00:00:00Z"));
  get("update").textContent = reviewDate + " review moved " + gains.length + " scoped units from partial to decomp-ready (" +
    previousTotals.g + " → " + totals[0][2] + " decomp-ready).";

  const entries = rows.flatMap(row => row.findings.map(finding => ({ row, finding })));
  entries.sort((a, b) => Number(b.finding[6] === snapshot) - Number(a.finding[6] === snapshot));
  const rowButtons = new Map();
  for (const row of rows) {
    const button = element("button", "readiness-row");
    button.type = "button";
    button.setAttribute("aria-label", row.name + ". " +
      statuses.map(([key, label]) => row.counts[key] + " " + label.toLowerCase()).join(", "));
    const stripe = element("span", "readiness-stripe");
    stripe.setAttribute("aria-hidden", "true");
    for (const [key] of statuses) {
      for (let index = 0; index < row.counts[key]; index++) {
        stripe.append(element("span", "readiness-" + key));
      }
    }
    button.append(element("span", "readiness-row-name", row.name),
                  stripe, element("span", "readiness-row-counts", statuses.map(([key]) => row.counts[key]).join(" / ")));
    button.addEventListener("click", () => {
      subsystem.value = subsystem.value === row.name ? "all" : row.name;
      render();
      heading.focus();
    });
    rowButtons.set(row.name, button);
    grid.append(button);
  }

  function findingEntry({ row, finding }) {
    const [key, title, address, detail, source, evidence, reviewed, previous] = finding;
    const body = element("div", "index-body");
    body.append(element("p", "readiness-finding-meta", row.name + " · " + address));
    if (evidence) body.append(element("p", "readiness-finding-meta", evidence));
    if (reviewed && previous && previous !== key) {
      body.append(element("p", "readiness-finding-meta", reviewDate + " review · " +
        statuses.find(([status]) => status === previous)[1] + " → " + statuses.find(([status]) => status === key)[1]));
    }
    body.append(textWithCode(detail), link(source ? "Wiki evidence" : "Subsystem Wiki", wiki + (source || row.owner)));
    return disclosure([
      element("span", "record-title", title),
      element("span", "evidence-label readiness-label-" + key, statuses.find(([status]) => status === key)[1]),
    ], body);
  }

  const pageSize = 20;
  let matching = [];
  let shown = 0;
  function appendPage() {
    const page = matching.slice(shown, shown + pageSize).map(findingEntry);
    list.append(...page);
    shown += page.length;
    get("count").textContent = matching.length
      ? "Showing " + shown + " of " + matching.length + " named findings"
      : "No matching findings";
    more.hidden = shown >= matching.length;
    return page[0];
  }

  function render() {
    const terms = search.value.trim().toLowerCase().split(/\s+/);
    matching = entries.filter(({ row, finding }) => {
      const searchable = [row.name, ...finding].join(" ").toLowerCase();
      return (subsystem.value === "all" || subsystem.value === row.name)
        && (rating.value === "all" || rating.value === finding[0])
        && terms.every(term => searchable.includes(term));
    });
    for (const [name, button] of rowButtons) {
      button.setAttribute("aria-pressed", String(name === subsystem.value));
    }
    shown = 0;
    list.replaceChildren();
    appendPage();
  }

  search.addEventListener("input", render);
  rating.addEventListener("change", render);
  subsystem.addEventListener("change", render);
  get("reset").addEventListener("click", () => {
    search.value = "";
    rating.value = subsystem.value = "all";
    render();
    search.focus();
  });
  more.addEventListener("click", () => appendPage()?.querySelector("summary").focus());
  render();
})();
