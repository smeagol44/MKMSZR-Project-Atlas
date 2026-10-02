## 2026-10-02 — Maturity colors + interactive roadmap

- Changed Feature Board tile color semantics from Core/QoL/4Fun to estimated maturity/completeness so production/near-production/pending work is readable at a glance again.
- Kept Core / QoL / 4Fun as a secondary visual tag and added a dedicated Type filter.
- Reworked the project progress card into two explicit sections: **1.0 release completion** and **Tracked extras / post-1.0**, each with its own percentage and effort summary.
- Replaced decorative progress fills with effort-proportional per-feature segments. Each segment shows the completed portion of that feature and leaves unfinished work dark.
- Roadmap segments are clickable: selecting one opens the same feature modal and highlights/scrolls to the corresponding tile, matching the interaction model used elsewhere in Atlas.
- Tile headers now include the Atlas completion estimate alongside maturity, making the visual color scale auditable rather than implicit.

## 2026-10-02 — Feature Board visual model + roadmap

- Removed subsystem grouping from the Feature Board so all feature tiles flow in one dense grid.
- Rewrote visible card names into consistent human-facing titles while preserving the former technical/project names inside the detail dialog.
- Classified every tracked feature as **Core**, **QoL**, or **4Fun** and made that classification the tile color family: restrained blue, teal, and violet/plum respectively.
- Expanded the detail dialog with technical name, maturity/intent, release-vs-extra scope, Atlas effort estimate, per-feature completion estimate, canonical source, and evidence/version milestone where the repository supports one.
- Added an effort-weighted project roadmap bar. The 0..100 segment models 1.0 release completion only; optional/experimental tracked work is rendered beyond the 100% release marker and does not inflate the 1.0 percentage.
- Current Atlas planning estimate is approximately 64% toward 1.0. This is explicitly a planning visualization, not an objective engineering metric.

## 2026-10-01 — Compact Feature Board index

- Reworked the Feature tab into a dense catalog view after the first grouped-card redesign proved too text-heavy.
- The overview now shows compact subsystem-grouped tiles with only feature name and maturity, allowing many more features to be visible per viewport.
- Full descriptions, intent, source owner, and canonical Wiki link now live in a focused click-open detail dialog instead of every tile.
- Removed per-card inline paragraphs and the global expand/collapse control while preserving state/intent/search filtering and summary counts.

## 2026-10-01 — Feature Board truth + readability refresh

- Re-audited the Feature Board against current Project Status, 1.0 Roadmap, Runtime Validation, lifecycle, and progression owners.
- Promoted lifecycle v06 cards from stale “Needed” entries to production-beta/current behavior: HP/lives/continues, Persistent HP, final Game Over/new-run reset, and build-time difficulty.
- Replaced the stale open Temple Map-policy card with the resolved Runtime-confirmed Temple scripted special-check policy.
- Updated Safe Stage Select, stage-local shuffle caveats, four-box lifecycle wording, browser/CLI run settings, materializer status, enemy-randomization product status, and the still-unmerged power-shuffle / Temple-audio candidates.
- Redesigned the Feature tab for scanability: grouped subsystem sections, compact cards, muted status accents, clamped summaries, per-card More/Less controls, explicit source links, and global Expand/Collapse details.
- Preserved the underlying Feature Board state/intent filters and canonical-source routing.

## 2026-10-01 — Compact Toasty production refresh

- Advanced the affected Atlas snapshot data to MKMSZR commit `5d32e6388e8ab6891599087f9c756c20d4dace15`.
- Updated Toasty production ownership from `0x801B1000..0x801B2DEF` (`0x1DF0` bytes) to the Runtime-confirmed compact RLE layout `0x801B1000..0x801B2131` (`0x1132` bytes).
- RDRAM Space now shows the reclaimed `0xCBE` = 3,262 bytes as still reserved MKMSZR pool capacity, not confirmed-free memory.
- Refreshed the affected high-pool composition to include the current Temple special-check helper and lifecycle-v06 helper immediately below Toasty.
- Updated the Feature Board Toasty card and RDRAM capacity summary while preserving existing bar/row synchronized selection behavior.
- Updated Atlas validation expectations to the Runtime-confirmed compact Toasty end at `0x1B2132` and required current Temple/lifecycle owners.

## 2026-09-30 — Temple audio and current-Wiki reconciliation

