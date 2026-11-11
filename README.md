# MKMSZR Project Atlas

[Open the Atlas](https://smeagol44.github.io/MKMSZR-Project-Atlas/)

An interactive reference for the Mortal Kombat Mythologies: Sub-Zero Randomizer (N64 USA Rev. 0 / NMYE). The [Randomizer Wiki](https://github.com/smeagol44/MKMSZ-Randomizer/tree/main/wiki) owns product and research status. The [Ghidra manifests](https://github.com/smeagol44/MKMSZ-Ghidra/tree/main/analysis) own the versioned metadata.

## November 11, 2026 snapshot

Reviewed [Randomizer PRs #174–203](https://github.com/smeagol44/MKMSZ-Randomizer/pulls?q=is%3Apr) and [Ghidra PRs #7–13](https://github.com/smeagol44/MKMSZ-Ghidra/pulls?q=is%3Apr). Randomizer #203 was open at the snapshot. Ghidra #7 closed unmerged. Atlas shows both in context.

- Randomizer source revision [`7e86e4009cfa`](https://github.com/smeagol44/MKMSZ-Randomizer/commit/7e86e4009cfac206a3c736e29bf4c7b5de6b4a6f)
- Ghidra source revision [`8d73880`](https://github.com/smeagol44/MKMSZ-Ghidra/commit/8d73880)

The update is targeted. Existing stage, memory and readiness records outside the affected areas retain their prior evidence base. Each updated data file pins its upstream source revision.

## Views

| View | What you can look up |
| --- | --- |
| Features | Recent product changes, production and proof status, and the estimated roadmap. Completion colors and effort points are editorial estimates. |
| Stages | The eight main stages, 84 ordinary pickups, overlay identities, progression, and bounded checkpoint or materialization evidence. |
| MKT Fighter Import | Sektor and Reptile status, 28 translation capabilities, and historical proof milestones. Search or filter the compact list and use **Compare** for side-by-side donor and host details. |
| Ghidra Research | 624 selected navigation records from the pinned manifests, including 182 global function entries, 65 global symbols, and eight separately identified overlay images. Filter by type or scope and expand a result for the evidence and manifest link. |
| Decomp Readiness | A 40 × 15 heatmap of 600 qualitative units, with 126 decomp-ready, 144 partial, and 330 largely unknown. Choose a subsystem or search its named findings and source links. |
| ROM | Bounded stock and generated ownership, exact guarded patch sites, and the conditional Sektor carrier in 32 MiB output. The supported clean input is 16 MiB. |
| RDRAM | Physical memory ownership and the 16 KiB MKMSZR reservation, including the separate TURN, ATTACK, SPECIALS, JUMP and RUN display slices and the conditional Sektor loader. |

Ghidra’s October 9 local audit covered 623 exact checks with zero mismatches. The newer manifest entries await a fresh maintainer import and audit. The October 927/927 Wiki routing count measures a separate set of enumerated findings. The readiness heatmap has its own qualitative denominator.

ROM offsets, physical RDRAM and runtime VAs retain their own coordinates. KSEG0 and KSEG1 aliases refer to the same physical bytes. Conditional and historical proof ranges retain their scope. Unclassified bytes and empty selectors do not establish reusable capacity.

## Updating Atlas

1. Read Project Status, then the relevant Wiki owner and merged implementation or Ghidra manifests.
2. Update the affected data records and source revisions. Preserve evidence limits and stage scope.
3. Run `node validate-memory-data.mjs` from the repository root. It validates the maps and exercises MKT, Ghidra, and Decomp Readiness interactions.

The site is static. The Pages workflow publishes pushes to `main` with no build step or runtime dependencies.
