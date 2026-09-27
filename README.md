# MKMSZR Project Atlas

Interactive project-status, stage, compatibility, decompilation, ROM, and RDRAM atlas for **Mortal Kombat Mythologies: Sub-Zero (N64, USA Rev. 0 / NMYE)**, derived from the ongoing [MKMSZR](https://github.com/smeagol44/MKMSZ-Randomizer) project.

Public site:

**https://smeagol44.github.io/MKMSZR-Project-Atlas/**

## Views

### Decomp Readiness

The original 40 × 15 (600-unit) qualitative heatmap remains intact.

- **Green** — sufficiently understood to reproduce with confidence in a C reimplementation.
- **Yellow** — meaningful structure/behavior is known, but important semantics or coverage are still missing.
- **Black** — substantially unmapped from a decompilation-readiness perspective.

The 600 squares are equal-sized **knowledge units**, not equal code-size buckets, literal functions, or equal numbers of ROM bytes.

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

A colored source-level compatibility matrix for the donor-port effort.

It distinguishes:

- established/covered target primitives;
- runtime-proven translations;
- partial adapters;
- missing semantic translators;
- pending production composition;
- rejected direct paths such as binary/code or donor-codec reuse.

This is not a binary-compatibility claim.

### ROM Coverage & Capacity

A capacity-first view of the literal 16 MiB cartridge image:

- classified bounded ownership vs unknown/unclassified bytes;
- current MKMSZR production-owned bytes;
- confirmed reusable free bytes;
- proof-only footprints kept separate from current ownership;
- a proportional whole-image strip plus a zoomed high-ROM generated-output strip;
- distinct colors and exact sizes for each current high-ROM purpose; proof artifacts appear only in the exact records, since they can overlap the current build;
- exact interval and patch-site browser with canonical provenance.

The view deliberately does **not** infer free space from `00`/`FF` patterns or from gaps in current research. Decompilation knowledge is shown separately in **Decomp Readiness**; byte ownership and code understanding are not the same metric.

### RDRAM Coverage & Capacity

A physical-memory ownership/capacity view for the 4 MiB N64 target:

- classified physical ownership vs unknown/unclassified bytes;
- current MKMSZR production reservation/ownership;
- confirmed reusable free bytes;
- physical aliases counted once even when KSEG0/KSEG1 views exist;
- a focused breakdown of the exact 16 KiB MKMSZR reservation;
- separate colors for always allocated code, conditional donor content, and striped reserved gaps, with exact byte counts below the proportional bar;
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

The snapshot data files embed the source MKMSZR commit so a displayed state can be traced back to the source revision. The current refresh follows MKMSZR through the 16 KiB production reservation, the integrated TURN / ATTACK / SPECIALS / JUMP / RUN GAME SETTINGS suite, the shared TURN / modern-controls / optional-CI4-Toasty file-0x1A composition, optional MKT donor web flow, production donor-backed presentation/audio, and the runtime-confirmed bounded Sektor v89 first-frame fix. The accepted v02 composition is runtime-confirmed on the user-tested route; broader routes remain unverified.

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