- Advanced the Atlas snapshot to MKMSZR commit `d953e7638eea3435065bd0112083803e3c79fa83`.
- Added the Runtime-confirmed seeded MKT-backed Temple intro audio feature, including its deterministic one-slot contract, conditional high-ROM sample reservation, and production carrier patch sites.
- Added current **Powers as pickups** and **Vanilla / Custom / Seed Required Power Upgrades** product cards and the guarded Fortress XP-gate site.
- Refreshed title presentation to the accepted vector/typeset, 16-color in-place file-`0x5E` implementation with outfit-linked title palette behavior; retired the former `0xF90000..0xFC1000` high-ROM title owner.
- Corrected the Earth Stage Atlas from superseded file `0x88` to the canonical file-`0x30` ordinary-pickup resource catalog.
- Refreshed cross-stage item evidence for Fire → Wind foreign-key masking and Wind's rejected naive selector suppression / guarded destination-owned checkpoint model through v05.
- Refreshed ordinary-enemy research to the current six homogeneous cross-stage compositions plus one mixed Water roster.
- Updated conservative Decomp Readiness wording for donor SFX translation, foreign-key ownership, and the cross-stage resource planner without inflating readiness totals.

## 2026-09-27 — Compact Rainbow storage refresh

- Advanced the Atlas snapshot to MKMSZR commit `2543ebb02607c053f558b855a79279178a93ef7d`.
- Replaced the old Rainbow high-ROM model that duplicated all of Sub-Zero file `0x87` with the Runtime-confirmed compact-tail architecture.
- ROM Space now shows only the `0x2000` raw palette bank at `0xF20000..0xF21FFF` plus the 88-byte file-`0x1A` loader wrapper at `0xF69060..0xF690B7`; stock file `0x87` remains at retail ROM.
- RDRAM Space now shows the conditional wrapper at `0x801B0880..0x801B08D7` in the existing controls→Toasty gap and the full `0xD0` optional Runtime V2 tail used by the compact Rainbow helper.
- Added all 15 guarded Sub-Zero allocation/load pairs plus the raw file-`0x92` table entry to the patch-site overlay.
- Updated the Feature Board and Decomp Readiness wording to reflect the all-eight-stage Runtime-confirmed compact storage contract.
- The old Rainbow allocation consumed `0x479E0` bytes of high ROM; the new dedicated bank consumes `0x2000`, reclaiming `0x459E0` = 285,152 bytes of generated ROM capacity while preserving the same effective runtime fighter footprint.

# Changelog

## 2026-09-27 — Shuffled Power Progression integration

- Advanced the Atlas snapshot to MKMSZR commit `c9ffabaa77f6a58ef96119061db218ab27540f9f`.
- Added a dedicated Feature Board card for the default-off **SHUFFLE POWER PROGRESSION: OFF / ON** product option.
- Recorded the deterministic nine-slot shuffle contract: gameplay gates and native Power Ups icon/help presentation stay synchronized, Ice Shatter must follow at least one freezing power, and Slide/Super Slide have no ordering dependency.
- Recorded the bounded v04 runtime result and kept the final full nine-tier production-composition validation explicitly pending.
- Added the complete production power-tier gate and Power Ups UI table patch-site overlay set.
- Refreshed Prison key-checkpoint evidence and Fortress boss-reward location semantics that changed in the same MKMSZR source window.
- Versioned all four Atlas snapshot assets to the new source revision.

## 2026-09-26 — Current Wiki refresh and memory focus

- Advanced the snapshot to MKMSZR commit `face0a1f806c0e3635c9482f2027115a2366670c`.
- Distinguished the current four-setting production frontend from the Runtime-confirmed six-entry v09 proof menu and complete v10 control gameplay proof. The latter still needs a guarded Toasty-compatible allocation before browser/CLI integration.
- Updated the bounded Sektor v89 first-frame texture result, Run v05 physical repack, and P28/P29 rope-owner probe.
- Added the new bounded proof ROM intervals and production GAME SETTINGS/proof ATTACK patch-site records from the Wiki; retained proof-only intervals outside the current high-ROM usage bar.
- Gave ROM and RDRAM focus bars a shared purpose-color layout with exact-size rows. RDRAM distinguishes always allocated, optional donor-backed, and striped reserved portions; dark ROM gaps remain unclassified.

## 2026-09-25 — Production GAME SETTINGS / TURN refresh

- Advanced the Atlas snapshot to MKMSZR commit `9e0b39af06fb850ba130dd88ed081711f86b18f7`.
- Promoted direction-facing from a proof-only future item to **Production beta** as native `GAME SETTINGS -> TURN: TOGGLE / LOCK`.
- Added a dedicated Feature Board card for the native GAME SETTINGS menu and a production card for TURN controls.
- Recorded the runtime-confirmed production scope: TOGGLE vanilla default, LOCK world-direction/facing-lock behavior, held-Turn backpedal, bounded forced-facing fallback, inventory-box coexistence, and stage-transition validation; Earth boss type `0x19` remains outside the runtime claim.
- Updated ROM/RDRAM ownership for the mandatory `0x404`-byte TURN module, shared file-`0x1A` transport, shifted optional donor module/audio ranges, transient editor state at `0xA01AF81C`, and the durable TURN preference owner.
- Updated patch-site overlays for the TURN action gate, direction decision, release path, GAME SETTINGS wrapper, and shared file-`0x1A` entry.
- Updated the RDRAM capacity dashboard so its “currently allocated” figure includes both mandatory TURN and optional donor-backed allocations.
- Refreshed conservative Decomp Readiness for the now-understood native settings reuse and production facing-lock/action boundary.
- Re-checked concurrent Sektor work: Atlas now reflects v89 as Implementation/static-confirmed and Runtime Pending, plus the accepted six-pose Run policy.

