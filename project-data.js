// Curated public-facing snapshot from current canonical MKMSZR owners.
window.MKMSZ_PROJECT_DATA = {
  "snapshot": "2026-09-27",
  "sourceCommit": "2543ebb02607c053f558b855a79279178a93ef7d",
  "featureBoard": [
    {
      "group": "Core",
      "name": "Guarded clean-ROM patching",
      "state": "production",
      "kind": "have",
      "detail": "Supported-ROM validation, separate output, guarded writes, and N64 checksum update are production behavior.",
      "source": "Project-Status.md"
    },
    {
      "group": "Core",
      "name": "Native Runtime V2",
      "state": "production",
      "kind": "have",
      "detail": "The production arena floor now reserves 16 KiB for MKMSZR. Runtime V2 owns the first 1 KiB and a bounded build-time expansion pool owns the remaining 15 KiB; the reservation is runtime-confirmed across all eight safe stages.",
      "source": "Project-Status.md"
    },
    {
      "group": "Flow",
      "name": "Safe Stage Select",
      "state": "production",
      "kind": "have",
      "detail": "Compact eight-stage selector and bounded flow bypasses are runtime-confirmed.",
      "source": "Project-Status.md"
    },
    {
      "group": "Items",
      "name": "Ordinary pickup persistence",
      "state": "beta",
      "kind": "have",
      "detail": "Representative collect/restore coverage exists in all eight main stages; all 84 ordinary records are cataloged.",
      "source": "Project-Status.md"
    },
    {
      "group": "Items",
      "name": "Stage-local seeded shuffle",
      "state": "beta",
      "kind": "have",
      "detail": "All 84 ordinary records participate in the current deterministic interim stage-local mode.",
      "source": "Project-Status.md"
    },
    {
      "group": "Inventory",
      "name": "Four inventory boxes",
      "state": "beta",
      "kind": "have",
      "detail": "Box switching, transition preservation, and foreign-key masking are runtime-confirmed on documented routes.",
      "source": "Project-Status.md"
    },
    {
      "group": "Progression",
      "name": "Pickup-driven XP progression",
      "state": "beta",
      "kind": "have",
      "detail": "Native progression is integrated; early tiers and lifecycle routes are runtime-confirmed, full nine-tier coverage is still pending.",
      "source": "Project-Status.md"
    },
    {
      "group": "Progression",
      "name": "SHUFFLE POWER PROGRESSION: OFF / ON",
      "state": "beta",
      "kind": "have",
      "detail": "Default OFF preserves vanilla Power Up order. ON uses an isolated deterministic seed-derived nine-slot order, keeps gameplay gates and native Power Ups icon/help presentation synchronized, and enforces only one dependency: Ice Shatter must follow at least one of Ice Blast, Directional Ice, or Air Ice Blast. Slide and Super Slide may appear in either order. The generalized v04 mechanism is runtime-confirmed; final full nine-tier production-composition validation remains pending.",
      "source": "XP-and-Progression.md"
    },
    {
      "group": "UI",
      "name": "Native GAME SETTINGS menu",
      "state": "beta",
      "kind": "have",
      "detail": "The shared browser/CLI builder now includes the Runtime-confirmed v02 GAME SETTINGS composition: TURN, ATTACK, SPECIALS, JUMP, RUN, EXIT. ATTACK and SPECIALS offer CLASSIC / MODERN; JUMP offers DPAD / BUTTON when both are MODERN; RUN offers HOLD / AUTO. Gameplay claims remain bounded to the user-tested route.",
      "source": "Project-Status.md"
    },
    {
      "group": "Controls",
      "name": "TURN: TOGGLE / LOCK",
      "state": "beta",
      "kind": "have",
      "detail": "Every generated ROM now includes TURN controls. TOGGLE is the vanilla default; LOCK uses the accepted v10 world-direction/facing-lock model, preserves held-Turn backpedal, and temporarily defers to stock forced-facing policy without changing the saved preference. Earth boss type 0x19 remains outside the runtime claim.",
      "source": "Project-Status.md"
    },
    {
      "group": "UI",
      "name": "Native box indicator",
      "state": "production",
      "kind": "have",
      "detail": "BOX n OF 4 renders through the native text path.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Boot branding + seeded phrase",
      "state": "production",
      "kind": "have",
      "detail": "Custom legal-screen presentation and deterministic phrase namespace are runtime-confirmed.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Randomizer title branding",
      "state": "beta",
      "kind": "have",
      "detail": "Candidate-B title art and configurable <NAME> EDITION are runtime-confirmed in production composition.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Outfit recoloring",
      "state": "production",
      "kind": "have",
      "detail": "Static modes and the 64-phase rainbow mode are normal browser/CLI options. Compact-tail v01 is runtime-confirmed across all eight safe stages: stock file 0x87 stays in place, only an 8 KiB palette bank is stored in high ROM, and the prior 0x459E0-byte duplicate fighter copy is gone.",
      "source": "Project-Status.md"
    },
    {
      "group": "Product",
      "name": "Browser / CLI shared patch core",
      "state": "beta",
      "kind": "have",
      "detail": "Browser and CLI share one guarded patch core. Every generated ROM includes the five-setting GAME SETTINGS control suite; the web also exposes the default-off Shuffle Power Progression build option. MKMSZ N64 remains the explicit patch target, MKT Rev. 2 is an optional donor, and PlayStation remains a future ISO target.",
      "source": "Project-Status.md"
    },
    {
      "group": "1.0",
      "name": "Global cross-stage item materialization",
      "state": "needed",
      "kind": "need",
      "detail": "Cross-stage feasibility is runtime-proven, but production-safe destination resources and award semantics are still a release blocker. Fortress boss defeats are reward locations whose assigned logical rewards must be movable independently from the stock crystal identities.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Deterministic global shuffle",
      "state": "needed",
      "kind": "need",
      "detail": "Replace eight independent stage-local pools with one global logical run.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Deterministic retry attempts",
      "state": "needed",
      "kind": "need",
      "detail": "Rejected layouts must advance through an explicit deterministic attempt namespace.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Whole-run solvability solver",
      "state": "needed",
      "kind": "need",
      "detail": "Every emitted 1.0 layout must reach the finalized completion predicate under current access rules.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Seed-specific required Power Upgrades",
      "state": "needed",
      "kind": "need",
      "detail": "Required count must be deterministic, retry-independent, solver-enforced, and HUD-visible.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Full native randomizer HUD",
      "state": "needed",
      "kind": "need",
      "detail": "Checks, progression requirement/current state, box state, key progress, and pickup feedback are required.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "HP / lives / continues lifecycle",
      "state": "needed",
      "kind": "need",
      "detail": "Preserve/reset behavior must be defined and pass supported lifecycle boundaries.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Game Over / new-run reset",
      "state": "needed",
      "kind": "need",
      "detail": "All run-scoped MKMSZR state must reset cleanly without corrupting stock lifecycle.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Very Hard invariant",
      "state": "needed",
      "kind": "need",
      "detail": "Very Hard must remain enforced throughout the supported run lifecycle.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Temple Map policy",
      "state": "open",
      "kind": "unknown",
      "detail": "The Map is outside the 84 ordinary records. Its 1.0 inclusion/exclusion policy and supporting trigger/lifecycle behavior remain open.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Full nine-tier progression validation",
      "state": "needed",
      "kind": "need",
      "detail": "All nine reward thresholds must work in the final production composition.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "1.0",
      "name": "Representative full global seed",
      "state": "needed",
      "kind": "need",
      "detail": "Final release gate after global items, solver, HUD, lifecycle, Map policy, Very Hard, and progression are composed.",
      "source": "1.0-Requirements-and-Roadmap.md"
    },
    {
      "group": "Research",
      "name": "Cross-stage item import proofs",
      "state": "proof",
      "kind": "want",
      "detail": "Prison has runtime-confirmed simultaneous imported visuals; external-to-embedded conversion is also proven. Fortress stress validation remains pending.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "Ordinary enemy randomization",
      "state": "proof",
      "kind": "future",
      "detail": "Fire substitution and Temple-monk-in-Fire import are runtime-confirmed proofs. Arbitrary roster compatibility and product integration remain future work.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "MKT / Sektor takeover",
      "state": "proof",
      "kind": "future",
      "detail": "Proof-only line through v89: v75 is the stable missile-flight baseline, v87 confirms donor-faithful rocket assets/colors, and v89 Runtime-confirms synchronous texture-slot preparation before actor-list insertion removes the stale first frame. The six-pose Run v05 physical repack is Runtime-confirmed; the P28/P29 v06 rope-owner probe is bounded Runtime-confirmed. Storage/lifecycle/cleanup and general integration remain pending.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Donor-backed Toasty audio",
      "state": "production",
      "kind": "have",
      "detail": "The genuine donor voice uses a dedicated MKMSZ audio route while stock pickup audio remains unchanged. The accepted v02 controls/CI4 Toasty composition is runtime-confirmed on the tested route.",
      "source": "Project-Status.md"
    },
    {
      "group": "Presentation",
      "name": "Donor-backed Toasty visual",
      "state": "production",
      "kind": "have",
      "detail": "The 78x85 lower-right presentation now uses nine CI4 (16-color) slices and a 16-entry palette. The successful-reaction trigger and donor extraction remain integrated; accepted full-product v02 was runtime-confirmed on the tested route at 8% probability.",
      "source": "Project-Status.md"
    },
    {
      "group": "Research",
      "name": "Generic donor-move adapter",
      "state": "partial",
      "kind": "future",
      "detail": "The adapter now has concrete projectile creation/placement, cadence-resampling, animation-context and first-visibility evidence from the Sektor missile line. Generic strike/reaction, effects/audio/palette lifetime and production composition remain incomplete.",
      "source": "Project-Status.md"
    },
    {
      "group": "Controls",
      "name": "ATTACK: CLASSIC / MODERN",
      "state": "beta",
      "kind": "have",
      "detail": "CLASSIC preserves stock attacks. MODERN translates Attack into context-appropriate stock punches, kicks, and combo events; Block + Attack cancels Block startup into the native LP path. Integrated in the shared builder and runtime-confirmed on the accepted v02 route.",
      "source": "Player-Actions-and-Special-Moves.md"
    },
    {
      "group": "Controls",
      "name": "SPECIALS: CLASSIC / MODERN",
      "state": "beta",
      "kind": "have",
      "detail": "CLASSIC leaves vanilla special recognition intact. MODERN maps facing-relative Special-button chords to native moves while retaining their stock eligibility, costs, and progression checks; Slide and Super Slide use their native recognizers with real XP. Integrated and runtime-confirmed on the accepted v02 route without proof-only XP forcing.",
      "source": "Player-Actions-and-Special-Moves.md"
    },
    {
      "group": "Controls",
      "name": "JUMP: DPAD / BUTTON",
      "state": "beta",
      "kind": "have",
      "detail": "DPAD keeps stock locomotion jumps. BUTTON uses either LK or HK to jump while standing, moving, running, or hanging from a ledge; it becomes editable only when both ATTACK and SPECIALS are MODERN. Integrated and runtime-confirmed on the accepted v02 route.",
      "source": "Native-HUD-and-UI.md"
    },
    {
      "group": "Controls",
      "name": "RUN: HOLD / AUTO",
      "state": "beta",
      "kind": "have",
      "detail": "RUN: HOLD retains stock behavior; AUTO handles live Run-to-Walk-to-Run transitions while preserving analog auto-run and Run-based chords. Integrated in the shared builder and runtime-confirmed on the accepted v02 route.",
      "source": "Project-Status.md"
    }
  ],
  "compatibility": [
    {
      "area": "Architecture",
      "capability": "Source-level adapter strategy",
      "donor": "MKT semantics and assets",
      "target": "MKMSZ-native helpers/assets",
      "status": "established",
      "detail": "Accepted architecture: translate meaning and representation; do not relocate donor code.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md"
    },
    {
      "area": "Lifecycle",
      "capability": "Process sleep / bounded yield",
      "donor": "process_sleep",
      "target": "Native process sleep",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Lifecycle",
      "capability": "Action lock",
      "donor": "Donor action ownership",
      "target": "Native special-action lock",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Lifecycle",
      "capability": "Action/context transfer",
      "donor": "body-propell action + context_jump",
      "target": "Installer + scheduler selector bridge",
      "status": "partial",
      "detail": "Host lifecycle is proven in bounded paths, but no generic donor action runner exists.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Movement",
      "capability": "Move toward opponent",
      "donor": "towards_x_vel",
      "target": "Native player horizontal velocity",
      "status": "partial",
      "detail": "Primitive exists; donor-to-target unit calibration is still needed generically.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Movement",
      "capability": "Stop movement",
      "donor": "stop_me",
      "target": "Native stop / clear motion",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Movement",
      "capability": "Face opponent",
      "donor": "face_opponent",
      "target": "Find + face opponent helpers",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Animation",
      "capability": "Select animation",
      "donor": "get_char_ani",
      "target": "Native animation selection",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Animation",
      "capability": "Advance animation",
      "donor": "do_next_a9_frame / playback",
      "target": "Native animation advance",
      "status": "covered",
      "detail": "Target primitive established.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Animation",
      "capability": "Generic control-token translation",
      "donor": "Donor script callbacks/tokens",
      "target": "Equivalent MKMSZ callback/token",
      "status": "missing",
      "detail": "No generic translator yet.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Assets",
      "capability": "Frame / texture translation",
      "donor": "Heap-relative descriptors + codecs 22/24/15",
      "target": "Rebuilt descriptors + native Type-5",
      "status": "runtime",
      "detail": "Known donor formats can be decoded offline and rebuilt into runtime-proven MKMSZ-native storage.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Assets",
      "capability": "Palette translation / binding",
      "donor": "MKT palette semantics",
      "target": "MKMSZ source palette + runtime binding",
      "status": "runtime",
      "detail": "Color conversion and Sektor palette binding are runtime-proven in bounded takeover work.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Assets",
      "capability": "Direct donor codec consumption",
      "donor": "Raw MKT codec streams",
      "target": "MKMSZ renderer",
      "status": "rejected",
      "detail": "Rejected direct path: donor streams must be decoded and converted offline.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Combat",
      "capability": "Strike check",
      "donor": "Strike index + record",
      "target": "Native strike dispatch + translated meaning",
      "status": "partial",
      "detail": "Host route exists; generic semantic mapping remains incomplete.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combat",
      "capability": "Victim reactions",
      "donor": "Donor selector/function",
      "target": "Semantically equivalent MKMSZ reaction",
      "status": "missing",
      "detail": "No generic reaction map; player-victim grab/throw remains a known gap.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combat",
      "capability": "Three-tick no-repel",
      "donor": "sans_repell_3",
      "target": "Narrow target separation bypass",
      "status": "missing",
      "detail": "Donor meaning is known; generic MKMSZ shim is not implemented.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combos",
      "capability": "Normal combo graph",
      "donor": "MKT combo records",
      "target": "MKMSZ normal-combo graph",
      "status": "runtime",
      "detail": "Runtime-confirmed at Sektor v62 scope after translating game-local reaction selectors.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Combos",
      "capability": "Reaction-selector translation",
      "donor": "Game-local selector byte",
      "target": "MKMSZ selector chosen by meaning",
      "status": "partial",
      "detail": "Specific Sektor v62 translations work; no universal map yet.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Fighter",
      "capability": "Common Sektor animation takeover",
      "donor": "Sektor / robot animation families",
      "target": "Sub-Zero file 0x87 animation slots",
      "status": "runtime",
      "detail": "Broad common-action coverage, v62 combos, and the six-pose Run v05 physical repack are Runtime-confirmed in bounded proof routes.",
      "source": "Sub-Zero-to-Sektor-Animation-Mapping.md"
    },
    {
      "area": "Projectiles",
      "capability": "Projectile actor creation / ownership",
      "donor": "setup_proj_obj + create_proj_proc",
      "target": "Resource actor + secondary projectile actor/process path",
      "status": "partial",
      "detail": "Target actor/process ownership is statically reconciled and repeatedly exercised by the straight-missile proofs; a generic wrapper is still pending.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Projectiles",
      "capability": "Facing-aware launch placement",
      "donor": "retail (+5,+38)",
      "target": "Native local placement",
      "status": "runtime",
      "detail": "v72 runtime-confirms the retail N64 launch offset near the owner and correct facing mirroring.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Projectiles",
      "capability": "60 Hz donor → 30 Hz host flight cadence",
      "donor": "rocket1_flight_call velocity state",
      "target": "Two donor substeps folded into one target interval",
      "status": "runtime",
      "detail": "v74 runtime-confirms the folded cadence is stable; v75 provides a bounded 2x magnitude calibration that feels correct on the tested route, not a universal scale.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Projectiles",
      "capability": "First-visible projectile publication",
      "donor": "rocket frame becomes visible after setup",
      "target": "Frame bind + active-list insertion ordering",
      "status": "runtime",
      "detail": "v89 Runtime-confirms native synchronous texture-slot preparation before stock actor-list insertion. The first rocket frame uses the correct v87 dynamic asset/palette and retains v75 flight; storage and lifecycle remain proof-only.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Projectiles",
      "capability": "Projectile palette / effects / impact lifecycle",
      "donor": "rocket palette, smoke, sound, explosion, strike semantics",
      "target": "Native palette/audio/effect/strike translations",
      "status": "missing",
      "detail": "Palette translation is now materially stronger through v86/v87, but balanced palette release, smoke/sound/explosion, strike semantics, and production-safe generic integration remain distinct pending tasks.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Fighter",
      "capability": "Rare / special presentation",
      "donor": "Victory, projectile, dizzy, later reactions",
      "target": "Mythologies-specific slot families",
      "status": "partial",
      "detail": "P28/P29 v06 rope-owner probe is Runtime-confirmed on a bounded route; final fallback policy and many other rare families remain open.",
      "source": "Sub-Zero-to-Sektor-Animation-Mapping.md"
    },
    {
      "area": "Integration",
      "capability": "Arbitrary special-move integration",
      "donor": "MKT command/action behavior",
      "target": "MKMSZ input + action ABI",
      "status": "missing",
      "detail": "Not solved by animation replacement; requires the semantic adapter.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md"
    },
    {
      "area": "Integration",
      "capability": "Production-safe fighter/move allocation",
      "donor": "Translated fighter/move payload",
      "target": "Current MKMSZR composition",
      "status": "pending",
      "detail": "Proof allocations establish feasibility only; conflict-free production composition remains pending.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Architecture",
      "capability": "Direct binary/code compatibility",
      "donor": "MKT executable / PROCESS / OBJECT ABI",
      "target": "MKMSZ executable",
      "status": "rejected",
      "detail": "Not implied and explicitly not the accepted strategy.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md"
    }
  ]
};
