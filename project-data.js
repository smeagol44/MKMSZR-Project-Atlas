// Targeted November refresh. Unchanged records retain the previous Atlas evidence base.
window.MKMSZ_PROJECT_DATA = {
  "snapshot": "2026-11-11",
  "sourceCommit": "7e86e4009cfac206a3c736e29bf4c7b5de6b4a6f",
  "featureBoard": [
    {
      "group": "Core",
      "name": "Safe ROM Patching",
      "state": "production",
      "kind": "have",
      "detail": "Supported-ROM validation, separate output, guarded writes, and N64 checksum update are production behavior. The target accepts standard .z64, .v64, and .n64 byte orders, normalizes them to canonical big-endian .z64, and still validates the exact supported USA Rev. 0 content before patching.",
      "source": "Project-Status.md",
      "technicalName": "Guarded clean-ROM patching",
      "track": "Core",
      "scope": "1.0",
      "effort": 3,
      "completion": 1
    },
    {
      "group": "Core",
      "name": "Native Runtime",
      "state": "production",
      "kind": "have",
      "detail": "The production arena floor now reserves 16 KiB for MKMSZR. Runtime V2 owns the first 1 KiB and a bounded build-time expansion pool owns the remaining 15 KiB; the reservation is runtime-confirmed across all eight safe stages.",
      "source": "Project-Status.md",
      "technicalName": "Native Runtime V2",
      "track": "Core",
      "scope": "1.0",
      "effort": 6,
      "completion": 1,
      "introduced": "Runtime V2"
    },
    {
      "group": "Flow",
      "name": "Stage Select",
      "state": "production",
      "kind": "have",
      "detail": "Compact eight-stage selector and title-blue cursor are Runtime-confirmed; accepted v03a MOVE-sound presentation passed its initial bounded test. Later Fortress audio Traces 7–11 isolate a timing-sensitive helper-associated effect: disabling the whole helper removes sustained failures in one control, but muting its sound or preserving s0 does not. Audio root cause Pending; do not call v03a exhaustively safe.",
      "source": "Project-Status.md",
      "technicalName": "Safe Stage Select",
      "track": "Core",
      "scope": "1.0",
      "effort": 3,
      "completion": 1,
      "introduced": "v03a"
    },
    {
      "group": "Items",
      "name": "Persistent Pickups",
      "state": "beta",
      "kind": "have",
      "detail": "Representative collect/restore coverage exists in all eight main stages; all 84 ordinary records are cataloged.",
      "source": "Project-Status.md",
      "technicalName": "Ordinary pickup persistence",
      "track": "Core",
      "scope": "1.0",
      "effort": 6,
      "completion": 1
    },
    {
      "group": "Items",
      "name": "Seeded Item Shuffle",
      "state": "beta",
      "kind": "have",
      "detail": "The shared browser/CLI path builds a deterministic 85-check global layout: 84 ordinary pickups plus the Temple scripted special check. Destination-safe materialization preserves location-owned checkpoint/activation semantics while reward identity moves globally. The shared 85-check generator/materializer is integrated and implementation-complete; representative cross-stage/full-seed acceptance remains bounded, and the 1.0 release is still blocked by Inventory/audio.",
      "source": "Project-Status.md",
      "technicalName": "85-check global seeded item shuffle",
      "track": "Core",
      "scope": "1.0",
      "effort": 5,
      "completion": 1
    },
    {
      "group": "Inventory",
      "name": "Four Inventory Boxes",
      "state": "beta",
      "kind": "have",
      "detail": "Left/Right switches across all four boxes in Items, including wraparound and empty boxes. The key-to-stage map now lives in shared file 0x1A, clear of the stock password handler’s writes. The optional Start with all stage keys debug setting seeds 21 credentials across the four boxes on a fresh run.",
      "source": "Project-Status.md",
      "technicalName": "Four inventory boxes",
      "track": "Core",
      "scope": "1.0",
      "effort": 5,
      "completion": 1
    },
    {
      "group": "Progression",
      "name": "Powers as Pickups",
      "state": "beta",
      "kind": "have",
      "detail": "ON uses Power Upgrade items and native new-power feedback. OFF retains earned combat XP and persists it through MKSV +0x44. Both use the common 20,000-XP maximum. OFF has no stage-specific XP caps. Required powers still configures the independent Fortress gate.",
      "source": "XP-and-Progression.md",
      "technicalName": "POWERS AS PICKUPS: ON / OFF",
      "track": "Core",
      "scope": "1.0",
      "effort": 5,
      "completion": 1,
      "introduced": "v23 nonblocking Power feedback"
    },
    {
      "group": "Progression",
      "name": "Required Power Upgrades",
      "state": "beta",
      "kind": "have",
      "detail": "Build-time Fortress-gate setting. VANILLA preserves the stock 5100-XP requirement; CUSTOM accepts 0..9; SEED deterministically selects 0..9 from its own namespace and is the browser default. The solver enforces the selected shuffled-upgrade requirement when pickup mode is ON, and the native Inventory HUD shows current/required Power status.",
      "source": "XP-and-Progression.md",
      "technicalName": "REQUIRED POWER UPGRADES: VANILLA / CUSTOM / SEED",
      "track": "Core",
      "scope": "1.0",
      "effort": 4,
      "completion": 1
    },
    {
      "group": "Progression",
      "name": "Shuffled Power Order",
      "state": "beta",
      "kind": "have",
      "detail": "The shared browser/CLI product exposes deterministic nine-slot Power order shuffling and the browser defaults it ON. Gameplay gates and native Power Ups icon/help presentation stay synchronized, with only the Ice Shatter freezing prerequisite; Slide and Super Slide may appear in either order. The generalized nine-slot mechanism and product integration are complete and Runtime-confirmed on the accepted bounded route.",
      "source": "XP-and-Progression.md",
      "technicalName": "SHUFFLE POWER PROGRESSION: OFF / ON",
      "track": "Core",
      "scope": "1.0",
      "effort": 3,
      "completion": 1,
      "introduced": "power-order v04 + shared product integration"
    },
    {
      "group": "UI",
      "name": "In-Game Settings",
      "state": "beta",
      "kind": "have",
      "detail": "The shared browser/CLI builder includes the Runtime-confirmed v02 GAME SETTINGS composition: TURN, ATTACK, SPECIALS, JUMP, RUN, EXIT. ATTACK and SPECIALS offer CLASSIC / MODERN; JUMP offers DPAD / BUTTON when both are MODERN; RUN offers HOLD / AUTO. The menu/frontend feature is complete; the separate Earth-boss TURN edge belongs to Turn Lock.",
      "source": "Project-Status.md",
      "technicalName": "Native GAME SETTINGS menu",
      "track": "QoL",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "controls/CI4 v02 composition"
    },
    {
      "group": "Controls",
      "name": "Turn Lock",
      "state": "beta",
      "kind": "have",
      "detail": "Every generated ROM now includes TURN controls. TOGGLE is the vanilla default; LOCK uses the accepted v10 world-direction/facing-lock model, preserves held-Turn backpedal, and temporarily defers to stock forced-facing policy without changing the saved preference. Earth boss type 0x19 remains outside the runtime claim.",
      "source": "Project-Status.md",
      "technicalName": "TURN: TOGGLE / LOCK",
      "track": "QoL",
      "scope": "extra",
      "effort": 2,
      "completion": 0.8,
      "introduced": "TURN v10"
    },
    {
      "group": "UI",
      "name": "Inventory Box Indicator",
      "state": "production",
      "kind": "have",
      "detail": "BOX n OF 4 renders through the native text path.",
      "source": "Project-Status.md",
      "technicalName": "Native box indicator",
      "track": "QoL",
      "scope": "extra",
      "effort": 1,
      "completion": 1
    },
    {
      "group": "Presentation",
      "name": "Boot Branding",
      "state": "production",
      "kind": "have",
      "detail": "Custom legal-screen presentation and deterministic phrase namespace are runtime-confirmed.",
      "source": "Project-Status.md",
      "technicalName": "Boot branding + seeded phrase",
      "track": "4Fun",
      "scope": "extra",
      "effort": 1,
      "completion": 1
    },
    {
      "group": "Presentation",
      "name": "Randomizer Title Screen",
      "state": "beta",
      "kind": "have",
      "detail": "The selected fighter supplies the title art; supported outfit colors tint the title. The browser/CLI integrate the fighter-aware title. Runtime evidence for the newer title and pose follow-ups is pending.",
      "source": "Presentation-and-Branding.md",
      "technicalName": "Randomizer title branding",
      "track": "4Fun",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "2026-09-29 accepted design"
    },
    {
      "group": "Presentation",
      "name": "Outfit Colors",
      "state": "production",
      "kind": "have",
      "detail": "Static color modes remain available, including imported-fighter recoloring. Rainbow was retired on November 9 because its loader and the imported fighter share the file-0x87 hooks.",
      "source": "Project-Status.md",
      "technicalName": "Outfit recoloring",
      "track": "4Fun",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "compact-tail v01"
    },
    {
      "group": "Product",
      "name": "Shared Web / CLI Builder",
      "state": "beta",
      "kind": "have",
      "detail": "Both surfaces use the guarded patch core and agree byte for byte on the tested Sektor build. PR #182 sped up a measured Python build by about 11× through faster change reporting and cached resource decompression.",
      "source": "Web-Patcher-and-Product.md",
      "technicalName": "Browser / CLI shared patch core",
      "track": "Core",
      "scope": "1.0",
      "effort": 5,
      "completion": 1,
      "introduced": "PRs #142, #144, #145"
    },
    {
      "group": "Product",
      "name": "Browser Patcher Experience",
      "state": "production",
      "kind": "have",
      "detail": "The deployed web patcher validates target/donor files at selection time, runs CPU-heavy Pyodide patching in a Web Worker, supports click/browse and drag/drop ROM inputs, exposes live settings/build summaries plus seed Randomize/Copy, keeps an animated 80-message non-repeating flavor deck during builds, and presents a dedicated success/download card. Failures still surface real worker/Python diagnostics.",
      "source": "Web-Patcher-and-Product.md",
      "technicalName": "Responsive browser patcher UX / preflight validation",
      "track": "QoL",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "PRs #142, #144, #145"
    },
    {
      "group": "1.0",
      "name": "Cross-Stage Item Placement",
      "state": "beta",
      "kind": "have",
      "detail": "Global materialization is integrated into the shared browser/CLI pipeline. The destination-aware dispatcher, immediate re-mask path, Temple special-check award wrapper, and Prison credential reconstruction live at 0x801B2310..0x801B28EF / ROM 0xF6AAF0..0xF6B0CF, after progression flash and before Toasty audio. Wrapper semantics are Runtime-confirmed bounded and the corrected relocated composition is integrated; final whole-product validation is tracked separately.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "Global cross-stage item materialization",
      "track": "Core",
      "scope": "1.0",
      "effort": 10,
      "completion": 1,
      "introduced": "materializer v03 integration proof"
    },
    {
      "group": "1.0",
      "name": "Global Item Shuffle",
      "state": "beta",
      "kind": "have",
      "detail": "Implemented global-v2 generator permutes all 85 checks in one deterministic logical run. Clean input remains 16 MiB; generated output expands to 32 MiB and owns eight 1 MiB destination-resource slots at 0x01000000..0x017FFFFF.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "Deterministic global shuffle",
      "track": "Core",
      "scope": "1.0",
      "effort": 8,
      "completion": 1
    },
    {
      "group": "1.0",
      "name": "Deterministic Retry Logic",
      "state": "beta",
      "kind": "have",
      "detail": "Implemented deterministic retry model advances through an explicit attempt namespace with a 10,000-attempt product ceiling. Accepted output records the successful attempt index.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "Deterministic retry attempts",
      "track": "Core",
      "scope": "1.0",
      "effort": 4,
      "completion": 1
    },
    {
      "group": "1.0",
      "name": "Seed Solvability",
      "state": "beta",
      "kind": "have",
      "detail": "Global-v2 fixed-point validation checks the selected completion policy before emission. ALL-85 requires every check reachable; GAME-BEATABLE requires all 21 credentials plus the configured shuffled Power Upgrade count when pickup mode is ON. The solver feature is complete; final end-to-end release validation is tracked separately.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "Whole-run solvability solver",
      "track": "Core",
      "scope": "1.0",
      "effort": 10,
      "completion": 1
    },
    {
      "group": "1.0",
      "name": "Randomizer HUD",
      "state": "beta",
      "kind": "have",
      "detail": "The native Inventory HUD and four-box controls have bounded runtime evidence. Wind2/Wind3 portraits are corrected and pickup-mode Power Upgrades trigger the native new-power popup. The vanilla audio speed-up has a separate default-on fix. Representative full-seed HUD and lifecycle coverage is pending.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "Full native randomizer HUD",
      "track": "Core",
      "scope": "1.0",
      "effort": 8,
      "completion": 1,
      "introduced": "Inventory HUD v21 + Power feedback v23"
    },
    {
      "group": "Lifecycle",
      "name": "Run Health & Resources",
      "state": "beta",
      "kind": "have",
      "detail": "The v06 policy preserves configured health and resources across the supported lifecycle routes. Transport v07 keeps the same policy and module bounds while using t9/t8 and a stack spill to avoid k0/k1 clobber across interrupts. The maintainer validated the v07 proof on a bounded route.",
      "source": "Persistence-Inventory-and-Lifecycle.md",
      "technicalName": "HP / LIVES / CONTINUES + Persistent HP",
      "track": "Core",
      "scope": "1.0",
      "effort": 7,
      "completion": 1,
      "introduced": "lifecycle v06"
    },
    {
      "group": "Lifecycle",
      "name": "New Run Reset",
      "state": "beta",
      "kind": "have",
      "detail": "Runtime-confirmed in lifecycle v06 on the accepted route. True final no-continues Game Over clears MKMSZR run state, inventory/progression authority, and Temple special-check persistence while preserving all five GAME SETTINGS preferences. The next run restores configured difficulty/lives/continues, full HP, and starter inventory.",
      "source": "Persistence-Inventory-and-Lifecycle.md",
      "technicalName": "Game Over / new-run reset",
      "track": "Core",
      "scope": "1.0",
      "effort": 4,
      "completion": 1,
      "introduced": "lifecycle v06"
    },
    {
      "group": "Lifecycle",
      "name": "Difficulty Setting",
      "state": "beta",
      "kind": "have",
      "detail": "Difficulty is a build-time run setting from Very Easy through Very Hard, defaulting to Very Hard. The lifecycle-owned difficulty path is validated in the current product; the recent apparent difficulty issue was traced to a different selected difficulty rather than a lifecycle defect.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "DIFFICULTY: VERY EASY → VERY HARD",
      "track": "Core",
      "scope": "1.0",
      "effort": 3,
      "completion": 1,
      "introduced": "lifecycle v06"
    },
    {
      "group": "Items",
      "name": "Temple Special Check",
      "state": "beta",
      "kind": "have",
      "detail": "The 1.0 policy is resolved: logical Map item 0x0D is excluded from the reward pool, while the scripted Temple location remains the 85th global check. Runtime-confirmed v02 preserves elevator/rope progression and persistence; global-v2 now assigns arbitrary logical rewards through the established Temple award wrapper without moving the location-owned progression path. The Temple-specific acceptance criterion is satisfied; final global-run integration is tracked separately.",
      "source": "1.0-Requirements-and-Roadmap.md",
      "technicalName": "Temple scripted special check",
      "track": "Core",
      "scope": "1.0",
      "effort": 4,
      "completion": 1,
      "introduced": "Temple v02"
    },
    {
      "group": "Research",
      "name": "Cross-Stage Item Research",
      "state": "proof",
      "kind": "want",
      "detail": "Bounded proofs established external-to-embedded conversion, multi-import visuals, destination-owned checkpoint/state semantics, foreign-key masking, and boss-trigger reward separation. Those mechanics now feed the merged global materializer and 85-check generator; the current helper allocation is 0x801B2310..0x801B28EF after the Toasty-collision correction.",
      "source": "Project-Status.md",
      "technicalName": "Cross-stage item materialization / masking",
      "track": "Core",
      "scope": "extra",
      "effort": 4,
      "completion": 1,
      "introduced": "bounded materializer proof line"
    },
    {
      "group": "Enemies",
      "name": "Enemy Randomization",
      "state": "partial",
      "kind": "want",
      "detail": "Experimental implementation with bounded stage-specific evidence. The web setting defaults off. Project Status defers this workstream for reimplementation.",
      "source": "Enemy-Randomization.md",
      "technicalName": "ENEMY RANDOMIZATION: OFF / ON",
      "track": "4Fun",
      "scope": "extra",
      "effort": 5,
      "completion": 0.76,
      "introduced": "ENEMYPLAN05 representative proof"
    },
    {
      "group": "Research",
      "name": "Sektor Fighter Swap",
      "state": "beta",
      "kind": "have",
      "detail": "Swap character on the web or use --fighter sektor in the CLI with MKT N64 USA Rev. 2 and SPECIALS: CLASSIC. The production builder reproduces the bounded v13 composition, including teleport uppercut, straight rocket, homing rocket, and Double Missile. Full-seed Sektor validation and runtime checks of the newer shared pickup/grab poses are pending.",
      "source": "MKT-to-MKMSZ-Compatibility-Layer.md",
      "technicalName": "FighterSwapPatch / Sektor",
      "track": "4Fun",
      "scope": "extra",
      "effort": 6,
      "completion": 0.9,
      "introduced": "PR #194"
    },
    {
      "group": "Presentation",
      "name": "Toasty Voice",
      "state": "production",
      "kind": "have",
      "detail": "The genuine donor voice uses a dedicated MKMSZ audio route while stock pickup audio remains unchanged. The accepted v02 controls/CI4 Toasty composition is runtime-confirmed on the tested route.",
      "source": "Project-Status.md",
      "technicalName": "Donor-backed Toasty audio",
      "track": "4Fun",
      "scope": "extra",
      "effort": 1,
      "completion": 1,
      "introduced": "v46 / v47 composition"
    },
    {
      "group": "Presentation",
      "name": "Toasty Pop-In",
      "state": "production",
      "kind": "have",
      "detail": "The 78x85 lower-right presentation still uses nine CI4 (16-color) slices and a 16-entry palette, but production now stores the exact padded source through compact RLE plus a tiny native decoder. The Runtime-confirmed module is 0x1132 (4,402 bytes) at 0x801B1000..0x801B2131, reclaiming 3,262 bytes inside the existing 16 KiB reservation; production probability remains 8%.",
      "source": "Project-Status.md",
      "technicalName": "Donor-backed Toasty visual",
      "track": "4Fun",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "v47 + compact-source v01"
    },
    {
      "group": "Presentation",
      "name": "Seeded Scorpion Intro Clips",
      "state": "beta",
      "kind": "have",
      "detail": "Merged optional MKT-backed Temple intro randomization leaves stock descriptors 0x41/0x42/0x43 unchanged and replaces only Temple-owned SSEQ events 123/124 or 125 through isolated host 486→329→319. Audio-1/Friendship and Audio-2/shao-laugh provide Runtime-confirmed representative routes with unrelated Bridge/Prison audio preserved. Exhaustive clip-by-clip testing is not required for feature completion.",
      "source": "Sounds-and-Music.md",
      "technicalName": "Seeded Temple intro audio",
      "track": "4Fun",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "isolated Temple audio PR #138"
    },
    {
      "group": "Research",
      "name": "MKT Move Import Research",
      "state": "partial",
      "kind": "future",
      "detail": "The shared animation-script grammar, command records, Reptile/Sektor special readings and engine-neutral components now drive a recompiler. The generic body builder reproduces Sektor; the projectile backend reproduces the bounded forceball proof byte for byte. Full Reptile integration is still in progress.",
      "source": "Fighter-Recompiler-Status.md",
      "technicalName": "Generic donor-move adapter",
      "track": "4Fun",
      "scope": "extra",
      "effort": 5,
      "completion": 0.35
    },
    {
      "group": "Controls",
      "name": "Modern Attacks",
      "state": "beta",
      "kind": "have",
      "detail": "CLASSIC preserves stock attacks. MODERN translates Attack into context-appropriate stock punches, kicks, and combo events; Block + Attack cancels Block startup into the native LP path. Integrated in the shared builder and runtime-confirmed on the accepted v02 route.",
      "source": "Player-Actions-and-Special-Moves.md",
      "technicalName": "ATTACK: CLASSIC / MODERN",
      "track": "QoL",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "controls/CI4 v02 composition"
    },
    {
      "group": "Controls",
      "name": "Modern Specials",
      "state": "beta",
      "kind": "have",
      "detail": "CLASSIC leaves vanilla special recognition intact. MODERN maps facing-relative Special-button chords to native moves while retaining their stock eligibility, costs, and progression checks; Slide and Super Slide use their native recognizers with real XP. Integrated and runtime-confirmed on the accepted v02 route without proof-only XP forcing.",
      "source": "Player-Actions-and-Special-Moves.md",
      "technicalName": "SPECIALS: CLASSIC / MODERN",
      "track": "QoL",
      "scope": "extra",
      "effort": 2,
      "completion": 1,
      "introduced": "controls/CI4 v02 composition"
    },
    {
      "group": "Controls",
      "name": "Ice Blast Pickup Cancel",
      "state": "proof",
      "kind": "future",
      "detail": "Runtime-confirmed bounded 4Fun proof: while Sub-Zero is standing on a valid ordinary pickup, Pickup can interrupt normal ground Ice Blast and immediately enter the stock pickup transition. Stock input/proximity/facing and award behavior remain authoritative; the proof only broadens pickup eligibility for normal Ice and clears the native special lock after those gates pass. Directional/Air Ice and generalized action cancelling are outside the proof.",
      "source": "Pickup-Placement-and-Action-Cancel-Proofs.md",
      "technicalName": "Normal ground Ice Blast -> Pickup action cancel",
      "track": "4Fun",
      "scope": "extra",
      "effort": 1,
      "completion": 1,
      "introduced": "Ice Blast pickup-cancel v01 · 2026-10-02"
    },
    {
      "group": "Controls",
      "name": "Jump Button",
      "state": "beta",
      "kind": "have",
      "detail": "DPAD keeps stock locomotion jumps. BUTTON uses either LK or HK to jump while standing, moving, running, or hanging from a ledge; it becomes editable only when both ATTACK and SPECIALS are MODERN. Integrated and runtime-confirmed on the accepted v02 route.",
      "source": "Native-HUD-and-UI.md",
      "technicalName": "JUMP: DPAD / BUTTON",
      "track": "QoL",
      "scope": "extra",
      "effort": 1,
      "completion": 1,
      "introduced": "controls/CI4 v02 composition"
    },
    {
      "group": "Controls",
      "name": "Auto Run",
      "state": "beta",
      "kind": "have",
      "detail": "HOLD and AUTO are available in GAME SETTINGS. The RUN state word now uses uncached alias 0xA01B0800 so the raw file-0x1A reload cannot be overwritten by a stale cached line. The maintainer verified the cache-contract follow-up on a bounded route.",
      "source": "Project-Status.md",
      "technicalName": "RUN: HOLD / AUTO",
      "track": "QoL",
      "scope": "extra",
      "effort": 1,
      "completion": 1,
      "introduced": "controls/CI4 v02 composition"
    },
    {
      "group": "Core",
      "name": "Vanilla Audio FIFO Fix",
      "state": "production",
      "kind": "have",
      "detail": "The stock speed-up/crunch was reproduced in clean USA Rev. 0. The guarded fix lowers the reserve from 320 to 272 samples and is enabled by default. A bounded maintainer test passed the speed-up scenario. Brief pops were still heard and their source is pending.",
      "source": "Sounds-and-Music.md",
      "technicalName": "AudioFifoReservePatch",
      "track": "Core",
      "scope": "1.0",
      "effort": 2,
      "completion": 1,
      "introduced": "PR #183"
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
      "target": "Shared script grammar and token/callback map",
      "status": "partial",
      "detail": "MKT and MKMSZ share the animation-script grammar. The decoder maps operand counts and game-local tokens. Per-move semantics and full backend coverage still require translation.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "area": "Assets",
      "capability": "Frame / texture translation",
      "donor": "Heap-relative descriptors + codecs 22/24/15",
      "target": "Native Type-5 frame packing from fighter descriptions",
      "status": "runtime",
      "detail": "The generic builder reproduces Sektor byte for byte and produced the owner-accepted Reptile body v03. Some other roster codec-16 palette semantics remain open.",
      "source": "MKT-Fighter-Asset-Translation.md"
    },
    {
      "area": "Assets",
      "capability": "Palette translation / binding",
      "donor": "MKT palette semantics",
      "target": "Ramp-aware reduction and native TLUT binding",
      "status": "runtime",
      "detail": "Reptile v03 uses the per-fighter table at 0x800A3660 and preserves colour ramps. The owner accepted the corrected colours. Sektor’s explicit palette and layout are pinned.",
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
      "target": "Native combo graph with relocated donor records",
      "status": "runtime",
      "detail": "Sektor’s accepted v62 records are the regression fixture. The generic translator and Reptile combo/throw input proof are in open PR #203. Reptile’s input proof awaits manual testing.",
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
      "capability": "Common fighter animations",
      "donor": "Sektor / robot animation families",
      "target": "Reusable common-action body builder",
      "status": "runtime",
      "detail": "Sektor’s bounded common-animation evidence carries forward. The generic builder supports fighter descriptions, computed layouts and the accepted Reptile body. The newer shared pickup and grabbed-by-enemy recipes await runtime confirmation.",
      "source": "Fighter-Recompiler-Status.md"
    },
    {
      "area": "Projectiles",
      "capability": "Projectile actor creation / ownership",
      "donor": "setup_proj_obj + create_proj_proc",
      "target": "Native enemy-projectile path and type-4 player projectile",
      "status": "runtime",
      "detail": "Proof v06 demonstrated Reptile’s MKT forceball from Sub-Zero. The move-program backend reproduces it in v07 without modifying the Ice Blast root. This is bounded evidence for one route.",
      "source": "Fighter-Recompiler-Components.md"
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
      "target": "Sektor-specific effects plus a reusable projectile backend",
      "status": "partial",
      "detail": "Sektor’s straight and homing rockets exercised donor art, palette, impact and sound on bounded routes. Full reusable palette/texture/effect lifecycle coverage remains pending.",
      "source": "Fighter-Recompiler-Components.md"
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
      "target": "Special commands, move programs and host components",
      "status": "partial",
      "detail": "Sektor’s four specials run in the bounded composition. Every Reptile/Sektor special has an annotated MKT reading and a move program. Reusable host lowering beyond the demonstrated projectile remains in progress.",
      "source": "Fighter-Recompiler-MKT-Moves.md"
    },
    {
      "area": "Integration",
      "capability": "Production-safe fighter/move allocation",
      "donor": "Translated fighter/move payload",
      "target": "Relocatable payload inside file 0x87, conditional 32 MiB carrier",
      "status": "runtime",
      "detail": "The stock-size fighter file holds the payload. Sektor’s file and samples load above 16 MiB, with a guarded file-0x1A loader in the reserved pool. The bounded v13 composition underlies the released option.",
      "source": "Sektor-Takeover-Proof-History.md"
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
  ],
  "progressModel": {
    "note": "Feature-card completion measures the feature itself: implementation plus feature-specific validation. End-to-end release testing is tracked as release process/evidence rather than as a feature card. Optional and experimental tracked work remains beyond the 1.0 marker.",
    "releaseLabel": "1.0",
    "extraLabel": "Tracked extras"
  },
  "recordAuditBaseCommit": "52139f021212c94bb483cc6ec1a6cecda5c94fa1",
  "refreshScope": "Targeted canonical refresh on 2026-10-10; unchanged older records retain their original audit base. Not an exhaustive re-audit of every interval or feature.",
  "compatibilityMilestones": [
    {
      "version": "v62",
      "title": "Common combo graph",
      "evidence": "Runtime-confirmed bounded",
      "detail": "Sektor's MKT combo strings work on the tested host route after translating game-local reaction selectors to MKMSZ-native meanings.",
      "source": "MKT-Adapter-Primitives.md"
    },
    {
      "version": "v75",
      "title": "Stable missile flight",
      "evidence": "Runtime-confirmed bounded",
      "detail": "Facing-aware launch, two-substep cadence folding and tuned velocity retain a stable straight-missile baseline on the tested route.",
      "source": "Sektor-Takeover-Proof-History.md"
    },
    {
      "version": "v87",
      "title": "Faithful rocket visuals",
      "evidence": "Runtime-confirmed bounded",
      "detail": "Native-compatible rocket image and dynamic palette work as a donor-faithful visual proof; this is not a generic resource pipeline.",
      "source": "Sektor-Takeover-Proof-History.md"
    },
    {
      "version": "v89",
      "title": "Correct first visible frame",
      "evidence": "Runtime-confirmed bounded",
      "detail": "Synchronous texture-slot preparation before actor-list insertion fixes the stale Ice-derived first frame in the bounded straight-missile proof.",
      "source": "MKT-Adapter-Primitives.md"
    }
  ],
  "previousSnapshotCommit": "a8601aac6de0ad2f1db1a86c868242902cbab850",
  "recentUpdates": [
    [
      "Fighter swap",
      "Sektor is available in the browser and CLI. Full-seed testing is pending.",
      "MKT-to-MKMSZ-Compatibility-Layer.md",
      [
        192,
        193,
        194,
        195,
        196
      ]
    ],
    [
      "Audio speed-up",
      "Default-on production fix lowers the vanilla AI FIFO reserve from 320 to 272 samples.",
      "Sounds-and-Music.md",
      [
        183
      ]
    ],
    [
      "Runtime corrections",
      "Water’s boss checkpoint targets selector 6. The key map, lifecycle transport and RUN cache access were also corrected.",
      "Status-Update-Log.md",
      [
        175,
        179,
        180,
        181,
        184
      ]
    ],
    [
      "XP and inventory",
      "Removed stage XP caps in OFF mode, corrected Wind portraits and added debug starting keys.",
      "XP-and-Progression.md",
      [
        174
      ]
    ]
  ],
  "fighterUpdates": [
    [
      "Sektor fighter swap",
      "Production beta",
      "Four specials and R4 power-tier integration in the bounded composition. Browser/CLI support is merged. Full-seed validation is pending.",
      "MKT-to-MKMSZ-Compatibility-Layer.md",
      [
        193,
        194,
        195,
        196
      ]
    ],
    [
      "Recompiler milestones 1–3",
      "Merged",
      "Fighter descriptions, roster body decoding and move readings feed the host backend. Sektor’s pinned body reproduces byte for byte. Reptile’s forceball ran through the native enemy-projectile path on Sub-Zero in v06. Backend v07 reproduces it byte for byte.",
      "Fighter-Recompiler-Status.md",
      [
        197,
        198,
        199,
        200,
        201,
        202
      ]
    ],
    [
      "Reptile milestone 4",
      "Bounded body proof",
      "The owner accepted the v03 body. Combo and throw translation is in open PR #203 with manual testing pending. The specials and full fighter composition are still in progress.",
      "Fighter-Recompiler-Status.md",
      [
        202,
        203
      ]
    ]
  ],
  "reviewedPulls": {
    "randomizer": {
      "first": 174,
      "last": 203,
      "open": [
        203
      ]
    },
    "ghidra": {
      "first": 7,
      "last": 13,
      "closedUnmerged": [
        7
      ]
    }
  }
};