## 2026-09-25 — Current MKMSZR refresh and memory-capacity redesign

- Refreshed the Atlas source snapshot from MKMSZR commit `f506d6ecffe88750b18dc979a0d06c14f680ac78`.
- Updated the Feature Board for the 16 KiB production reservation, production donor-backed presentation/audio integration, optional MKT donor browser/CLI flow, direction-facing proof, and Sektor straight-missile research through the statically rejected v85 ordinary-branch result.
- Expanded the MKT → MKMSZ matrix with projectile actor ownership, launch placement, 60→30 Hz cadence translation, first-visible publication ordering, and remaining palette/effects/impact gaps.
- Added current production ROM/RDRAM ownership for the conditional donor-backed module and audio sample, plus the full 15 KiB expansion-pool parent reservation.
- Refreshed production patch-site coverage for the donor-backed trigger/init/HUD/file-entry sites and indexed the v85 proof seam.
- Replaced the coarse ROM/RDRAM grid-first views with coverage/capacity dashboards:
  - classified ownership vs unknown/unclassified bytes;
  - MKMSZR production ownership/reservation;
  - confirmed reusable free space;
  - proof-only footprint totals kept separate;
  - proportional whole-space bars;
  - zoomed high-ROM and 16 KiB MKMSZR-reservation views;
  - exact interval/patch-site browsers retained for provenance.
- Explicitly separates **decompilation knowledge** from **byte ownership/capacity** so map coverage is not misread as code-understanding percentage.
- Refreshed conservative Decomp Readiness cells for production textured HUD composition, donor voice translation, current projectile cadence evidence, Runtime V2 state, and the 16 KiB arena reservation.

## 2026-09-23 — Rename to MKMSZR Project Atlas

- Renamed the web experience from **MKMSZ Research Maps** to **MKMSZR Project Atlas**.
- Updated the page title, hero branding, description, footer, and README identity.
- Prepared the documented Pages URL for the repository rename to `MKMSZR-Project-Atlas`.

## 2026-09-23 — Project atlas expansion

- Added the public-facing **Feature Board** for production, beta, proof, 1.0-needed, open, and post-1.0 research states.
- Added the eight-stage **Stage Atlas** sourced from normalized stage catalogs.
- Added the **MKT → MKMSZ Compatibility Matrix** covering host primitives, assets, animation, combat semantics, combos, and integration gaps.
- Added production/proof **Patch-site overlays** to the ROM map and to RDRAM where an established RAM/VA context exists.
- Refreshed the literal memory snapshot to current MKMSZR production, including the promoted rainbow outfit allocation/layout.
- Preserved the existing interval-to-grid selection behavior.
- Expanded CI validation to all derivative research-map datasets.

## 2026-09-23 — Current research refresh and interval selection

- Refreshed the memory snapshot from MKMSZR commit `3e1d0cae4a3a52989e8ef9b9c1290e1e01c81dfd`.
- Added the Runtime-confirmed rainbow-outfit proof footprints: one proof-only ROM interval and two overlapping proof-only RDRAM composition intervals.
- Reviewed the decomp-readiness map against the current Wiki; the 114 green / 156 yellow / 330 black totals remain conservative and unchanged.
- Added the rainbow runtime palette-rebinding result as a concrete green fighter-graphics unit.
- Updated the Toasty textured-UI unit for v15/v16 runtime findings and v17's pending corrected RGBA5551 palette validation.
- Exact ROM/RDRAM interval-list clicks now select every intersecting coarse grid bucket, highlight the interval row, and scroll the selected blocks into view.

## 2026-09-23 — ROM/RDRAM space maps

- Generalized the site into three tabs: Decomp Readiness, ROM Space, and RDRAM Space.
- Added a 16 × 16 ROM grid covering the full 16 MiB image at 64 KiB per cell.
- Added a 16 × 16 physical RDRAM grid covering 4 MiB at 16 KiB per cell.
- Added exact interval overlays, classification/search filters, click-through details, provenance, and canonical Wiki links.
- Preserved KSEG0/KSEG1 as aliases rather than duplicate allocations.
- Treats unmapped space as unknown/unclassified, never implicitly free.
- Updated stale readiness-source links to the refactored canonical Wiki owners.

## 2026-09-22 — Initial public snapshot

- Added 40 × 15 (600-unit) interactive decompilation-readiness heatmap.
- Initial rating distribution: 114 green, 156 yellow, 330 black.
- Added concrete named units for known functions, structures, codecs and research boundaries.
- Added status filter, search, per-cell details, source links and responsive layout.
- Added GitHub Pages deployment workflow.
