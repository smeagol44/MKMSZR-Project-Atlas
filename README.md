# MKMSZR Project Atlas

Interactive project-status, stage, compatibility, decompilation, ROM, and RDRAM atlas for **Mortal Kombat Mythologies: Sub-Zero (N64, USA Rev. 0 / NMYE)**, derived from the ongoing [MKMSZR](https://github.com/smeagol44/MKMSZ-Randomizer) project.

Public site:

**https://smeagol44.github.io/MKMSZR-Project-Atlas/**

## Snapshot update — 2026-10-10

This is a **targeted refresh** over the prior October 5/6 Atlas base, pinned to MKMSZ-Randomizer source commit `a8601aac6de0ad2f1db1a86c868242902cbab850` and MKMSZ-Ghidra metadata `1c73998221cc20b5c67b35c4fae8efd566725af5`. Unchanged older allocations, stages, compatibility rows and decomp-readiness tiles are **not** represented as exhaustively re-audited just because the snapshot date advanced.

The new **Research & Ghidra** view contains 526 searchable metadata navigation records (139 named functions, 35 global labels, 2 code labels, 105 bookmarks, 12 managed types, 1 typed data instance, 232 comments) with exact manifest links. The user's clean-ROM Ghidra importer and audits achieved **623/623 exact checks**, with zero mismatches; this is a measure of imported curated records, not of entire retail game code. The distinct 927/927 enumerated-knowledge routing result is also not a decompilation percentage.

Updated feature and stage evidence includes native in-Inventory four-box Left/Right navigation, Inventory legend and HUD, Fire/Bridge credential ownership, earned-XP persistence with Powers-as-pickups OFF, and the latest audio/FIFO trace findings. The ROM/RDRAM maps now include the canonical file-0x1A generated transport, switch and legend allocation, plus their guarded ROM hook sites. Full rich Inventory audio closure remains Pending; no FIFO-enqueue retry or production correction is claimed.

## Views

### Decomp Readiness

The original 40 × 15 (600-unit) qualitative heatmap remains intact.

- **Green** — sufficiently understood to reproduce with confidence in a C reimplementation.
- **Yellow** — meaningful structure/behavior is known, but important semantics or coverage are still missing.
- **Black** — substantially unmapped from a decompilation-readiness perspective.

The 600 squares are equal-sized **knowledge units**, not equal code-size buckets, literal functions, or equal numbers of ROM bytes.
The integrated ATTACK, SPECIALS, JUMP, and RUN input paths are named within the existing partial player-action units; product integration does not by itself establish a fully decompiled player state machine.

### Research & Ghidra

An independent, filterable research view for the latest curated Ghidra global metadata and recent evidence. Shows maintainer-verified 623/623 import checks, routes to reviewed ROM-free manifests and current Wiki owners, and distinguishes trace-confirmed observations from unresolved production causes. It does **not** change the 600-unit qualitative Decomp Readiness heatmap.

### Feature Board

A public-facing feature/roadmap view showing what MKMSZR already ships, what is production beta, what exists only as a bounded proof, what 1.0 still requires, and what remains deliberately open or post-1.0 research.

This view is intentionally easier to browse than the canonical Roadmap. The Wiki remains authoritative for exact requirements and acceptance gates.

### Stage Atlas

An eight-card atlas for Temple, Wind, Water, Earth, Prison, Fire, Bridge, and Fortress, sourced from the normalized stage catalogs.

Each stage exposes:

- compact/native stage IDs;
- resource-file ROM range, size, file-table entry, and verified runtime base;
- ordinary pickup count and pickup mix;
- outer-slot shape, empty selectors, and unknown/nonstandard selectors;
- bounded evidence and important stage-local caveats.

Empty logical selectors are never presented as free storage.

### MKT → MKMSZ Compatibility

The October 10 redesign replaces the wide, hard-to-scan legacy matrix with a **responsive semantic-adapter cockpit**, followed by a typography/density pass informed by maintainer screenshots:

- A donor → translation → host diagram that explicitly rejects binary relocation.
- Status distribution and counts (not a completion percentage), plus interactive area/status chips and search.
- Dense 2/3-column, category-count-aware capability cards with larger type, visible research notes, canonical owner links, and no stranded last-row card. An optional full comparison table remains available.
- Four independently provenance-linked, **bounded proof** milestones: v62 combo graph, v75 straight-missile flight, v87 rocket art/palette, v89 first-frame publication.
- All **28** existing compatibility statuses and capability definitions are preserved. "Covered" is a host-side primitive, "Runtime-proven" remains bounded, and Sektor is not a production fighter.

This is a source-level compatibility matrix for the donor-port effort.

It distinguishes:

- established/covered target primitives;
- runtime-proven translations;
- partial adapters;
- missing semantic translators;
- pending production composition;
- rejected direct paths such as binary/code or donor-codec reuse.

This is not a binary-compatibility claim.

### ROM Coverage & Capacity

A capacity-first view that distinguishes the supported 16 MiB clean cartridge image from the current 32 MiB generated global-v2 output:

- classified bounded ownership vs unknown/unclassified bytes;
- current MKMSZR production-owned bytes;
- confirmed reusable free bytes;
- proof-only footprints kept separate from current ownership;
- a proportional whole-image strip plus a zoomed high-ROM generated-output strip;
- distinct colors and exact sizes for each current high-ROM purpose, including the native Inventory HUD tail at `0xF6B0D0..0xF6B5CF`; proof artifacts appear only in the exact records, since they can overlap the current build;
- appended-output ownership now shows the Inventory HUD portrait atlas, relocated common-package capacity, and fixed HUD data block at `0x01800000..0x018151FF` before the remaining unassigned tail;
- exact interval and patch-site browser with canonical provenance.

The view deliberately does **not** infer free space from `00`/`FF` patterns or from gaps in current research. Decompilation knowledge is shown separately in **Decomp Readiness**; byte ownership and code understanding are not the same metric.

### RDRAM Coverage & Capacity

A physical-memory ownership/capacity view for the 4 MiB N64 target:

- classified physical ownership vs unknown/unclassified bytes;
- current MKMSZR production reservation/ownership;
- confirmed reusable free bytes;
- physical aliases counted once even when KSEG0/KSEG1 views exist;
- a focused breakdown of the exact 16 KiB MKMSZR reservation;
- separate ATTACK, SPECIALS, JUMP, and RUN display slices within the single modern-controls allocation, alongside the existing separate TURN module;
- separate colors for always allocated code, conditional donor content, and striped reserved gaps, with exact byte counts below the proportional bar;
- explicit native Inventory HUD runtime ownership at `0x801B28F0..0x801B2DEF`, following the global materializer and before the remaining reserved pool tail;
- current Runtime V2 fixed use, 15 KiB expansion-pool capacity, conditional donor-backed allocation, and reserved remainder shown separately;
- exact physical interval and patch-site browser.

Reserved-but-unused MKMSZR bytes are shown as reserved capacity, **not** as generic confirmed-free memory.

## Canonical authority

The visualization is a derivative snapshot. Current truth remains in the version-controlled MKMSZR Wiki.

Primary inputs include:

- `Project-Status.md`
- `1.0-Requirements-and-Roadmap.md`
- `Memory-and-Allocation-Map.md`
- `Address-and-Patch-Site-Registry.md`
- `Stage-Catalogs.md` + the eight `Stage-Catalog-*` pages
- `MKT-to-MKMSZ-Compatibility-Layer.md`
- `MKT-Adapter-Primitives.md`
- `MKT-Fighter-Asset-Translation.md`
- `Sub-Zero-to-Sektor-Animation-Mapping.md`
- `Global-Item-Materialization-and-Solvability.md`
- `XP-and-Progression.md`
- `Sounds-and-Music.md`
- `Presentation-and-Branding.md`

The snapshot data files embed the source MKMSZR commit so a displayed state can be traced back to the source revision. The current refresh follows MKMSZR through commit `52139f021212c94bb483cc6ec1a6cecda5c94fa1` (2026-10-05). In addition to the merged global-v2 generator/solver, 32 MiB output model, destination-aware materializer, configurable lifecycle, standard N64 byte-order normalization, current enemy randomization, Safe Stage presentation, and isolated Temple audio, Atlas now includes the accepted native Inventory HUD and v23 nonblocking Power feedback. The HUD adds colored `STG#` credentials, real selected-item titles/portraits, `STG CHECKS KEYS`, required-Power status, and `XX/85`, plus explicit ROM/RDRAM/generated-output ownership for its runtime tail, portrait atlas, common-package capacity, and data block. The browser snapshot also reflects the worker-based responsive patcher, selection-time ROM validation, current seeded/randomization defaults, drag/drop inputs, live summaries, and completion UI from PRs #142/#144/#145. Final representative full-seed production validation remains the release gate.

Important rules:

- ROM offset is not silently treated as a runtime VA.
- KSEG0/KSEG1 aliases are not independent allocations.
- Stage-overlay ownership remains stage/source qualified.
- Zero/FF/padding or unused-looking selectors are not evidence of free space.
- Proof-only ranges do not become production-safe merely because a disposable ROM worked.
- Unknown gaps remain unknown.
- A compatibility proof does not imply arbitrary donor compatibility.

## Updating the maps

1. Read current `wiki/Project-Status.md` first.
2. Read the canonical owner for the view being changed.
3. Refresh derivative data only from current bounded Wiki facts.
4. Keep evidence scope and proof-vs-production boundaries intact.
5. Update the embedded source commit/snapshot date.
6. Run the research-map validator before deployment.

## Deployment

`.github/workflows/pages.yml` deploys this static site to GitHub Pages on every push to `main`.

No build step or external JavaScript dependency is required.
