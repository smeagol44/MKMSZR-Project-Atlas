// Shared DOM building blocks for source-linked index views.
(function () {
  "use strict";

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(label, url) {
    const node = element("a", "", label + " ↗");
    node.href = url;
    node.target = "_blank";
    node.rel = "noopener noreferrer";
    return node;
  }

  const project = "https://github.com/smeagol44/MKMSZ-Randomizer";
  const wiki = project + "/blob/main/wiki/";
  const wikiLink = (label, path) => link(label, wiki + path);
  const prLink = number => link("#" + number, project + "/pull/" + number);

  function options(select, choices) {
    for (const [value, label] of choices) {
      const option = element("option", "", label);
      option.value = value;
      select.append(option);
    }
  }

  function disclosure(summary, body) {
    const details = element("details", "index-entry");
    const header = element("summary", "index-summary");
    header.append(...summary);
    details.append(header, body);
    return details;
  }

  function textWithCode(text) {
    const paragraph = element("p", "record-copy");
    text.split(/(`[^`]+`)/).forEach((part, index) => {
      paragraph.append(index % 2 ? element("code", "", part.slice(1, -1)) : part);
    });
    return paragraph;
  }

  function projectUpdate(title, status, detail, source, prs) {
    const row = element("article", "update-row");
    const heading = element("div", "update-heading");
    heading.append(element("h4", "", title));
    if (status) heading.append(element("span", "evidence-label", status));
    const sources = element("div", "source-links");
    sources.append(wikiLink("Wiki", source), ...prs.map(prLink));
    row.append(heading, element("p", "", detail), sources);
    return row;
  }

  const updates = document.getElementById("project-updates");
  for (const [title, detail, source, prs] of window.MKMSZ_PROJECT_DATA.recentUpdates) {
    updates.append(projectUpdate(title, "", detail, source, prs));
  }

  window.AtlasUI = { element, link, wikiLink, options, disclosure, textWithCode, projectUpdate };
})();
