// Generated from reviewed versioned Ghidra global manifests; local confirmation from maintainer script outputs.
// A curated metadata catalog, NOT a claim of full Ghidra or Wiki coverage.
window.MKMSZ_GHIDRA_DATA = {
  "snapshot": "2026-10-10",
  "sourceRepo": "smeagol44/MKMSZ-Ghidra",
  "sourceCommit": "1c73998221cc20b5c67b35c4fae8efd566725af5",
  "projectCommit": "a8601aac6de0ad2f1db1a86c868242902cbab850",
  "maintainerImport": {
    "date": "2026-10-09",
    "checked": 623,
    "exact": 623,
    "mismatches": 0,
    "functions": 139,
    "globals": 35,
    "codeLabels": 2,
    "types": 12,
    "enumMembers": 8,
    "fields": 88,
    "typedData": 1,
    "typedDataLabels": 1,
    "comments": 232,
    "bookmarks": 105
  },
  "navigationCounts": {
    "functions": 139,
    "globals": 35,
    "codeLabels": 2,
    "bookmarks": 105,
    "types": 12,
    "typedData": 1,
    "comments": 232
  },
  "knowledgeScope": {
    "owners": 40,
    "enumeratedFindings": 927,
    "routedFindings": 927,
    "ghidraTargetClaims": 263,
    "anchoredSections": 253,
    "totalSections": 713,
    "statement": "These are known-knowledge routing measures, not a completion percentage of unknown game code; imported records and claims use different denominators."
  },
  "findings": [
    {
      "title": "Ghidra global import: independently audited",
      "evidence": "Maintainer-local Ghidra confirmed",
      "date": "2026-10-09",
      "detail": "The clean USA Rev 0 global program matches all 623 listed metadata checks, including 139 functions, 35 globals, 12 managed types, 232 comments and 105 bookmarks. Import scripts and read-only audits are reproducible; this is not a full Ghidra database sync or a statement that all game code is decompiled.",
      "sourceRepo": "smeagol44/MKMSZ-Ghidra",
      "source": "docs/local-migration-handoff.md"
    },
    {
      "title": "Rich Inventory audio: upstream cause unresolved",
      "evidence": "Trace-confirmed downstream; root cause Pending",
      "date": "2026-10-09",
      "detail": "Across Traces 7–11, closed-loop event replay matches 59,992 FIFO status reads, 59,489 AI_LEN reads, 58,971 PCM sizes, and 513 rejected submissions. No missing active-VI native audio services were observed. FIFO timing/phase explains rejection bursts, but the first unfavorable trigger and portable correction remain open; rich Inventory presentation remains accepted, PR #156 unmerged, and 1.0 audio gate blocked.",
      "sourceRepo": "smeagol44/MKMSZ-Randomizer",
      "source": "wiki/Production-Rich-Inventory-Music-Static-Investigation.md"
    },
    {
      "title": "Inventory: native four-box navigation and legend",
      "evidence": "Runtime-confirmed bounded; production composition",
      "date": "2026-10-06",
      "detail": "Items-mode Left/Right now cycles all four authoritative boxes with wraparound while Inventory stays open, including empty-box traversal; the native four-box legend and correct live/backing reconstruction passed bounded manual tests. Rich HUD stability and delayed audio remain a separate unresolved release gate.",
      "sourceRepo": "smeagol44/MKMSZ-Randomizer",
      "source": "wiki/Persistence-Inventory-and-Lifecycle.md"
    },
    {
      "title": "Powers-as-pickups OFF: stock XP persistence",
      "evidence": "Runtime-confirmed bounded",
      "date": "2026-10-06",
      "detail": "OFF builds retain stock earned XP and now mirror it into MKSV+0x44 and restore at the established stage-entry boundary. This is a focused lifecycle correction, not exhaustive full-seed coverage.",
      "sourceRepo": "smeagol44/MKMSZ-Randomizer",
      "source": "wiki/XP-and-Progression.md"
    },
    {
      "title": "Fire and Bridge: credentials across all boxes",
      "evidence": "Runtime-confirmed bounded",
      "date": "2026-10-06",
      "detail": "Stock Fire and Bridge use-time gate checks historically scanned only the ten-slot live window. The bounded correction recognizes stage credentials distributed across all four backing boxes while respecting location/state ownership.",
      "sourceRepo": "smeagol44/MKMSZ-Randomizer",
      "source": "wiki/Persistence-Inventory-and-Lifecycle.md"
    },
    {
      "title": "Sektor: donor translation remains proof-only",
      "evidence": "Runtime-confirmed bounded through v89",
      "date": "2026-10-05",
      "detail": "The proof lineage includes 33 common states, Run and combo coverage, rocket/first-visible-frame experiments. Portability and production-safe move/asset composition remain unresolved; MKT donor binaries are not interchangeable with MKMSZ host code.",
      "sourceRepo": "smeagol44/MKMSZ-Randomizer",
      "source": "wiki/Sektor-Takeover-Proof-History.md"
    },
    {
      "title": "Memory: no fixed expansion/arena overlap found",
      "evidence": "Static-confirmed bounded; peak headroom Pending",
      "date": "2026-10-09",
      "detail": "Known shared file 0x1A payload bounds and named 16 KiB expansion suballocations were audited against the production/diagnostic composition. No fixed overlap was identified, but dynamic arena headroom and upstream audio causality remain open.",
      "sourceRepo": "smeagol44/MKMSZ-Randomizer",
      "source": "wiki/Memory-and-Allocation-Map.md"
    }
  ],
  "records": [
    {
      "category": "Function",
      "address": "0x80002588",
      "title": "stage_scene_data_parse",
      "evidence": "Static-confirmed",
      "detail": "Parses stage data and publishes the first 60-byte spatial trigger record at `0x801114F4` plus its record count at `0x802F8228`. The exact Wind source-record catalog remains Pending, but the runtime table ownership and stride are statically established.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8000322C",
      "title": "embedded_image_decode_dispatch",
      "evidence": "Static-confirmed",
      "detail": "Ordinary types come from header byte `+3`; exact header `0x05000000` is special-cased to fighter codec type 5. Type 4 dispatches to `0x80003428`; type 5 dispatches through `0x80003314",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80003428",
      "title": "embedded_image_type4_decode",
      "evidence": "Static-confirmed",
      "detail": "Separate control/token streams with a 1024-byte ring buffer; exact decode reproduced Water embedded Potion frames byte-for-byte against Fire external Potion payloads",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8000C6D8",
      "title": "pris_grunt_ranged_aim_select",
      "evidence": "Static-confirmed",
      "detail": "Shared permanent-code AI action for types `0x15/0x16/0x17`; bounds horizontal separation to 450, derives target slope, and installs one of the common aim callbacks that enter `0x80043B18`. Types `0x16/0x17` use this action exclusively across all four traced distance bands; `0x15` mixes it with two common-code alternatives in the two nearer bands. Clean ROM: a distinct instruction stream follows FUN_8000C6B0's jr ra/nop at 0x8000C6D0/0x8000C6D4; this entry begins at 0x8000C6D8 (ROM 0xD2D8) and saves ra at 0x8000C6EC. A byte-level scan finds 27 literal 0x8000C6D8 words in the ROM but zero direct J/JAL instruction words to this address. Ghidra may leave this indirect callback entry undefined; disassemble/verify the body before creating its function.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8000D0B8",
      "title": "debug_stage_select_menu",
      "evidence": "Runtime-confirmed",
      "detail": "Production A-button title route",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80015088",
      "title": "pause_stage_event_dispatch",
      "evidence": "Static-confirmed; maintainer Ghidra listing confirmation",
      "detail": "Shared frontend/gameplay event entry. Reads gate 0x800C255A; when process state 0x802ECE18 is 2 schedules native Pause callback 0x80016300 (class 0x400); when state is 0x18 schedules stage_callback_reconstruct 0x80016080 (class 0x15), ultimately entering the selected stage. Not solely a transition copy. Exact function tail/boundaries beyond displayed decompilation remain to be audited.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80016008",
      "title": "rand_per_thousand",
      "evidence": "Static-confirmed",
      "detail": "Native random gate: returns true-like 0x8000 when random modulo 1000 is below unsigned argument, else 0x4000.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80016080",
      "title": "stage_callback_reconstruct",
      "evidence": "Static-confirmed: class teardown, stage dispatch, stage-specific resource/player reconstruction; not a life reload owner",
      "detail": "Stage callback reconstruction dispatcher",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80016B10",
      "title": "frontend_resource_init",
      "evidence": "Static-confirmed: configured continues/lives -> current at `0x80016BC0/8`, lives minus one; called from `0x8000D260",
      "detail": "Frontend/fresh-flow current-resource initialization",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80017F80",
      "title": "actor_motion_integrate",
      "evidence": "Static-confirmed",
      "detail": "Normal actor integrator reads velocities +0x14/+0x18, shifts >>8, rotates and adds three times integer components into fixed8 world XYZ. MKMSZ host units/cadence differ from MKT donor 16.16 motion. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001BDA0",
      "title": "actor_render_descriptor_bind",
      "evidence": "Static-confirmed",
      "detail": "Writes `+0x74/+0x7C` descriptor geometry; initialized `+0x8C bit 0x40` path marks `+0xFA` dirty and resolves `+0x68/+0x80` from texture slot `+0x9C` and palette selector `+0x9E`; both relevant zero-preword entries mark dirty even on same-shape binds",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001BF70",
      "title": "texture_slot_init_sync",
      "evidence": "Static-confirmed; Runtime-confirmed bounded",
      "detail": "Initializes fixed texture-slot metadata, queues source pixels, and synchronously drains upload.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001C2B4",
      "title": "dynamic_texture_alloc",
      "evidence": "Static-confirmed",
      "detail": "Allocates/reuses dynamic texture records in slot range 0x200..0x2FF.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001C528",
      "title": "presentation_resource_load",
      "evidence": "Static/runtime-confirmed at known callers",
      "detail": "Loads presentation resource/palette state; semantics are bounded to traced callers. Traced glyph path acquires by source pointer; active cache hit increments u16 refs and returns handle without conversion/upload. Miss allocates/converts/uploads; no audio causation established.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001D520",
      "title": "sprite_node_build",
      "evidence": "Static-confirmed",
      "detail": "Consumes an ID-indexed sprite/resource entry, allocates a `0x58` render node through `0x8002018C`, stores the sprite ID at node `+0x4A`, and submits through `0x8001EAE4`. Shared rendering machinery; not a key-only patch seam.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001E578",
      "title": "context_render_family",
      "evidence": "Static-confirmed",
      "detail": "Not a universal gameplay-HUD API",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001EAE4",
      "title": "render_node_submit",
      "evidence": "Runtime-confirmed",
      "detail": "Submits a gameplay render node to the HUD/render queue.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001F7A8",
      "title": "gameplay_textured_node_render",
      "evidence": "Static/runtime-confirmed",
      "detail": "Used by the gameplay HUD queue. Node `+0x4A` is texture-slot ID; node `+0x4C` is palette selector. For the CI8 path the renderer reads slot-record `+0x08` and emits it as the RDP `SetTextureImage` DRAM image width, then loads the node's `+0x10/+0x12 .. +0x20/+0x22` source rectangle through load tile 7 and renders through tile 0. The stock Toasty-hook source node supplies S/T `0,0`, step `1,1`, and point-filter mode. Palette selector resolves through `0x80290A00 + id*8` and `0x802E73E0 + index*4` to a hardware-ready CI8 RGBA5551 TLUT.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002018C",
      "title": "render_node_alloc",
      "evidence": "Runtime-confirmed",
      "detail": "Allocates a 0x58-byte render node.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80024650",
      "title": "actor_list_insert",
      "evidence": "Static-confirmed",
      "detail": "Inserts an already-constructed actor into the active actor list; does not initialize actor content.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028128",
      "title": "resource_actor_construct",
      "evidence": "Static-confirmed",
      "detail": "Constructs an actor from a direct resource descriptor pointer.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800281A0",
      "title": "resource_entry_actor_setup",
      "evidence": "Static-confirmed",
      "detail": "Resolves an outer resource entry to a descriptor pointer and calls resource_actor_construct.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002830C",
      "title": "controller_clone_alloc",
      "evidence": "Static-confirmed",
      "detail": "Allocates/links a controller-process and clones current controller context fields.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028610",
      "title": "process_scheduler_dispatch",
      "evidence": "Static-confirmed",
      "detail": "Main controller/process scheduler and dispatcher.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028794",
      "title": "process_sleep",
      "evidence": "Static-confirmed",
      "detail": "Stores controller sleep count and context-switches/yields.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028F3C",
      "title": "player_process",
      "evidence": "Static-confirmed",
      "detail": "Main player locomotion and control. Semantic input controller+0x638 -> 0x800BF2EE; held horizontal direction +0x68C; live direction/facing mismatch +0x704. Locomotion mode +0x6FC can be stale after idle, not live backward intent. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002B1EC",
      "title": "player_set_horizontal_velocity",
      "evidence": "Static-confirmed",
      "detail": "Writes player actor horizontal velocity and related movement field.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002E078",
      "title": "victim_reaction_install",
      "evidence": "Static-confirmed",
      "detail": "Installs an already-resolved reaction callback on the victim controller and marks it reacting.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002E104",
      "title": "award_xp",
      "evidence": "Static-confirmed",
      "detail": "Central XP award routine.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002E978",
      "title": "type_combat_record_select",
      "evidence": "Static-confirmed; complete GRUNT action closure Pending",
      "detail": "Selects a type-specific pointer at `0x800AF340 + type*4` and indexes its four-byte records with the **sixth** caller stack argument loaded into `$s5` (`new_sp+0x46` low halfword after `-0x30`) before `0x8002BA04`. `$a3` is separately saved in `$s0` for animation selection. GRUNT1's table pointer is `0x800B0430`, GRUNT2's `0x800B0508`. The controller-only `0xE/0xF` sites at `0x8004D2C4/0x8004D420` do not establish ordinary-grunt reachability.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002EB38",
      "title": "run_setup",
      "evidence": "Static-confirmed",
      "detail": "Selects primary animation slot `0x2B` through `0x8002FE54`, installs animation rate `2` through `0x80031724`, then applies facing-aware horizontal velocity. Run loop caller at `0x800296B0` sleeps one process tick and invokes `0x8003174C` once per active iteration.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002EC78",
      "title": "player_construct_wrapper",
      "evidence": "Static-confirmed",
      "detail": "Player construction wrapper.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002ECF4",
      "title": "player_construct",
      "evidence": "Static-confirmed",
      "detail": "Player constructor; includes HP initialization path.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002FCDC",
      "title": "fighter_alloc",
      "evidence": "Static-confirmed",
      "detail": "Lower fighter allocator indexes type descriptor offsets at 0x800B13D0 and writes type to actor +0x78. Separate slot lookup occurs at 0x80071B20/0x800B14C0 (Enemy-Randomization.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002FE54",
      "title": "fighter_select_animation",
      "evidence": "Static-confirmed",
      "detail": "Selects fighter animation-table entry and stores current animation cursor.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80030178",
      "title": "forward_locomotion_setup",
      "evidence": "Static-confirmed",
      "detail": "Initializes forward locomotion and selects primary animation slot 1.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80030208",
      "title": "backward_locomotion_setup",
      "evidence": "Static-confirmed",
      "detail": "Initializes backward locomotion and selects primary animation slot 2.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800304C0",
      "title": "animation_advance",
      "evidence": "Static-confirmed",
      "detail": "Advances the current animation script/cursor.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80031208",
      "title": "actor_adjust_local_xy",
      "evidence": "Static-confirmed",
      "detail": "Applies facing-aware local X/Y offset to actor world position.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80031394",
      "title": "actor_align_to_owner",
      "evidence": "Static-confirmed; unsafe proof usage Runtime-confirmed",
      "detail": "Aligns child actor origin/facing/render anchor to owner; requires valid descriptor state.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80031724",
      "title": "animation_rate_init",
      "evidence": "Static-confirmed",
      "detail": "Stores animation period and primes countdown.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003174C",
      "title": "animation_rate_advance",
      "evidence": "Static-confirmed",
      "detail": "Rate-gated animation advancement.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003188C",
      "title": "actor_flip_facing",
      "evidence": "Static-confirmed",
      "detail": "Toggles facing and runs native frame/setup helper.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80031D00",
      "title": "find_nearest_opponent",
      "evidence": "Static-confirmed",
      "detail": "Finds nearest opponent controller among player-facing opponent classes.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80031EF0",
      "title": "face_opponent",
      "evidence": "Static-confirmed",
      "detail": "Resolves desired side and flips actor only when needed.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80032CD4",
      "title": "special_action_install",
      "evidence": "Static-confirmed",
      "detail": "Installs top-level special callback as scheduler context; observed callback ra may equal its entry. A normal jr ra self-reenters. Preserve lock 0x800BF308, bounded loops and native exit/restore. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80034510",
      "title": "anim_resource_actor_create",
      "evidence": "Static-confirmed",
      "detail": "Creates resource-backed secondary actor from animation stream resource entry.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80035578",
      "title": "life_continue_terminal_owner",
      "evidence": "Static-confirmed: remaining-life branch bypasses configured reload; stock decrement store `0x80035CA0`; accepted Continue reload `0x80035C8C",
      "detail": "Life/Continue/terminal presentation owner",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80035D34",
      "title": "failure_reconstruction",
      "evidence": "Static-confirmed: states `0x16/0x1B` preserve carrier-valid; other paths decrement at `0x80035F04` or enter life/Continue owner",
      "detail": "Alternate failure or valid-preserving reconstruction",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80035F38",
      "title": "valid_state_reconstruction",
      "evidence": "Static-confirmed consumer flow; callback references indirect; stock HP-carrier producer not closed",
      "detail": "Valid-preserving reconstruction owner",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80035FC0",
      "title": "stage_completion_teardown",
      "evidence": "Static-confirmed: capture candidate before teardown and live-pointer clear, not after",
      "detail": "Stage completion teardown/next-stage owner",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80038770",
      "title": "stage_key_crystal_award",
      "evidence": "Static-confirmed",
      "detail": "Generic stock stage-key/crystal award callback with stage-specific behavior.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800388FC",
      "title": "pickup_potion",
      "evidence": "Runtime-confirmed",
      "detail": "Potion pickup callback; inserts inventory item ID 0x01.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003892C",
      "title": "pickup_shield",
      "evidence": "Runtime-confirmed",
      "detail": "Shield pickup callback; inserts inventory item ID 0x06.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003895C",
      "title": "pickup_eye",
      "evidence": "Static/runtime-confirmed",
      "detail": "Eye pickup callback; inserts item ID 0x03.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003898C",
      "title": "pickup_formula",
      "evidence": "Static/runtime-confirmed",
      "detail": "Formula pickup callback; inserts item ID 0x02.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800389BC",
      "title": "pickup_herbs",
      "evidence": "Runtime-confirmed",
      "detail": "Herbs pickup callback; inserts item ID 0x04.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800389EC",
      "title": "pickup_health_urn",
      "evidence": "Static/runtime-confirmed",
      "detail": "Health urn pickup callback; inserts item ID 0x05.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80038A1C",
      "title": "pickup_extra_life",
      "evidence": "Static-confirmed",
      "detail": "Extra-life urn pickup callback.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80038A58",
      "title": "pickup_mana",
      "evidence": "Static-confirmed",
      "detail": "Mana pickup callback.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80038A90",
      "title": "pickup_strength",
      "evidence": "Static-confirmed",
      "detail": "Strength urn pickup callback; inserts item ID 0x0B.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80038ACC",
      "title": "pickup_manager",
      "evidence": "Static/runtime-confirmed",
      "detail": "Ordinary pickup manager and persistence-restore owner. Static callback ABI at 0x800393BC..0x800393D0 passes record type and bit15-masked parameter to callback at record +0x18; it does not pass destination ordinal (Global-Item-Materialization-and-Solvability.md, Wind location/reward ownership trace). No new function signature inferred.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003BF4C",
      "title": "stage_spawn_position_init",
      "evidence": "Static-confirmed",
      "detail": "Reads `0x802C18F8` at `0x8003BF54` / ROM `0x3CB54`, selects a 20-byte stage spawn record through the stage table, and writes actor X/Y/Z plus initial coordinates. Player construction reaches it through `0x8002EC78 -> 0x8002ECF4 -> 0x8002EDFC`; another actor-construction path calls it at `0x8002EF08`, so any proof must guard player scope.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8003D86C",
      "title": "stock_turn_action",
      "evidence": "Static-confirmed",
      "detail": "Selects **secondary table-1 slot `0x03`** (`file 0x87 +0xE84`) and runs the stock turn-action sequence through the current controller; the older primary-`0x03` description was incorrect. Not intrinsically player-only.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80043B18",
      "title": "armed_grunt_ranged_action",
      "evidence": "Static-confirmed",
      "detail": "Indexes a `0x28`-byte shot-parameter record by `type-0x15`, advances the parent attack animation, allocates class `0x806` with callback `0x80043EB0`, copies shot fields, and continues parent recovery.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80043EB0",
      "title": "armed_grunt_projectile_process",
      "evidence": "Static-confirmed",
      "detail": "Owns type-specific SFX/offsets, starts common helpers `0x80060E68/0x80061220`, constructs the visible shot through `0x80047160`, applies velocity/aim fields, and loops through `0x8004CF3C` collision until impact/range exit.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800490CC",
      "title": "shinnok_amulet_pickup",
      "evidence": "Static-confirmed",
      "detail": "Adds ID `0x23`; outside ordinary tables",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004A6E8",
      "title": "controller_face_policy_scan",
      "evidence": "Static-confirmed",
      "detail": "Scans controller classes and returns 0x8000/0x4000 face-policy result; higher-level name unresolved.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004AA4C",
      "title": "scheduler_context_transfer",
      "evidence": "Static-confirmed",
      "detail": "Transfers scheduler context through stock selector table; not a generic action initializer.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004AB0C",
      "title": "ice_screen_tint_process",
      "evidence": "Static-confirmed",
      "detail": "Calls `0x80044964(0x80,0x80,0xC0,0x80,6)` then native process exit `0x80028564`. Separate from companion actor and projectile child processes.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004AB84",
      "title": "ice_projectile_action_root",
      "evidence": "Static-confirmed",
      "detail": "Includes special lock behavior",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004B524",
      "title": "ice_parent_action_exit",
      "evidence": "Static-confirmed",
      "detail": "Clears special lock `0x800BF308` and invokes `0x800328FC` on the current owner actor after parent recovery.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004B584",
      "title": "ice_parent_preflight_check",
      "evidence": "Static-confirmed",
      "detail": "Makes `+0x714` current and calls stock `0x800304C0`, consuming Ice entry `+0xDC4` before child flight on normal mode zero; restores owner before strike/handoff",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004B82C",
      "title": "ice_projectile_flight",
      "evidence": "Static-confirmed",
      "detail": "On straight mode zero loads file-`0x87 +0xFD0 = +0xD90` rocket cursor, calls one-time `0x8004CC14`, then v75 injects initial velocity and flight callback; the parent wrapper is bypassed",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004CBC4",
      "title": "projectile_child_process_create",
      "evidence": "Static-confirmed",
      "detail": "Projectile child class0x700 binds parent staged actor+0x714 to child+0x6E0, copies parent context, clears parent working pointer+0x648. Those pointers serve distinct lifetime roles. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004CC14",
      "title": "projectile_velocity_rate_setup",
      "evidence": "Static-confirmed",
      "detail": "Writes facing-aware projectile actor `+0x14`, then calls `0x80031724` with the supplied rate; suitable as a setup primitive, not player propulsion and not yet established as the generic per-tick acceleration primitive",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004CC50",
      "title": "projectile_loop",
      "evidence": "Static-confirmed",
      "detail": "Child flight loop latches +0x70C to +0x680; per tick sleeps, advances/checks lifecycle, optionally invokes callback and resolves contact. Does not rewrite actor+0x14 velocity between callbacks; offscreen/lifetime exit calls 0x8004CDF8. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004CDF8",
      "title": "projectile_actor_child_exit",
      "evidence": "Static-confirmed",
      "detail": "Removes actor through `0x80028408/0x80024B00`, then terminates the active projectile process through `0x80028564`; reached on generic flight offscreen/lifetime paths.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004CE6C",
      "title": "projectile_resolve_strike",
      "evidence": "Static-confirmed",
      "detail": "Resolves fighter-local strike record from projectile strike selector.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004CF3C",
      "title": "projectile_collision_dispatch",
      "evidence": "Static-confirmed",
      "detail": "Dispatches projectile collision/strike to normal collision core.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80053DA8",
      "title": "fighter_terminal_presentation",
      "evidence": "Static-confirmed for Water stage ID `2",
      "detail": "Binds current stage resource base `0x802E82B8` to actor `+0x98`, resolves selector word `+0x28` (selector `10`) into the animation cursor, advances six frames, then decrements encounter count and releases/despawns. Dispatcher `0x80056F80..0x80057060` reaches this for Water MONK5/MONK6 and imported GRUNT2; Water cross-stage GRUNT2 runtime remains untested.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80053E8C",
      "title": "fighter_file_terminal_cleanup",
      "evidence": "Static-confirmed for GRUNT1 and PRIS armed/base terminal routing",
      "detail": "Type `0x0E` reads file-`0x22 +0x2555C` and root `0x32` before cleanup. Types `0x15/0x16/0x17` reach this function but, while still armed, take its direct cleanup/despawn branch rather than a stage-selector presentation. If first disarmed by `0x80057478`, they become type `0x14`; the `0x14` path uses file-`0x8E` palette `+0x1FB84` and root `0x32` at `+0x134`, a six-frame file-internal list, before encounter-count decrement/release. This closes selector-10 as unnecessary for the normal PRIS armed-family terminal route; it does not generalize every other type branch.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80057478",
      "title": "fighter_morph_disarm",
      "evidence": "Static-confirmed for GRUNT2 and PRIS armed family",
      "detail": "Existing `0x0F -> 0x0E` morph remains valid. For `0x15/0x16/0x17`, rebinds the fighter to base file `0x8E`, changes type to `0x14`, selects the base animation, and starts detached-weapon process `0x8005E1FC` using the armed variant's original primary file.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8005BFB0",
      "title": "gameplay_hud",
      "evidence": "Static/runtime-confirmed for normal production; Stage-7 scheduling Static-confirmed",
      "detail": "Contains 13 submit calls. Both normal Fire and Stage 7 schedule it as class `0x15`; its frame loop reads player controller/health and checks a vertical position before render-node submissions. Stage-7 render visibility is not Runtime-confirmed.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8005E1FC",
      "title": "detached_weapon_present",
      "evidence": "Static-confirmed for PRIS armed family",
      "detail": "Acquires the palette from the supplied primary-file-relative record, constructs the primary file's secondary slot 0, positions it at the owner, runs the detached-object animation/physics, then removes/releases it. Decoded `0x8F` slot-0 art is the long staff; `0x90` is the large cannon/launcher; `0x91` is a distinct Bridge weapon.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800615D8",
      "title": "frontend_fade_normalize",
      "evidence": "Static/runtime-confirmed",
      "detail": "Preserved after logo bypass with argument `0x80",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80062D60",
      "title": "pickup_presentation_spawn",
      "evidence": "Static-confirmed",
      "detail": "Generic pickup/checkpoint presentation spawn call used by multiple stage callbacks.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8006352C",
      "title": "auxiliary_trigger_spawn",
      "evidence": "Static-confirmed",
      "detail": "Hardcodes fighter type `7",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80064C18",
      "title": "gameplay_sfx_wrapper",
      "evidence": "Static-confirmed",
      "detail": "Indexes 10-byte descriptor table at `0x800A1730`; resolves raw sound ID and variation parameters, then calls `0x80080A88",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80065D64",
      "title": "raw_file_load",
      "evidence": "Static-confirmed",
      "detail": "Synchronous raw-file loader used by MKMSZR runtime bootstrap.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80065E00",
      "title": "type5_decode",
      "evidence": "Static-confirmed",
      "detail": "Native fighter image Type-5 decoder.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80066360",
      "title": "arena_cold_init",
      "evidence": "Static-confirmed",
      "detail": "Initializes both arena base/floor `0x800EECD0` and live bump cursor `0x80111ECC` to the stock hardcoded arena start, with initial boundary bookkeeping",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80066390",
      "title": "arena_cursor_reset",
      "evidence": "Static-confirmed",
      "detail": "Copies persistent/reset arena base `0x800EECD0` into live bump cursor `0x80111ECC`; production bootstrap uses this after relocating the arena floor",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800663A8",
      "title": "arena_base_advance",
      "evidence": "Static-confirmed",
      "detail": "Advances/sets the persistent arena base and then resets the live cursor to it; lifecycle/base management rather than a general allocator",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800663E0",
      "title": "arena_hard_reset",
      "evidence": "Static-confirmed",
      "detail": "Restores the arena base to the hardcoded initial floor, then resets the live cursor; fresh stage setup reaches this family",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80066410",
      "title": "arena_next_payload_peek",
      "evidence": "Static-confirmed",
      "detail": "Returns `cursor + 8` without allocating; usable as a checkpoint compatible with `0x80066478` rewind semantics",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80066420",
      "title": "arena_remaining_capacity",
      "evidence": "Static-confirmed",
      "detail": "Computes `(0x80290990 - cursor) >> 3`, i.e. remaining 8-byte units below the bump boundary",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8006643C",
      "title": "arena_bump_alloc",
      "evidence": "Static-confirmed",
      "detail": "Aligns request to 8 bytes, returns `old_cursor + 8`, advances the live cursor, and writes 8-byte allocation bookkeeping at the new cursor. No bounds check is performed internally.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80066478",
      "title": "arena_rewind",
      "evidence": "Static-confirmed",
      "detail": "Sets live cursor to `pointer - 8`; rewinds the arena to the state before the referenced allocation/checkpoint",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8006648C",
      "title": "arena_top_reallocate",
      "evidence": "Static-confirmed",
      "detail": "Rewinds with `0x80066478` and immediately allocates again through `0x8006643C`; no copy is performed",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80071500",
      "title": "enemy_command_interpret",
      "evidence": "Static-confirmed",
      "detail": "Stock ordinary-enemy command interpreter for process 0x70. Reads current stage stream from 0x800C11E4; shared path 0x80071500 -> 0x800719F0 -> 0x80071B20. Boss/scripted encounters remain separate (Enemy-Randomization.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800719F0",
      "title": "enemy_spawn_parameters",
      "evidence": "Static-confirmed",
      "detail": "Native spawn parameter helper accepts stream index/type and proceeds toward shared fighter construction; location-owned stream record supplies coordinates, quota, activation mode (Enemy-Randomization.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80071B20",
      "title": "enemy_fighter_construct",
      "evidence": "Static/runtime-confirmed",
      "detail": "Native fighter constructor uses the four-byte type-indexed resource-pointer-slot table 0x800B14C0. Require correct slot and secondary base-file residency; construction does not establish stage-local terminal/presentation compatibility (Enemy-Randomization.md).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80071FE8",
      "title": "bridge_three_icon_use_check",
      "evidence": "Static-confirmed; four-box correction Runtime-confirmed bounded",
      "detail": "Bridge three-icon native use/completion handler.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007206C",
      "title": "fire_three_icon_use_check",
      "evidence": "Static-confirmed; four-box correction Runtime-confirmed bounded",
      "detail": "Fire three-icon native use/completion handler.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80073588",
      "title": "inventory_open_main",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory owner; suspends/restores gameplay lists around inventory UI.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80073CEC",
      "title": "native_glyph_draw",
      "evidence": "Static-confirmed",
      "detail": "Per non-space glyph: acquires font+4 palette with count 0x100/mode zero through 0x8001C528, then builds nodes through 0x8001E578. Cached hits do not convert/upload; not a universal HUD API.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80073E74",
      "title": "native_text_draw",
      "evidence": "Runtime-confirmed",
      "detail": "Native text drawing routine used by custom HUD text.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80074084",
      "title": "text_width",
      "evidence": "Static/runtime-confirmed",
      "detail": "Computes native font text width.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800741B4",
      "title": "inventory_item_count",
      "evidence": "Static-confirmed",
      "detail": "Counts items in the native ten-slot live inventory.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80074FBC",
      "title": "xp_tier_evaluate",
      "evidence": "Static-confirmed",
      "detail": "Evaluates/clamps XP tier using native threshold table.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800750F0",
      "title": "powerups_strip_build",
      "evidence": "Static-confirmed; bounded runtime order confirmation",
      "detail": "Builds native Power Ups inventory strip from current tier and fixed icon table.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80075320",
      "title": "inventory_find_first",
      "evidence": "Static-confirmed",
      "detail": "Finds first occupied live inventory item.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80075448",
      "title": "inventory_insert",
      "evidence": "Runtime-confirmed",
      "detail": "Inserts item ID into first free slot of ten-slot live inventory.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80078A18",
      "title": "save_restore_xp",
      "evidence": "Static-confirmed",
      "detail": "Restores XP from save record.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80078C40",
      "title": "frontend_title_handoff",
      "evidence": "Static-confirmed",
      "detail": "Called after fade normalization",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80079510",
      "title": "frontend_legal_logo_title",
      "evidence": "Static-confirmed",
      "detail": "Contains two logo presentations",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800798A8",
      "title": "automatic_stage_save",
      "evidence": "Static/runtime-confirmed",
      "detail": "Generic routine remains intact",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007AD00",
      "title": "stock_inventory_sanitizer",
      "evidence": "Runtime-confirmed/replaced",
      "detail": "Production stage-key masking copy replacing stock sanitizer. Clean-ROM implementation; production randomizer replaces it.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007AD4C",
      "title": "stock_default_inventory_loader",
      "evidence": "Runtime-confirmed/replaced",
      "detail": "Production live-to-backing filtered save wrapper. Clean-ROM implementation; production randomizer replaces it.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007EC4C",
      "title": "sound_voice_alloc",
      "evidence": "Static-confirmed",
      "detail": "Consumes resolved runtime sound definition and allocates/starts native audio voices",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80080A88",
      "title": "raw_sound_id_play",
      "evidence": "Static-confirmed",
      "detail": "Selects a 16-byte runtime sound definition by raw ID and dispatches through `0x8007EC4C",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80000A70",
      "title": "scheduler_message_loop",
      "evidence": "Static-confirmed",
      "detail": "Queue 0x802C1970 receives SP=1, DP=2, VI=3, software dispatch=4, pre-NMI=5. Scheduler priority 90; VI event rate one. No causal Inventory attribution.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80000B6C",
      "title": "scheduler_sp_complete",
      "evidence": "Static-confirmed",
      "detail": "SP completion/yield handler distinguishes active audio and yielding graphics; uses osSpTaskYielded at 0x8008A800.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80000C5C",
      "title": "scheduler_dp_complete",
      "evidence": "Static-confirmed",
      "detail": "DP-completion graphics bookkeeping and subsequent dispatch.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80000E24",
      "title": "scheduler_vi_service",
      "evidence": "Static-confirmed",
      "detail": "Promotes fresh audio to queued at 0x80000E3C, attempts dispatch, calls audio_frame_work at 0x80000EF4, publishes next fresh; invokes input callback afterward in configured mode.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80000F4C",
      "title": "scheduler_task_dispatch",
      "evidence": "Static-confirmed",
      "detail": "Audio-first dispatch; defers while active audio pointer exists, transfers queued to active and requests graphics yield when necessary. Single queued slot; replacement under delay is conditional, not observed.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800011F0",
      "title": "rsp_task_submit",
      "evidence": "Static-confirmed",
      "detail": "Writes back cache, calls native task load 0x8008A5A0 and task start 0x8008A7AC.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80015950",
      "title": "vi_input_callback",
      "evidence": "Static-confirmed",
      "detail": "Native VI/input callback increments 0x802E7DC0 at 0x80015998. Captured configuration calls it on scheduler after audio service.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001C64C",
      "title": "palette_handle_release",
      "evidence": "Static-confirmed",
      "detail": "Decrements u16 reference for the original acquired handle; zero calls palette free 0x8001C898. Native glyph draw does not invoke this release.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007D3FC",
      "title": "audio_frame_work",
      "evidence": "Static-confirmed",
      "detail": "Calls builder for current AudioInfo, publishes lastInfo, rotates three output records and alternates two command lists. Prior AI failure does not prevent producer advance.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007D4A8",
      "title": "audio_frame_build",
      "evidence": "Static-confirmed",
      "detail": "Submits previous PCM at 0x8007D4E8 and ignores enqueue return at 0x8007D4F0; head-only AI_LEN feedback sizes next buffer (minimum 352, maximum 704). Trace 5 vs 6 establishes a narrow FIFO phase fork: if the prior tail is still BUSY, a 704-frame submission can read AI_LEN=0 again and sustain extra synthesis/rejections; if FIFO emptied, that same output becomes head and AI_LEN≈2808 leads to 352 frames next. Original upstream phase trigger Pending; no retry approved.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007D860",
      "title": "audio_sample_dma_cleanup",
      "evidence": "Static-confirmed",
      "detail": "Services native sample DMA bookkeeping; advances frame counter 0x800A7F60 at 0x8007D98C.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007DA34",
      "title": "audio_wess_player_callback",
      "evidence": "Static-confirmed",
      "detail": "Calls WESS tick 0x80083D38 and requests another callback after 8333 microseconds, corresponding to 184 player sample frames in inspected configuration.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80083D38",
      "title": "wess_tick_service",
      "evidence": "Static-confirmed",
      "detail": "Advances tick 0x800A8038 and 16.16 ms clock by 0x85555; services native sequence engine when enabled.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8008910C",
      "title": "audio_synthesis_commands",
      "evidence": "Static-confirmed",
      "detail": "Builds native audio command list; advances ALSynth sample clock +0x20 at 0x80089270 before RSP completion or AI acceptance.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8008A3C0",
      "title": "ai_remaining_bytes",
      "evidence": "Static-confirmed",
      "detail": "Reads AI_LEN remaining DMA bytes; emulator backend may deliver host fragments during this existing register read.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8008A500",
      "title": "ai_pcm_enqueue",
      "evidence": "Static-confirmed",
      "detail": "Full predicate 0x80092E90; full returns -1 without AI writes; success writes AI_DRAM/AI_LEN at 0x8008A57C/580. Caller ignores error. Enqueue retry remains untested and rejected for upstream investigation.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80092E90",
      "title": "ai_fifo_full",
      "evidence": "Static-confirmed",
      "detail": "Reads AI_STATUS FIFO-full predicate used by native enqueue.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A600C",
      "title": "g_live_inventory",
      "evidence": "Static-confirmed",
      "detail": "Native ten-slot live inventory window.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A6048",
      "title": "g_inventory_boxes",
      "evidence": "Static-confirmed; Runtime-confirmed bounded",
      "detail": "Authoritative four-box backing storage, 40 words total.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A60E8",
      "title": "g_mkmszr_settings",
      "evidence": "Implementation/CI-confirmed; controls Runtime-confirmed",
      "detail": "MKMSZR native GAME SETTINGS state word used by production control options.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A63FC",
      "title": "g_xp_cap_table",
      "evidence": "Static-confirmed",
      "detail": "Native XP cap/threshold-related table used by tier evaluator.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800B1E20",
      "title": "g_native_font",
      "evidence": "Static/runtime-confirmed",
      "detail": "Native font data used by text renderer/width helper.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BF308",
      "title": "g_special_action_lock",
      "evidence": "Static-confirmed",
      "detail": "Native special-action lock/state used by action lifecycle proofs.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80111C98",
      "title": "g_actor_list_head",
      "evidence": "Static-confirmed",
      "detail": "Active actor-list head used by actor_list_insert.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80111F98",
      "title": "g_ice_mode",
      "evidence": "Static-confirmed",
      "detail": "Native Ice mode used by bounded Ice-Blast-to-pickup proof.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8011200C",
      "title": "g_current_xp",
      "evidence": "Static-confirmed",
      "detail": "Current native XP value.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802C0D54",
      "title": "g_stage_acquired_bits",
      "evidence": "Static-confirmed",
      "detail": "Stage progression/acquired-bit field; exact meanings are stage-context dependent.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802C18F8",
      "title": "g_stage_selector",
      "evidence": "Static-confirmed",
      "detail": "Live stage/checkpoint selector used for spawn/state routing.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802C1AC0",
      "title": "g_player_controller",
      "evidence": "Static-confirmed",
      "detail": "Pointer to player controller/process.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802ECE20",
      "title": "g_current_controller",
      "evidence": "Static-confirmed",
      "detail": "Pointer to current controller/process.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802FCD44",
      "title": "g_retrace_ticks",
      "evidence": "Static-confirmed",
      "detail": "Gameplay retrace/tick counter used by scheduler timing.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A7F60",
      "title": "g_audio_frame_count",
      "evidence": "Static-confirmed",
      "detail": "Native frame counter advanced by sample DMA cleanup.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A7F68",
      "title": "g_audio_command_index",
      "evidence": "Static-confirmed",
      "detail": "Alternating audio command-list index.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A7F6C",
      "title": "g_audio_info_index",
      "evidence": "Static-confirmed",
      "detail": "Three-way AudioInfo producer index.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A7F70",
      "title": "g_audio_last_info",
      "evidence": "Static-confirmed",
      "detail": "Previous output AudioInfo submitted on next service; advances despite rejection.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A8004",
      "title": "g_audio_extra_samples",
      "evidence": "Static-confirmed",
      "detail": "Native synthesis reserve; captured value 320.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A8038",
      "title": "g_wess_tick_count",
      "evidence": "Static-confirmed",
      "detail": "Native WESS callback count; paired states preserve exact sample-clock relation.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A803C",
      "title": "g_wess_milliseconds",
      "evidence": "Static-confirmed",
      "detail": "Integer half of native fixed-point millisecond clock.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A8044",
      "title": "g_wess_millisecond_fraction",
      "evidence": "Static-confirmed",
      "detail": "Fractional WESS clock component; tick increment 0x85555 in 16.16.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A8210",
      "title": "g_audio_synth",
      "evidence": "Static-confirmed",
      "detail": "ALSynth pointer. Signed-low address reconstruction yields 0x800A8210, not 0x800B8210.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009A530",
      "title": "g_audio_work_enabled",
      "evidence": "Static-confirmed",
      "detail": "VI-side gate for native audio_frame_work.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009A534",
      "title": "g_audio_task_fresh",
      "evidence": "Static-confirmed",
      "detail": "Task generated during previous VI service, promoted next VI.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009A538",
      "title": "g_audio_task_queued",
      "evidence": "Static-confirmed",
      "detail": "Single pending audio task pointer; generation replacement under delay is conditional.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009A53C",
      "title": "g_audio_task_active",
      "evidence": "Static-confirmed",
      "detail": "Active audio task ownership; dispatcher defers while nonzero.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BA3E0",
      "title": "g_audio_command_lists",
      "evidence": "Static-confirmed",
      "detail": "Two native audio command-list pointers.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BA3E8",
      "title": "g_audio_info_buffers",
      "evidence": "Static-confirmed",
      "detail": "Three native AudioInfo pointers; snapshot records have stride 0xB50, PCM at +0x50.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BA450",
      "title": "g_audio_min_samples",
      "evidence": "Static-confirmed",
      "detail": "Native frame minimum, captured 352 stereo sample frames.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BA454",
      "title": "g_audio_target_samples",
      "evidence": "Static-confirmed",
      "detail": "Native per-service target, captured 368 stereo sample frames.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BA458",
      "title": "g_audio_max_samples",
      "evidence": "Static-confirmed",
      "detail": "Configured PCM frame capacity, captured 704 sample frames.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BA4D0",
      "title": "g_audio_player_sample_time",
      "evidence": "Static-confirmed",
      "detail": "Player callback sample time; paired snapshots equal WESS ticks times 184.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802C1970",
      "title": "g_scheduler_message_queue",
      "evidence": "Static-confirmed",
      "detail": "OSMesgQueue capacity 32, buffer 0x801AE4C8; no endpoint backlog in paired states.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802E7DC0",
      "title": "g_vi_callback_count",
      "evidence": "Static-confirmed",
      "detail": "Native input/VI callback counter; do not equate endpoint difference with wall time.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Code label",
      "address": "0x80003314",
      "title": "image_dispatch_type5_case",
      "evidence": "Static-confirmed; Ghidra listing-confirmed",
      "detail": "Switch case 5 within the existing image decode dispatcher. Native Type-5 decoder call at 0x8000332C targets 0x80065E00; not a separate function.",
      "source": "analysis/code_labels.tsv"
    },
    {
      "category": "Code label",
      "address": "0x80030974",
      "title": "anim_token_0b_case",
      "evidence": "Static-confirmed; Ghidra listing-confirmed",
      "detail": "Switch arm inside animation_advance 0x800304C0; original ROM jump-table entry 0x800AD478 equals 0x80030974 and dispatch 0x80030584 is jr v0. Not a standalone function.",
      "source": "analysis/code_labels.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80028F3C",
      "title": "MKMSZ/locomotion",
      "evidence": "Static-confirmed",
      "detail": "Main player process; Ghidra auto-analysis may require manually defining function before applying name",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80030974",
      "title": "MKMSZ/animation",
      "evidence": "Static-confirmed; Ghidra listing-confirmed",
      "detail": "Token 0x0B switch arm of 0x800304C0; jump table at 0x800AD478 targets it. Do not create a separate function.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80073588",
      "title": "MKMSZ/inventory",
      "evidence": "Static-confirmed",
      "detail": "Inventory open owner suspends and restores gameplay lists",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8002830C",
      "title": "MKMSZ/lifecycle",
      "evidence": "Static-confirmed",
      "detail": "Controller/process allocator clones inherited context; do not conflate with inventory current-controller ownership",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800393BC",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Ordinary-pickup callback dispatch seam; Loads callback arguments from the destination record: a0 = +0x10 type, a1 = +0x14 parameter with native bit-15 masked, then jalrs the pointer at +0x18. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800393D0",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Ordinary-pickup callback dispatch seam; Loads callback arguments from the destination record: a0 = +0x10 type, a1 = +0x14 parameter with native bit-15 masked, then jalrs the pointer at +0x18. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80060A3C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Ice companion-actor constructor / per-process update; Class-0x100 helper allocates texture/palette, constructs and inserts two visible actors, advances and copies script frames; removes both and releases texture (no palette release in traced cl Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80060D14",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Ice companion-actor constructor / per-process update; Class-0x100 helper allocates texture/palette, constructs and inserts two visible actors, advances and copies script frames; removes both and releases texture (no palette release in traced cl Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800185B8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Deferred image decode and texture upload; Active render/update pass consumes +0xFA, decodes +0x7C, queues slot upload, then frame dispatcher drains queue; 0x80024650 merely links into that active movement/render list Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001D6EC",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Deferred image decode and texture upload; Active render/update pass consumes +0xFA, decodes +0x7C, queues slot upload, then frame dispatcher drains queue; 0x80024650 merely links into that active movement/render list Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001D7F0",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Deferred image decode and texture upload; Active render/update pass consumes +0xFA, decodes +0x7C, queues slot upload, then frame dispatcher drains queue; 0x80024650 merely links into that active movement/render list Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80046F74",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed for PRIS GRUNT2/3/4",
      "detail": "Fighter-file projectile visual constructor; Resolves 0x800A0324[type] to the primary fighter-file base, acquires the palette at the type-specific 0x800A0FC0[type] relative offset, and constructs secondary animation slot 6. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80047160",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed for PRIS GRUNT2/3/4",
      "detail": "Fighter-file projectile visual constructor; Resolves 0x800A0324[type] to the primary fighter-file base, acquires the palette at the type-specific 0x800A0FC0[type] relative offset, and constructs secondary animation slot 6. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80060E68",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Armed-projectile common effect helpers; Permanent-image effect processes used by 0x80043EB0; both acquire the shared source at 0x800B1808, build temporary effect actors, animate, and clean them up. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80061220",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Armed-projectile common effect helpers; Permanent-image effect processes used by 0x80043EB0; both acquire the shared source at 0x800B1808, build temporary effect actors, animate, and clean them up. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80057740",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "GRUNT2-to-GRUNT1 type morph branch; For actor type 0x0F, loads file-0x22 base from slot 0x802E7DC4, writes it to actor +0x98, changes type to 0x0E, and selects animation root 0. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800577BC",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "GRUNT2-to-GRUNT1 type morph branch; For actor type 0x0F, loads file-0x22 base from slot 0x802E7DC4, writes it to actor +0x98, changes type to 0x0E, and selects animation root 0. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80070710",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Ordinary enemy process construction and state reset; The spawn interpreter schedules the 0x71 family through 0x8002830C; 0x80071B20 normalizes classes 0x71..0x74 to **2..5** through addiu -0x6F at 0x80071B64, zero-fills process+0x638 for 0xA0 Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8002B690",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed mechanics; ordinary GRUNT edge Pending",
      "detail": "Shared action exit and conditional reaction animation; 0x8002B690 returns 0x8000 exactly when current process signed halfword +0x6B2 is nonzero, otherwise 0x4000. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800328FC",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed mechanics; ordinary GRUNT edge Pending",
      "detail": "Shared action exit and conditional reaction animation; 0x8002B690 returns 0x8000 exactly when current process signed halfword +0x6B2 is nonzero, otherwise 0x4000. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80053D28",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed mechanics; ordinary GRUNT edge Pending",
      "detail": "Shared action exit and conditional reaction animation; 0x8002B690 returns 0x8000 exactly when current process signed halfword +0x6B2 is nonzero, otherwise 0x4000. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800321D0",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed for selector mechanics and ordinary Water root `0x1E` via Slide; other roots Pending",
      "detail": "Shared hit/reaction action with caller-selected fighter animation; Both load the **sixth** caller stack argument into $s4 (new_sp+0x4C after -0x38, or +0x44 after -0x30) for the root selector; the low halfword of the **fifth** argument feeds the rate at 0x8 Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80032580",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed for selector mechanics and ordinary Water root `0x1E` via Slide; other roots Pending",
      "detail": "Shared hit/reaction action with caller-selected fighter animation; Both load the **sixth** caller stack argument into $s4 (new_sp+0x4C after -0x38, or +0x44 after -0x30) for the root selector; the low halfword of the **fifth** argument feeds the rate at 0x8 Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80016D1C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed for normal Fire",
      "detail": "Ordinary-stage reset and delayed gameplay-enable process; Reset installs type 4, shared light/input defaults, 0x800EEC1C=1, 0x802C1A04=0; class 0x75 delayed callback waits eight ticks, class 0x101 completion and stage count before setting gameplay Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80017024",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed for normal Fire",
      "detail": "Ordinary-stage reset and delayed gameplay-enable process; Reset installs type 4, shared light/input defaults, 0x800EEC1C=1, 0x802C1A04=0; class 0x75 delayed callback waits eight ticks, class 0x101 completion and stage count before setting gameplay Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80016300",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Pause entry gate and native Pause menu; Entry exits when 0x800C255A is nonzero; with process state 0x802ECE18=2 it allocates class 0x400 menu callback 0x80016300, which reads 0x800BF2EE and renders PAUSED. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80014FC0",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Inventory entry gate and native inventory process; Entry requires process state 0x802ECE18=2, semantic input bit 0x0800 **clear** at 0x800BF2EE, nonnegative stage, selector 0x802C18F8>0, live player and HP, and action +0x6AA in 0x302/0x303/0 Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80028EAC",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Class-1 player-controller startup and live dispatch; Constructor 0x8002ECF4 installs 0x80028EAC using signed addiu -0x7154 (not 0x80038EAC). Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80065428",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Normal Fire boss helper and Stage-7 debug helper; Normal helper loads file 0x21 and schedules boss-specific processes (including x-position clamp 0x800653B0 and delayed opponent monitor 0x8003BE94) plus delayed audio 0x800655EC. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80065668",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Normal Fire boss helper and Stage-7 debug helper; Normal helper loads file 0x21 and schedules boss-specific processes (including x-position clamp 0x800653B0 and delayed opponent monitor 0x8003BE94) plus delayed audio 0x800655EC. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800720F0",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Earth per-icon native use handlers; Item-use table IDs 0x11/0x12/0x13 dispatch here. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007213C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Earth per-icon native use handlers; Item-use table IDs 0x11/0x12/0x13 dispatch here. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80072188",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Earth per-icon native use handlers; Item-use table IDs 0x11/0x12/0x13 dispatch here. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800721D4",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Wind per-icon native use handlers; Item-use table IDs 0x0E/0x0F/0x10 dispatch to the Circle / Three-Bars / Triangle handlers. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007226C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Wind per-icon native use handlers; Item-use table IDs 0x0E/0x0F/0x10 dispatch to the Circle / Three-Bars / Triangle handlers. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80072220",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Wind per-icon native use handlers; Item-use table IDs 0x0E/0x0F/0x10 dispatch to the Circle / Three-Bars / Triangle handlers. Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800722B8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Water per-icon native use handlers; Item-use table IDs 0x14/0x15/0x16 dispatch here and test gate bits 1/2/4; on success they OR the matching bit into 0x802C0D54 and call 0x8007EF30(0x801AF414). Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80072304",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Water per-icon native use handlers; Item-use table IDs 0x14/0x15/0x16 dispatch here and test gate bits 1/2/4; on success they OR the matching bit into 0x802C0D54 and call 0x8007EF30(0x801AF414). Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80072350",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Water per-icon native use handlers; Item-use table IDs 0x14/0x15/0x16 dispatch here and test gate bits 1/2/4; on success they OR the matching bit into 0x802C0D54 and call 0x8007EF30(0x801AF414). Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007239C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Fortress crystal native use handlers; Item-use table IDs 0x20/0x21/0x22 dispatch to three player-position-gated handlers which commit crystal progression bits 0x08/0x10/0x20 into 0x802C0D54; the third additionally requires the p Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80072400",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Fortress crystal native use handlers; Item-use table IDs 0x20/0x21/0x22 dispatch to three player-position-gated handlers which commit crystal progression bits 0x08/0x10/0x20 into 0x802C0D54; the third additionally requires the p Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80072464",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Fortress crystal native use handlers; Item-use table IDs 0x20/0x21/0x22 dispatch to three player-position-gated handlers which commit crystal progression bits 0x08/0x10/0x20 into 0x802C0D54; the third additionally requires the p Source: Function-Registry.md. No function boundary claimed.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8000060C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native scheduler setup: creates 0x802C1970 queue (capacity 32; backing 0x801AE4C8). Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000724",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Scheduler pre-NMI OS event registration uses message 5. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000734",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Scheduler SP OS event registration uses message 1. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000744",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Scheduler DP OS event registration uses message 2. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8000075C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "osViSetEvent requests VI message 3 at rate 1; does not establish cause of rich-Inventory tempo drift. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80039418",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed; pickup persistence Runtime-confirmed bounded",
      "detail": "Stock collected-flag store; MKSV ordinary-pickup capture interposes here; manager ordinal resides in s2, record in a1. Source: Persistence-Inventory-and-Lifecycle.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8002EE44",
      "title": "MKMSZ/trace-warning",
      "evidence": "Runtime-confirmed bounded lifecycle v06",
      "detail": "Stock redundant full-HP constructor store overrides living HP restore; production v06 suppresses only this store. Stock ROM remains unchanged. Source: Persistence-Inventory-and-Lifecycle.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80071F58",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; production replacement Runtime-confirmed bounded",
      "detail": "Stock item-0x08 consuming use stub; production SEALED handling redirects use to inert 0x80071F50. Stock ROM retains consuming path. Source: Persistence-Inventory-and-Lifecycle.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80071F50",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stock inert return-zero item-use stub; target of production SEALED placeholder dispatch rewrite. Source: Persistence-Inventory-and-Lifecycle.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007AD34",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stock ten-word LIVE inventory reconstruction/store at 0x8007AD34; production four-box stage-masked loader composes around this route. Source: Persistence-Inventory-and-Lifecycle.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80035CA0",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed; lifecycle v05/v06 Runtime-confirmed bounded",
      "detail": "Stock ordinary-death life decrement precedes 0x80016080 stage reconstruction; distinguish from Continue restore. Source: Stage-Flow-and-Selector.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80035C8C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed; lifecycle v05/v06 Runtime-confirmed bounded",
      "detail": "Accepted Continue reloads configured lives here; distinguish from death decrement and fresh frontend initialization. Source: Stage-Flow-and-Selector.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8000D260",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Frontend fresh-flow resource initialization calls 0x80016B10; not the ordinary-death or Continue life-owner path. Source: Stage-Flow-and-Selector.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8002ED30",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed",
      "detail": "Player class-1 callback address is 0x80028EAC from sign-extended addiu -0x7154, NOT 0x80038EAC. Source: Stage-Flow-and-Selector.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800109E4",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Normal Fire fresh-load path loads stage overlay file 0x9D to 0x802ECE30; Stage-7 debug entry omits this owner path. Source: Stage-Flow-and-Selector.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80011070",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed; Stage-7 RE unresolved",
      "detail": "Stage-7 debug entry omits normal Fire reset/overlay composition; missing startup state beyond overlay load is not fully resolved. Source: Stage-Flow-and-Selector.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001CA88",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; rejected proof v08",
      "detail": "Native draw callee clobbers caller-saved t0; rejected proof helper improperly retained t0 across this call (later t5 carry unsafe). Source: Native-HUD-and-UI.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000E44",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed; overwrite Pending",
      "detail": "Clears fresh audio task 0x8009A534 after promoting it to single queued pointer 0x8009A538 at 0x80000E3C. A replacement of unfinished queued work is not observed in endpoint states. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000EF4",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "VI path calls 0x8007D3FC to build next native audio task when 0x8009A530 enables audio; prior fresh dispatch precedes it. Not a separate VI delivery. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000F24",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Gated indirect VI/input callback through 0x800B43C0 runs AFTER native audio service (enable 0x80000300). Inspected callback target is 0x80015950, not a glyph path. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000F80",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed; ownership Pending",
      "detail": "Audio dispatcher transfers single queued 0x8009A538 into active 0x8009A53C only when active task permits. Earlier overwritten generations or premature PCM/list reuse have not been observed. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80000F88",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed; reuse Pending",
      "detail": "Clears the single queued audio task after active handoff. This alone does not establish overwritten work, delayed-completion safety, or unfinished-list reuse. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007D4E8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed; bounded rejection observed",
      "detail": "Submits PREVIOUS AudioInfo PCM by calling 0x8008A500. A full-FIFO failure returns -1 and the stock caller ignores the result at 0x8007D4F0 while next synthesis continues. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007D55C",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; upstream cause Pending",
      "detail": "Continues synthesis via 0x8008910C after previous PCM enqueue, even if the enqueue failed. Musical time can advance without audible output. AI enqueue retry is NOT an approved upstream correction. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007D98C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stores updated native audio frame counter to 0x800A7F60 in sample-DMA cleanup. Endpoint totals alone cannot locate the first scheduler/consumer timing violation. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8008A550",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Calls 0x80092E90 FIFO-full predicate; a full condition returns -1 without AI register writes. Native rejection is a downstream symptom; original rich Inventory trigger Pending. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8008A57C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Accepted PCM enqueue path writes AI_DRAM here, AI_LEN at 0x8008A580. A synthesized or rejected output is not an accepted AI write. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80089270",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed",
      "detail": "ALSynth sample clock advances at synth +0x20 during command construction, before RSP completion and independently of later AI acceptance. An upstream tempo-trigger remains unproven. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80073688",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory process at 0x80073588 calls 0x80028870 to suspend gameplay process lists, retaining state for Inventory. This is a one-time open/lifetime seam, not per-glyph processing. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80073BC8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory exit calls 0x800288A8 to restore previously detached gameplay process lists. Do not attribute per-frame rendering to this exit seam. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800728B0",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory repeat draw is reached from 0x80073588 while open; stock Inventory loop draws and sleeps one tick through 0x80028794, not via repeated opening/suspension. Source: Production-Rich-Inventory-Music-Initial-Static-Manifest.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800741EC",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stock Inventory row/draw dispatch family reached by 0x800728B0. Production rich rows instead branch through guarded custom hooks; a stock code location is not proof custom wrappers exist in the clean ROM. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80074260",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stock Inventory row loads an item-label pointer using 0x800A633C + item ID*4; incoming a0 is a TEXT POINTER, not an allocation length. Production v14-v19 HUD first-load defect incorrectly passed such pointer into allocator; repaired in v20. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80073124",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; stock/production separation",
      "detail": "Stock call at 0x80073124 targets 0x800742B8. Rich Inventory production REUSES the latter address as a paper/detail trampoline to a custom file-1A payload; the clean ROM is NOT that generated module. Do not infer the production trampoline from retail bytes. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80074F88",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; stock/production separation",
      "detail": "Stock Inventory secondary value/HUD call site. Rich production repoints this call to shared custom trampoline at 0x800742C8; clean ROM has native text dispatch instead. Do not name generated targets as stock functions. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001C81C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native presentation palette-cache MISS allocates a dynamic palette handle here; unlike cached HIT at 0x8001C628, the miss proceeds through conversion and upload/flush. Miss count and timing immediately before audio rejection remain unknown. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001C6D0",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; source span rule",
      "detail": "Palette conversion can process the full requested 0x100 colors for native glyphs in mode 0; 16 visible colors do NOT authorize a 16-color backing descriptor. A cached hit does not convert/upload; no audio culpability shown. Source: Production-Rich-Inventory-Music-Initial-Static-Manifest.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001C898",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; lifetime pending",
      "detail": "Native palette free reached when the original acquired handle's release at 0x8001C64C decrements reference count to zero. A wrapped acquire counter does not invoke this free by itself; release-before-queued-render completion would need proof. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001EBB8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Textured glyph render-node submission path after 0x80073CEC -> 0x8001E578. Per-frame draw work remains even when rich Inventory's mutable content is materialized once. No direct glyph-to-audio scheduler call established. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001EC20",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native graphics builder walks render buckets; kind-2 glyph/textured nodes dispatch through 0x8001ED00. Workload is real but endpoint node counts are partial capture phases and cannot quantify first deadline miss. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001ED00",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Graphics bucket kind-2 textured/glyph dispatch. Rendering does not by itself prove audio scheduling interference; trace timing before blaming palette/glyph work. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80020108",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Graphics pipe-sync command emitter in the native bucket/render-list construction family; correlated with draw processing, not proof of a guest PCM enqueue failure. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001BA84",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; superseded decoder assumption",
      "detail": "Native render-node bank setup forms base 0x800C2950 + bank*0x157C0, 1000 nodes per bank. Previous second-bank-only assumption was incorrect for paired Fortress captures; both used valid first-bank cursors. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80066478",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed; custom cache lifetime Pending",
      "detail": "Stock arena rewind only moves cursor to pointer-8; it does NOT invalidate a custom HUD pointer. Production open-wrapper can clear flags at P+0x1198/+0x119C before checking ownership; stale rewind/refill overlap is a static counterexample, NOT observed in captured Fortress or linked to audio. Source: Production-Rich-Inventory-Music-Initial-Static-Manifest.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001C628",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; negative control",
      "detail": "Palette-cache hit increments u16 references and returns existing handle; wrapping refs does not itself free. Private sources/handles remain stable in paired captures. Do not equate ref wrap with palette damage/audio fault. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001C2B4",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; reused-slot field ownership",
      "detail": "Dynamic slot reuse may accept inactive sufficient-capacity record WITHOUT rewriting +0x08 DRAM source-image width. Stock callers rewrite it. Do not confuse capacity width +0x04 with image width +0x08 or infer custom renderer correctness from reused capacity. Source: Data-Structures-and-Encodings.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80073CEC",
      "title": "MKMSZ/trace-open",
      "evidence": "Static-confirmed; audio causation Pending",
      "detail": "Every non-space glyph reacquires font+4 full 256-color palette and emits a node. Cached HIT does not upload, and current diagnostic states do not identify a causal per-glyph audio disturbance. Distinguish CPU rendering cost from palette miss or stale lifetime. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001C64C",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; pending release ownership",
      "detail": "Release decrements the ORIGINAL acquired palette handle and frees on zero. Native glyph acquisition has no matching release; adding release blindly can free a palette still referenced by queued graphics. Prove consumer lifetime before changing code. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8001E578",
      "title": "MKMSZ/trace-warning",
      "evidence": "Static-confirmed; rejected overgeneralization",
      "detail": "Glyph builder is CONTEXT-SPECIFIC, not a universal always-on gameplay HUD sprite API. Normal gameplay HUD owns 0x8002018C allocation and 0x8001EAE4 submission queue; generic usage needs its own proof. Source: Native-HUD-and-UI.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80028870",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stock gameplay process-list suspend helper invoked by Inventory at 0x80073688. Saves old list head, narrows active process list to Inventory, and preserves links for eventual restore. No per-glyph participation. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800288A8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Stock process-list restoration helper reached from Inventory exit at 0x80073BC8; restores saved process links. This does not imply Inventory reopens every frame. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8002867C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native scheduler publishes CURRENT process/controller to 0x802ECE20 at this instruction. Generic child creation 0x8002830C does not permanently replace the current process pointer. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8002877C",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native scheduler clears current process/controller pointer 0x802ECE20 at process switch/exit. Do not interpret that address as a persistent pickup manager owner. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x8007CAF8",
      "title": "MKMSZ/trace-known",
      "evidence": "Static-confirmed",
      "detail": "Native process context-switch routine used by stock process sleep and main scheduler. Stock 0x80028794 records sleep at controller+0x6DA before yielding. Not an additional OS VI audio callback. Source: Function-Registry.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800A633C",
      "title": "MKMSZ/stock-data-navigation",
      "evidence": "Static-confirmed",
      "detail": "Stock inventory item-ID-to-label pointer table; indexed as 0x800A633C + item*4 by native row draw. This is data, NOT a function; do not replace its contents with a production label table. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800A4410",
      "title": "MKMSZ/stock-data-navigation",
      "evidence": "Static-confirmed",
      "detail": "Retail global file-descriptor table base: ROM 0x000A5010; 12 bytes per file entry. ROM-space provenance distinct from runtime-loaded pointers and production-edited descriptors. Not a function entry. Source: ROM-Overlay-and-Resource-Map.md.",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800B1BAC",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "HUD-RENDER-016: Native Potion presentation descriptor; ROM 0x000B27AC; 16 entries; 0x800B1BAC is global data, not stage-overlay code; source Native-HUD-and-UI.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800B1BD0",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "HUD-RENDER-017: Generic A/crystal pickup presentation descriptor; ROM 0x000B27D0, not generic resource file selector; source Native-HUD-and-UI.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800B1D18",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "HUD-RENDER-018: Generic B/key/icon presentation descriptor; ROM 0x000B2918, 14 entries; preserve item/stage context; source Native-HUD-and-UI.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x800B1D38",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "HUD-RENDER-019: Jar/item presentation descriptor; ROM 0x000B2938; presentation record only; source Native-HUD-and-UI.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x802E82B8",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "RES-009: Stock current-stage resource-file base publication word. Pointer value/allocation is dynamic per stage; no fixed free-space assertion; source ROM-Overlay-and-Resource-Map.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80038BE4",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "RES-012: Pickup-manager interior instruction reads stock record +0x24 stage-local resource selector; do not create function at interior address; source ROM-Overlay-and-Resource-Map.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Bookmark",
      "address": "0x80038BFC",
      "title": "MKMSZ/known-stock-navigation",
      "evidence": "Static-confirmed Wiki; local import Pending",
      "detail": "RES-013: Pickup-manager interior instruction computes current resource-file base + selector*4 entry pointer; no function boundary claimed; source ROM-Overlay-and-Resource-Map.md; no local Ghidra confirmation yet",
      "source": "analysis/bookmarks.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_ItemId",
      "evidence": "Static-confirmed",
      "detail": "Enum · 4 bytes. Native inventory item identifiers (partial)",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_BoxBacking",
      "evidence": "Static-confirmed; Runtime-confirmed bounded",
      "detail": "Structure · 0xA8 bytes. Four ten-word authoritative inventory boxes and settings/magic following at contiguous addresses",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_PickupRecord",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x30 bytes. Stage-Catalogs and Data-Structures-and-Encodings; ordinary 0x30-byte record",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_PersistenceV2",
      "evidence": "Static-confirmed; production lifecycle Runtime-confirmed bounded",
      "detail": "Structure · 0x50 bytes. MKMSZR production state; not vanilla ROM structure",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_EnemySpawnRecord",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x1C bytes. Only common opcodes 0/1/9; opcode 6 uses different 0x20 grammar",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_AuxTriggerRecord",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x3C bytes. Only 0x00..0x18 identified; remaining subtype arguments are context-specific",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_RenderNode",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x58 bytes. Partial field layout from Native UI owner; other bytes deliberately undefined",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_DynamicTextureSlot",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x10 bytes. Native gameplay allocator record; sparse fields",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_Type5ImageHeader",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x0C bytes. Compressed bitstream begins at +0x0C; variable length follows fixed header",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_EnemySpawnConditionalRecord",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x20 bytes. Data-Structures-and-Encodings.md",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_Type5ModelTableHeader",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x04 bytes. Data-Structures-and-Encodings.md",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_SpecialActionDescriptor",
      "evidence": "Static-confirmed",
      "detail": "Structure · 0x2C bytes. Stock special-action descriptor, one Low Kick record at VA0x800B0F68 before 0x800B0F94 sentinel; Player-Actions-and-Special-Moves.md",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Typed data",
      "address": "0x800B0F68",
      "title": "stock_low_kick_special_descriptor",
      "evidence": "Static-confirmed; maintainer-local imported",
      "detail": "MKMSZ_SpecialActionDescriptor: Single 0x2C-byte stock Low Kick descriptor; sentinel at 0x800B0F94 and separate HK table at 0x800B0F98. Guarded importer preserves existing typed data.",
      "source": "analysis/data.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8000D0B8",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Debug stage-select menu — Production A-button title route",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8000322C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Embedded image decompression dispatcher — Ordinary types come from header byte `+3`; exact header `0x05000000` is special-cased to fighter codec type 5. Type 4 dispatches to `0x80003428`; type 5 dispatches through `0x80003314",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80003428",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Type-4 embedded image decoder — Separate control/token streams with a 1024-byte ring buffer; exact decode reproduced Water embedded Potion frames byte-for-byte against Fire external Potion payloads",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80003314",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; Ghidra listing-confirmed",
      "detail": "Switch case 5 inside the image decoder dispatch routine, not an independent function. Ghidra label switchD_80003278::caseD_5; this code calls the native Type-5 decoder at 0x80065E00.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80065E00",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Type-5 fighter-image decoder — Decodes native fighter data in 2-row x 4-pixel blocks from a per-image model/dictionary table; stock Sub-Zero frames use this path",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80015088",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; maintainer Ghidra listing confirmation",
      "detail": "Function-Registry.md: Shared Pause / stage-event dispatcher. Reads 0x800C255A; state 0x802ECE18=2 selects class-0x400 native Pause menu callback 0x80016300; state=0x18 selects class-0x15 stage reconstruction callback 0x80016080. Reconciles previously separate Wiki descriptions of the same address.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C528",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed at known callers",
      "detail": "Function-Registry.md: Presentation resource / palette-selector loader — Pickup manager calls it with record `+0x28` presentation pointer + 4. Separately, animation token-`0x0B` handler `0x80030974` calls it with fixed record `0x800B1A24`, `a1=0x100`, `a2=0`; on success the handler stores `(return - 0x80)` to the newly constructed actor `+0x9E` before insertion. This establishes the straight-Ice projectile's pre-insertion selector bind; broader internal resource semantics remain bounded to the traced callers.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80024650",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Active actor-list insertion helper — Links an already-constructed actor into list head `0x80111C98`, sorting by signed actor `+0x5C` and then actor `+0x30`; writes only list-link field `actor+0x00` / predecessor link. It performs no descriptor, palette, render-record, position, ownership, or allocation initialization. Used by Zap token-`0x0B` and helper actors. This makes list publication a distinct lifecycle seam from actor construction/frame binding.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800281A0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Resource-entry resolver/actor setup wrapper — Receives pointer to one outer-selector entry, loads its file-relative descriptor offset, adds current stage resource base, then calls `0x80028128",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002830C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Generic controller/process allocator/clone — Allocates a controller/process with supplied class/type and callback, links it into the controller list, and inherits current controller actor/animation/context fields; used by projectile bridge `0x8004CBC4",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80028128",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Resource-backed actor constructor helper — Consumes direct descriptor pointer produced by `0x800281A0",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001BF70",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; Runtime-confirmed in v89 composition",
      "detail": "Function-Registry.md: Synchronous fixed texture-slot initializer / uploader — Installs 16-byte slot metadata at `0x802E83F0 + id*0x10`, updates backing pointer table `0x800ED940[id]`, queues pixels through `0x8001D6EC` when source is nonzero, and immediately drains with `0x8001D7F0(1)`. Stock HUD uses it for slots `0x11..0x16`; other traced loader code also uses it directly. Toasty v11 rejects one particular independent slot-`0x17` recipe, not the helper's general synchronous semantics. v89 Runtime-confirms that using it as a disposable pre-publication projectile-slot preparation removes the stale one-frame texture while preserving the correct rocket. The exact proof allocation/storage recipe remains one-shot and is not yet a production lifetime contract.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C2B4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Dynamic texture/screen-image allocator — Searches IDs `0x200..0x2FF`. New allocations round width up to 32 for backing capacity, populate the 16-byte record at `0x802E83F0 + id*0x10`, set `+0x0E = 1`, and publish `0x800ED940[id]`. Reuse may return an inactive capacity-compatible record without refreshing `+0x08`; stock callers therefore rewrite `record+0x08` with the current source-image width after allocation.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001E578",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Context-specific render family — Not a universal gameplay-HUD API",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001F7A8",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Gameplay textured-node renderer — Used by the gameplay HUD queue. Node `+0x4A` is texture-slot ID; node `+0x4C` is palette selector. For the CI8 path the renderer reads slot-record `+0x08` and emits it as the RDP `SetTextureImage` DRAM image width, then loads the node's `+0x10/+0x12 .. +0x20/+0x22` source rectangle through load tile 7 and renders through tile 0. The stock Toasty-hook source node supplies S/T `0,0`, step `1,1`, and point-filter mode. Palette selector resolves through `0x80290A00 + id*8` and `0x802E73E0 + index*4` to a hardware-ready CI8 RGBA5551 TLUT.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001EAE4",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Render-node submit — Gameplay HUD queue; v08 confirms additional textured-node submission, and v09 runtime-confirms texture slot binding through node halfword `+0x4A",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80017F80",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Normal actor integrator reads velocities +0x14/+0x18, shifts >>8, rotates and adds three times integer components into fixed8 world XYZ. MKMSZ host units/cadence differ from MKT donor 16.16 motion. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002018C",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Render-node allocator — Allocates `0x58`-byte node",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80028F3C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Main player locomotion and control. Semantic input controller+0x638 -> 0x800BF2EE; held horizontal direction +0x68C; live direction/facing mismatch +0x704. Locomotion mode +0x6FC can be stale after idle, not live backward intent. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80028610",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Main process scheduler/dispatcher — Runs once per gameplay main-loop iteration on the normal route; decrements controller sleep `+0x6DA` by elapsed retrace count `0x802FCD44 + 1` on the ordinary path, context-switching runnable controllers through `0x8007CAF8`. Main gameplay later waits for `0x802FCD44 >= 2`, yielding the established ~30-Hz ordinary gameplay scheduler cadence.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80028794",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Process sleep/yield — Stores requested sleep at current controller `+0x6DA` and context-switches through `0x8007CAF8`; ordinary Run calls it with `1` before each animation-rate advance.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002FE54",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Fighter animation-table selector — Argument `a0=0` indexes file-relative table 0 at `+0x000`; nonzero `a0` adds `0x104` and indexes table 1. The loaded word is added to actor `+0x98` and stored as the controller's current cursor `+0x6E4`. No bounds check is performed. Because MKMSZ table 0 has 65 entries, table-0 index `0x41+n` aliases table-1 index `n`; stock code intentionally uses this aliasing. Computed reaction indices must be bounded before pruning roots.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002EB38",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Ordinary Run setup — Selects primary animation slot `0x2B` through `0x8002FE54`, installs animation rate `2` through `0x80031724`, then applies facing-aware horizontal velocity. Run loop caller at `0x800296B0` sleeps one process tick and invokes `0x8003174C` once per active iteration.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80031724",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Animation-rate initializer — Stores period argument at controller `+0x6A6`; primes countdown `+0x6A8` to `1` (or `0xFFF` for never-advance). Ordinary Run passes `2`; cadence audit identifies `3` as the donor-equivalent Sektor Run period on the ~30-Hz target scheduler.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003174C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Rate-gated animation advance — Decrements controller `+0x6A8`; when zero, reloads period from `+0x6A6` and advances the current script through `0x800304C0` or `0x800317C8` according to actor flags. Ordinary Run calls it once after each `process_sleep(1)`.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80030178",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Forward locomotion setup — Loads fighter-specific forward movement parameters, sets movement state, and returns selector `1` for primary animation slot `0x01",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80030208",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Backward locomotion setup — Loads fighter-specific backward movement parameters, sets movement state, and returns selector `2` for primary animation slot `0x02",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003188C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Actor facing flip — Toggles actor `+0x8C bit 0x10` and runs native frame/setup helper `0x8001BDA0`; preferred facing primitive over a raw bit write",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003D86C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Native turn-action routine — Selects **secondary table-1 slot `0x03`** (`file 0x87 +0xE84`) and runs the stock turn-action sequence through the current controller; the older primary-`0x03` description was incorrect. Not intrinsically player-only.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004A6E8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Controller face-policy scanner — Scans controller classes `2..5` and returns `0x8000` if any located controller has `+0x6BC & 0x0200`, otherwise `0x4000`; exact higher-level gameplay name/caller remains unresolved",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80031D00",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Find nearest opponent controller — Scans the two opponent controller classes used by the player-facing helpers and returns the nearest X-distance candidate",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80031EF0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Face opponent — Resolves desired side through `0x80031DDC` and calls `0x8003188C` only when actor facing differs",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002B1EC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Player horizontal-velocity helper — Writes actor `+0x14` and `+0x58`; corrected movement primitive",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80016008",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Per-thousand random gate (`randper`) — Generates a native random value, reduces it modulo 1000, and returns `0x8000` when the result is below the unsigned argument, otherwise `0x4000`; v43 Toasty uses argument `0x40` for the supplied-retail normal-background 6.4% gate.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002DF28",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Successful/unblocked victim-reaction transfer seam — Reached only after the normal collision core has separated the blocked branch; immediately prior, stock reads strike-record `+0x08` high byte, resolves `0x800A1190[reaction]`, and places the reaction callback in `a0`. Stock calls `0x8002E078` with victim controller in `a1`; v43 interposes here and preserves that transfer.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002E078",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Victim reaction callback transfer — Installs the already-resolved reaction callback on the victim controller through `0x80032CD4` and marks the victim reacting; used by the narrow Toasty v43 seam.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002E104",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Central XP award — Current XP at `0x8011200C",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002FCDC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Lower fighter allocator indexes type descriptor offsets at 0x800B13D0 and writes type to actor +0x78. Separate slot lookup occurs at 0x80071B20/0x800B14C0 (Enemy-Randomization.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80030974",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Internal animation token `0x0B` switch arm (0x800304C0 owner; 0x800AD478 table target); NOT a standalone function — Drives Zap/resource secondary-actor creation through `0x80034510`; captures the newly constructed actor at `+0x714`, restores the owner to `+0x6E0`, advances the animation cursor, calls `0x8001C528(0x800B1A24,0x100,0)`, stores `(return-0x80)` at actor `+0x9E`, copies `+0x714 -> +0x648`, then inserts the secondary actor with `0x80024650`. This separates constructor descriptor choice from the actor's pre-insertion presentation/palette selector.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80031394",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; unsafe v78 usage Runtime-confirmed",
      "detail": "Function-Registry.md: Actor origin/facing/render-anchor aligner — Copies owner `+0x2C/+0x30` to child; branches on child `+0x64 & 2`, may call `0x8003188C`, otherwise reads child render record `+0x7C` and adjusts X/Y by descriptor geometry. v78 direct use before the rocket descriptor hard-hung; prerequisite actor/descriptor state is unresolved.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80031208",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Facing-aware local-XY to world-position adjustment — On fresh projectile path `+0xDC==0`, consumes signed whole local X/Y, mirrors X for flip bit `0x10`, rotates `(x,y,0)` by actor orientation with unity matrix scale, then adds integer world delta `<<8` to actor `+0x2C/+0x30/+0x34`; stock straight-Ice call `0x8004AFF8` supplies `+0x648`, the same staged actor later transferred from `+0x714",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80032CD4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Installs top-level special callback as scheduler context; observed callback ra may equal its entry. A normal jr ra self-reenters. Preserve lock 0x800BF308, bounded loops and native exit/restore. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80034510",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Animation-stream resource actor creation helper — Consumes the resource entry following token `0x0B`, reaches `0x800281A0 -> 0x80028128`, and participates in staging a secondary actor while preserving the owner actor",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038770",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; Prison checkpoint behavior Runtime-confirmed",
      "detail": "Function-Registry.md: Generic stage key/crystal stock-award callback — Stage-dispatches stock key/crystal award semantics. Prison parameters 0/1 award `0x1A/0x1B`, write selector `7/8`, and participate in the generic presentation path; Prison L1 v08 proves its acquired-bit credential must be preserved while pickup-created presentation/selector state can be suppressed. Fortress stage `9` awards IDs `0x20..0x22` and commits acquired bits while skipping the direct `0x80062D60` presentation request and pickup-created `0x802C18F8` selector writes. Wind records call their overlay wrapper instead; Earth/Water use their own overlay callbacks.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80075448",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Ten-slot LIVE inventory insert primitive — Scans LIVE inventory at `0x800A600C` for the first `-1` slot, writes the supplied item ID, and returns success/failure. No Wind selector/checkpoint side effect was found in this primitive. It is therefore a candidate logical-award primitive, not by itself an accepted production dispatcher.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80002588",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Common stage-data parser / scene-trigger publisher — Parses stage data and publishes the first 60-byte spatial trigger record at `0x801114F4` plus its record count at `0x802F8228`. The exact Wind source-record catalog remains Pending, but the runtime table ownership and stride are statically established.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003BF4C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Stage spawn-coordinate selector/initializer — Reads `0x802C18F8` at `0x8003BF54` / ROM `0x3CB54`, selects a 20-byte stage spawn record through the stage table, and writes actor X/Y/Z plus initial coordinates. Player construction reaches it through `0x8002EC78 -> 0x8002ECF4 -> 0x8002EDFC`; another actor-construction path calls it at `0x8002EF08`, so any proof must guard player scope.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001D520",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Generic sprite-node builder — Consumes an ID-indexed sprite/resource entry, allocates a `0x58` render node through `0x8002018C`, stores the sprite ID at node `+0x4A`, and submits through `0x8001EAE4`. Shared rendering machinery; not a key-only patch seam.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800388FC",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Potion pickup — Adds inventory ID `0x01",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003892C",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Shield pickup — Adds ID `0x06",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003895C",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Eye pickup — Adds ID `0x03",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8003898C",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Formula pickup — Adds ID `0x02",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800389BC",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Herbs pickup — Adds ID `0x04",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800389EC",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Health urn pickup — Adds ID `0x05",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038A1C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Extra-life urn pickup — Ordinary catalog callback",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038A58",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Mana pickup — Native mana, distinct from Herbs despite legacy Lua substitution",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038A90",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Strength urn pickup — Adds ID `0x0B",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038ACC",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Pickup manager and production restore owner; Global-Item-Materialization-and-Solvability.md Wind trace: callback dispatch at 0x800393BC..0x800393D0 passes record type and bit15-masked parameter to record +0x18 callback, without destination ordinal. This is not a new callback signature.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038EF8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; Ice Blast cancel v01 Runtime-confirmed bounded",
      "detail": "Function-Registry.md: Ordinary pickup action-eligibility seam — Stock accepts the ordinary pickup action state `0x303`. The post-1.0 proof additionally normalizes **normal ground Ice Blast only** into that accepted state when controller `+0x6F0 == 0x8004AB84` and native Ice mode `0x80111F98 == 0`, then leaves stock Pickup input/spatial gates authoritative.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80038FA4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; Ice Blast cancel v01 Runtime-confirmed bounded",
      "detail": "Function-Registry.md: Ordinary pickup transition-commit seam — Reached after stock pickup interaction/spatial gates. The proof replays the displaced player-controller load, rechecks normal Ice, clears special-action lock `0x800BF308`, then returns to the stock pickup transition. Proof-only / Post-1.0.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800490CC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Shinnok Amulet pickup — Adds ID `0x23`; outside ordinary tables",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004AA4C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Special-action scheduler context-transfer shim — Dispatch table at `0x800A1050`; not a generic initializer",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004AB84",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Complete ice-projectile action root — Includes special lock behavior",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004AB0C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Ice blue screen-tint process callback — Calls `0x80044964(0x80,0x80,0xC0,0x80,6)` then native process exit `0x80028564`. Separate from companion actor and projectile child processes.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80062D60",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; visible-banner identity unproven",
      "detail": "Function-Registry.md: Timed sprite/effect presentation process — Plays sound `0x3B`, creates presentation state, submits sprite ID `0x398` via `0x8001D520` for ~60 iterations, then releases it. Generic key callback, Strength urn, stage scripts, and overlay code can spawn it. v01/v02 prove the three generic-key spawn sites are not a complete suppression seam. Do not globally patch it; sprite `0x398` has not been visually proven to be the surviving `CHECK POINT` banner.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004B82C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Ice-projectile flight callback — On straight mode zero loads file-`0x87 +0xFD0 = +0xD90` rocket cursor, calls one-time `0x8004CC14`, then v75 injects initial velocity and flight callback; the parent wrapper is bypassed",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004B584",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Parent preflight actor frame/strike check — Makes `+0x714` current and calls stock `0x800304C0`, consuming Ice entry `+0xDC4` before child flight on normal mode zero; restores owner before strike/handoff",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001BDA0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Actor descriptor/render-record binding — Writes `+0x74/+0x7C` descriptor geometry; initialized `+0x8C bit 0x40` path marks `+0xFA` dirty and resolves `+0x68/+0x80` from texture slot `+0x9C` and palette selector `+0x9E`; both relevant zero-preword entries mark dirty even on same-shape binds",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004CBC4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Projectile child class0x700 binds parent staged actor+0x714 to child+0x6E0, copies parent context, clears parent working pointer+0x648. Those pointers serve distinct lifetime roles. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004CC14",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Projectile velocity/animation-rate setup helper — Writes facing-aware projectile actor `+0x14`, then calls `0x80031724` with the supplied rate; suitable as a setup primitive, not player propulsion and not yet established as the generic per-tick acceleration primitive",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004CC50",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Child flight loop latches +0x70C to +0x680; per tick sleeps, advances/checks lifecycle, optionally invokes callback and resolves contact. Does not rewrite actor+0x14 velocity between callbacks; offscreen/lifetime exit calls 0x8004CDF8. (Player-Actions-and-Special-Moves.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004CDF8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Projectile actor/child process exit — Removes actor through `0x80028408/0x80024B00`, then terminates the active projectile process through `0x80028564`; reached on generic flight offscreen/lifetime paths.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004B524",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Ice parent special-action exit — Clears special lock `0x800BF308` and invokes `0x800328FC` on the current owner actor after parent recovery.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004CE6C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Projectile strike-record resolver — Uses projectile fighter type plus supplied selector to resolve the target fighter strike table before dispatch",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8000C6D8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: PRIS armed-grunt ranged aim selector — Shared permanent-code AI action for types `0x15/0x16/0x17`; bounds horizontal separation to 450, derives target slope, and installs one of the common aim callbacks that enter `0x80043B18`. Types `0x16/0x17` use this action exclusively across all four traced distance bands; `0x15` mixes it with two common-code alternatives in the two nearer bands.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80043B18",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Armed-grunt ranged action / projectile process setup — Indexes a `0x28`-byte shot-parameter record by `type-0x15`, advances the parent attack animation, allocates class `0x806` with callback `0x80043EB0`, copies shot fields, and continues parent recovery.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80043EB0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Armed-grunt projectile flight/effect process — Owns type-specific SFX/offsets, starts common helpers `0x80060E68/0x80061220`, constructs the visible shot through `0x80047160`, applies velocity/aim fields, and loops through `0x8004CF3C` collision until impact/range exit.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8004CF3C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Armed-grunt projectile strike dispatch — Uses projectile actor type to resolve `0x800AF340[type]`, indexes the supplied shot selector, and calls `0x8002BA04`. PRIS projectile records select reactions `0x30/0x31/0x32` for types `0x15/0x16/0x17` respectively.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80057478",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for GRUNT2 and PRIS armed family",
      "detail": "Function-Registry.md: Fighter-family morph/disarm helper — Existing `0x0F -> 0x0E` morph remains valid. For `0x15/0x16/0x17`, rebinds the fighter to base file `0x8E`, changes type to `0x14`, selects the base animation, and starts detached-weapon process `0x8005E1FC` using the armed variant's original primary file.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8005E1FC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for PRIS armed family",
      "detail": "Function-Registry.md: Detached fighter-weapon presenter — Acquires the palette from the supplied primary-file-relative record, constructs the primary file's secondary slot 0, positions it at the owner, runs the detached-object animation/physics, then removes/releases it. Decoded `0x8F` slot-0 art is the long staff; `0x90` is the large cannon/launcher; `0x91` is a distinct Bridge weapon.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80053DA8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for Water stage ID `2",
      "detail": "Function-Registry.md: Ordinary fighter shared terminal presentation — Binds current stage resource base `0x802E82B8` to actor `+0x98`, resolves selector word `+0x28` (selector `10`) into the animation cursor, advances six frames, then decrements encounter count and releases/despawns. Dispatcher `0x80056F80..0x80057060` reaches this for Water MONK5/MONK6 and imported GRUNT2; Water cross-stage GRUNT2 runtime remains untested.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80053E8C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for GRUNT1 and PRIS armed/base terminal routing",
      "detail": "Function-Registry.md: Fighter-file terminal presentation/cleanup — Type `0x0E` reads file-`0x22 +0x2555C` and root `0x32` before cleanup. Types `0x15/0x16/0x17` reach this function but, while still armed, take its direct cleanup/despawn branch rather than a stage-selector presentation. If first disarmed by `0x80057478`, they become type `0x14`; the `0x14` path uses file-`0x8E` palette `+0x1FB84` and root `0x32` at `+0x134`, a six-frame file-internal list, before encounter-count decrement/release. This closes selector-10 as unnecessary for the normal PRIS armed-family terminal route; it does not generalize every other type branch.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002E978",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; complete GRUNT action closure Pending",
      "detail": "Function-Registry.md: Type-specific combat-record selector — Selects a type-specific pointer at `0x800AF340 + type*4` and indexes its four-byte records with the **sixth** caller stack argument loaded into `$s5` (`new_sp+0x46` low halfword after `-0x30`) before `0x8002BA04`. `$a3` is separately saved in `$s0` for animation selection. GRUNT1's table pointer is `0x800B0430`, GRUNT2's `0x800B0508`. The controller-only `0xE/0xF` sites at `0x8004D2C4/0x8004D420` do not establish ordinary-grunt reachability.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8005BFB0",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed for normal production; Stage-7 scheduling Static-confirmed",
      "detail": "Function-Registry.md: Gameplay HUD function — Contains 13 submit calls. Both normal Fire and Stage 7 schedule it as class `0x15`; its frame loop reads player controller/health and checks a vertical position before render-node submissions. Stage-7 render visibility is not Runtime-confirmed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800615D8",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Frontend fade/normalization — Preserved after logo bypass with argument `0x80",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8006352C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Auxiliary trigger-record spawner — Hardcodes fighter type `7",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80064C18",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Native gameplay SFX wrapper — Indexes 10-byte descriptor table at `0x800A1730`; resolves raw sound ID and variation parameters, then calls `0x80080A88",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80080A88",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Raw sound-ID playback entry — Selects a 16-byte runtime sound definition by raw ID and dispatches through `0x8007EC4C",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007EC4C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Low-level sound-definition/voice allocator — Consumes resolved runtime sound definition and allocates/starts native audio voices",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80065D64",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Raw global-file loader — Used by native bootstrap",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80066360",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Cold arena initializer — Initializes both arena base/floor `0x800EECD0` and live bump cursor `0x80111ECC` to the stock hardcoded arena start, with initial boundary bookkeeping",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80066390",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Arena cursor reset — Copies persistent/reset arena base `0x800EECD0` into live bump cursor `0x80111ECC`; production bootstrap uses this after relocating the arena floor",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800663A8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Arena base advance/set helper — Advances/sets the persistent arena base and then resets the live cursor to it; lifecycle/base management rather than a general allocator",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800663E0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Arena hard-reset helper — Restores the arena base to the hardcoded initial floor, then resets the live cursor; fresh stage setup reaches this family",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80066410",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Arena next-payload peek — Returns `cursor + 8` without allocating; usable as a checkpoint compatible with `0x80066478` rewind semantics",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80066420",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Arena remaining-capacity query — Computes `(0x80290990 - cursor) >> 3`, i.e. remaining 8-byte units below the bump boundary",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8006643C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Main arena bump allocator — Aligns request to 8 bytes, returns `old_cursor + 8`, advances the live cursor, and writes 8-byte allocation bookkeeping at the new cursor. No bounds check is performed internally.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80066478",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Arena rewind helper — Sets live cursor to `pointer - 8`; rewinds the arena to the state before the referenced allocation/checkpoint",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8006648C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Top-allocation rewind/reallocate helper — Rewinds with `0x80066478` and immediately allocates again through `0x8006643C`; no copy is performed",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80073588",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; in-Inventory box-switch composition Runtime-confirmed bounded",
      "detail": "Function-Registry.md: Native Inventory process / input loop — Owns Inventory lifetime, Items/Power-Ups mode, Use/Combine/R/close dispatch, native frame selection locals, and the loop seam at `0x80073724`. Production box switching stays inside this process and must not rerun suspend/restore/termination.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800741B4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; exercised by Runtime-confirmed switch path",
      "detail": "Function-Registry.md: Native ten-slot LIVE Inventory count — Counts non-`0xFFFFFFFF` words in the active LIVE window; production menu switching reuses it after masked reconstruction.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80075320",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; exercised by Runtime-confirmed switch path",
      "detail": "Function-Registry.md: Native first-occupied Inventory-slot finder — Given a physical-slot pointer, selects the first occupied LIVE slot. Production menu switching calls it only when count is positive and resets visible row to zero.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80071500",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Stock ordinary-enemy command interpreter for process 0x70. Reads current stage stream from 0x800C11E4; shared path 0x80071500 -> 0x800719F0 -> 0x80071B20. Boss/scripted encounters remain separate (Enemy-Randomization.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800719F0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md; Native spawn parameter helper accepts stream index/type and proceeds toward shared fighter construction; location-owned stream record supplies coordinates, quota, activation mode (Enemy-Randomization.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80071B20",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md; Native fighter constructor uses the four-byte type-indexed resource-pointer-slot table 0x800B14C0. Require correct slot and secondary base-file residency; construction does not establish stage-local terminal/presentation compatibility (Enemy-Randomization.md).",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80071FE8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; four-box ownership correction Runtime-confirmed bounded",
      "detail": "Function-Registry.md: Bridge three-icon native use/completion check — Item-use table ROM `0xA6E68` maps IDs `0x1D..0x1F` here. Stock first requires `(0x800C2406 & 7) == 7`, then scans the ten-slot LIVE inventory for all three Bridge IDs; if all three are present, sets `0x802C0D54 = 7` and calls `0x8007EF30(0x801AF414)`. The four-box correction preserves the native gate/completion path and changes only the ownership scan base/count to the contiguous 40-word authoritative backing region `0x800A6048..0x800A60E7`. v03 Runtime-confirms positive and negative cross-box ownership behavior with manual box switching; its proof-only physical-gate bypass does not reclassify the unchanged native use-site gate. Independent of Bridge pickup callback `0x802EF178`, which is award-only.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007206C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; four-box ownership correction Runtime-confirmed bounded",
      "detail": "Function-Registry.md: Fire three-icon native use/completion check — Item-use table ROM `0xA6E68` maps IDs `0x17..0x19` here. Stock first requires the same low-three-bit use-site gate as Bridge, then scans the ten-slot LIVE inventory for all three Fire IDs; when all three are present it calls `0x8007EF30(0x801AF414)` and sets `0x802C0D54 = 7`. The four-box correction preserves the native gate/completion path and changes only the ownership scan base/count to the contiguous 40-word authoritative backing region `0x800A6048..0x800A60E7`. v03 Runtime-confirms positive and negative cross-box ownership behavior with manual box switching; its proof-only physical-gate bypass does not reclassify the unchanged native use-site gate. This remains separate from pickup callback `0x802F0EBC`.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80073CEC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native glyph draw: source font+4 palette acquire (256 colors, mode zero), render-node builder 0x8001E578. No direct audio scheduling call; per-frame workload is real but causal link Pending.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80073E74",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed",
      "detail": "Function-Registry.md: Native text draw — Arbitrary custom RDRAM strings work",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80074084",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Text-width helper — Native font at `0x800B1E20",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800750F0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; first-two order Runtime-confirmed in power-order v02",
      "detail": "Function-Registry.md: Native Power Ups strip builder — Evaluates current power tier, stores the tier state used by the inventory UI, and renders the first N entries from the fixed power-icon table at `0x800A5FB0`. v02 confirms presentation order is independent from gameplay eligibility unless the table is reordered with the gates.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80074FBC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: XP tier evaluator/clamp — Uses cap table `0x800A63FC",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80078A18",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Save loader XP restore — XP in save record `+0x7C",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80078C40",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Title handoff after frontend flow — Called after fade normalization",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80079510",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Function-Registry.md: Owning legal/logo/title routine — Contains two logo presentations",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800798A8",
      "title": "repeatable comment",
      "evidence": "Static/runtime-confirmed",
      "detail": "Function-Registry.md: Automatic stage-save flow — Generic routine remains intact",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007AD00",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed/replaced",
      "detail": "Function-Registry.md: Stock inventory sanitizer — Production replaces with stage-key mask copy",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007AD4C",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed/replaced; ownership corrected statically",
      "detail": "Function-Registry.md: Stock default-inventory loader; production filtered SAVE wrapper — Current production computes active backing pointer and tail-calls `0xA01AF5F4`: LIVE -> backing, skipping Glass. It does not reconstruct LIVE. Reconstruction is `0x80099B14 -> 0x8007AD00`.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035578",
      "title": "repeatable comment",
      "evidence": "Static-confirmed: remaining-life branch bypasses configured reload; stock decrement store `0x80035CA0`; accepted Continue reload `0x80035C8C",
      "detail": "Function-Registry.md: Life/Continue/terminal presentation owner —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80016080",
      "title": "repeatable comment",
      "evidence": "Static-confirmed: class teardown, stage dispatch, stage-specific resource/player reconstruction; not a life reload owner",
      "detail": "Function-Registry.md: Stage callback reconstruction dispatcher —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80016B10",
      "title": "repeatable comment",
      "evidence": "Static-confirmed: configured continues/lives -> current at `0x80016BC0/8`, lives minus one; called from `0x8000D260",
      "detail": "Function-Registry.md: Frontend/fresh-flow current-resource initialization —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035D34",
      "title": "repeatable comment",
      "evidence": "Static-confirmed: states `0x16/0x1B` preserve carrier-valid; other paths decrement at `0x80035F04` or enter life/Continue owner",
      "detail": "Function-Registry.md: Alternate failure or valid-preserving reconstruction —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035F38",
      "title": "repeatable comment",
      "evidence": "Static-confirmed consumer flow; callback references indirect; stock HP-carrier producer not closed",
      "detail": "Function-Registry.md: Valid-preserving reconstruction owner —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035FC0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed: capture candidate before teardown and live-pointer clear, not after",
      "detail": "Function-Registry.md: Stage completion teardown/next-stage owner —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035BB4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed common terminal label; final reset additionally requires zero current lives, signed continues <= 0 and a latched real-run failure context",
      "detail": "Function-Registry.md: Resolved terminal-choice yield before title dispatch —",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000A70",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Queue 0x802C1970 receives SP=1, DP=2, VI=3, software dispatch=4, pre-NMI=5. Scheduler priority 90; VI event rate one. No causal Inventory attribution.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000B6C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: SP completion/yield handler distinguishes active audio and yielding graphics; uses osSpTaskYielded at 0x8008A800.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000C5C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: DP-completion graphics bookkeeping and subsequent dispatch.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000E24",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Promotes fresh audio to queued at 0x80000E3C, attempts dispatch, calls audio_frame_work at 0x80000EF4, publishes next fresh; invokes input callback afterward in configured mode.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000F4C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Audio-first dispatch; defers while active audio pointer exists, transfers queued to active and requests graphics yield when necessary. Single queued slot; replacement under delay is conditional, not observed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800011F0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Writes back cache, calls native task load 0x8008A5A0 and task start 0x8008A7AC.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80015950",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Native VI/input callback increments 0x802E7DC0 at 0x80015998. Captured configuration calls it on scheduler after audio service.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C64C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Decrements u16 reference for the original acquired handle; zero calls palette free 0x8001C898. Native glyph draw does not invoke this release.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D3FC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Calls builder for current AudioInfo, publishes lastInfo, rotates three output records and alternates two command lists. Prior AI failure does not prevent producer advance.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D4A8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Submits previous PCM at 0x8007D4E8, ignores return at 0x8007D4F0, reads head AI_LEN, calculates new samples and constructs synthesis commands. Recurrent failures measured; upstream trigger Pending.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D860",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Services native sample DMA bookkeeping; advances frame counter 0x800A7F60 at 0x8007D98C.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007DA34",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Calls WESS tick 0x80083D38 and requests another callback after 8333 microseconds, corresponding to 184 player sample frames in inspected configuration.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80083D38",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Advances tick 0x800A8038 and 16.16 ms clock by 0x85555; services native sequence engine when enabled.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8008910C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Builds native audio command list; advances ALSynth sample clock +0x20 at 0x80089270 before RSP completion or AI acceptance.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8008A3C0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Reads AI_LEN remaining DMA bytes; emulator backend may deliver host fragments during this existing register read.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8008A500",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Full predicate 0x80092E90; full returns -1 without AI writes; success writes AI_DRAM/AI_LEN at 0x8008A57C/580. Caller ignores error. Enqueue retry remains untested and rejected for upstream investigation.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80092E90",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Production-Rich-Inventory-Music-Static-Investigation.md: Reads AI_STATUS FIFO-full predicate used by native enqueue.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D4F0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Prior AI enqueue result is ignored. Existing diagnostic pair proves recurrent rejection; upstream Inventory trigger and full audible accounting remain Pending.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000E3C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Promotes fresh into single queued slot without a separate backlog queue. Replacement requires a prior queued generation to survive; not demonstrated by endpoint states.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001BA80",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native node base 0x800C2950 plus selected bank times 0x157C0; older audit hardcoded second bank 0x800D8110. Both paired captures use first bank; their cursors are consistent.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C628",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Cache hit increments u16 refs; wrapping acquire does not itself call free. Same dynamic sources/handles in both new captures. Do not infer audio causation from reference totals.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800393BC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Ordinary-pickup callback dispatch seam. Loads callback arguments from the destination record: a0 = +0x10 type, a1 = +0x14 parameter with native bit-15 masked, then jalrs the pointer at +0x18. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800393D0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Ordinary-pickup callback dispatch seam. Loads callback arguments from the destination record: a0 = +0x10 type, a1 = +0x14 parameter with native bit-15 masked, then jalrs the pointer at +0x18. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80060A3C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Ice companion-actor constructor / per-process update. Class-0x100 helper allocates texture/palette, constructs and inserts two visible actors, advances and copies script frames; removes both and releases texture (no palette release in traced cl [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80060D14",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Ice companion-actor constructor / per-process update. Class-0x100 helper allocates texture/palette, constructs and inserts two visible actors, advances and copies script frames; removes both and releases texture (no palette release in traced cl [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800185B8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Deferred image decode and texture upload. Active render/update pass consumes +0xFA, decodes +0x7C, queues slot upload, then frame dispatcher drains queue; 0x80024650 merely links into that active movement/render list [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001D6EC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Deferred image decode and texture upload. Active render/update pass consumes +0xFA, decodes +0x7C, queues slot upload, then frame dispatcher drains queue; 0x80024650 merely links into that active movement/render list [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001D7F0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Deferred image decode and texture upload. Active render/update pass consumes +0xFA, decodes +0x7C, queues slot upload, then frame dispatcher drains queue; 0x80024650 merely links into that active movement/render list [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80046F74",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for PRIS GRUNT2/3/4",
      "detail": "Wiki Function-Registry: Fighter-file projectile visual constructor. Resolves 0x800A0324[type] to the primary fighter-file base, acquires the palette at the type-specific 0x800A0FC0[type] relative offset, and constructs secondary animation slot 6. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80047160",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for PRIS GRUNT2/3/4",
      "detail": "Wiki Function-Registry: Fighter-file projectile visual constructor. Resolves 0x800A0324[type] to the primary fighter-file base, acquires the palette at the type-specific 0x800A0FC0[type] relative offset, and constructs secondary animation slot 6. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80060E68",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Armed-projectile common effect helpers. Permanent-image effect processes used by 0x80043EB0; both acquire the shared source at 0x800B1808, build temporary effect actors, animate, and clean them up. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80061220",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Armed-projectile common effect helpers. Permanent-image effect processes used by 0x80043EB0; both acquire the shared source at 0x800B1808, build temporary effect actors, animate, and clean them up. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80057740",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: GRUNT2-to-GRUNT1 type morph branch. For actor type 0x0F, loads file-0x22 base from slot 0x802E7DC4, writes it to actor +0x98, changes type to 0x0E, and selects animation root 0. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800577BC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: GRUNT2-to-GRUNT1 type morph branch. For actor type 0x0F, loads file-0x22 base from slot 0x802E7DC4, writes it to actor +0x98, changes type to 0x0E, and selects animation root 0. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80070710",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Ordinary enemy process construction and state reset. The spawn interpreter schedules the 0x71 family through 0x8002830C; 0x80071B20 normalizes classes 0x71..0x74 to **2..5** through addiu -0x6F at 0x80071B64, zero-fills process+0x638 for 0xA0 [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002B690",
      "title": "repeatable comment",
      "evidence": "Static-confirmed mechanics; ordinary GRUNT edge Pending",
      "detail": "Wiki Function-Registry: Shared action exit and conditional reaction animation. 0x8002B690 returns 0x8000 exactly when current process signed halfword +0x6B2 is nonzero, otherwise 0x4000. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800328FC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed mechanics; ordinary GRUNT edge Pending",
      "detail": "Wiki Function-Registry: Shared action exit and conditional reaction animation. 0x8002B690 returns 0x8000 exactly when current process signed halfword +0x6B2 is nonzero, otherwise 0x4000. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80053D28",
      "title": "repeatable comment",
      "evidence": "Static-confirmed mechanics; ordinary GRUNT edge Pending",
      "detail": "Wiki Function-Registry: Shared action exit and conditional reaction animation. 0x8002B690 returns 0x8000 exactly when current process signed halfword +0x6B2 is nonzero, otherwise 0x4000. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800321D0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for selector mechanics and ordinary Water root `0x1E` via Slide; other roots Pending",
      "detail": "Wiki Function-Registry: Shared hit/reaction action with caller-selected fighter animation. Both load the **sixth** caller stack argument into $s4 (new_sp+0x4C after -0x38, or +0x44 after -0x30) for the root selector; the low halfword of the **fifth** argument feeds the rate at 0x8 [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80032580",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for selector mechanics and ordinary Water root `0x1E` via Slide; other roots Pending",
      "detail": "Wiki Function-Registry: Shared hit/reaction action with caller-selected fighter animation. Both load the **sixth** caller stack argument into $s4 (new_sp+0x4C after -0x38, or +0x44 after -0x30) for the root selector; the low halfword of the **fifth** argument feeds the rate at 0x8 [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80016D1C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for normal Fire",
      "detail": "Wiki Function-Registry: Ordinary-stage reset and delayed gameplay-enable process. Reset installs type 4, shared light/input defaults, 0x800EEC1C=1, 0x802C1A04=0; class 0x75 delayed callback waits eight ticks, class 0x101 completion and stage count before setting gameplay [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80017024",
      "title": "repeatable comment",
      "evidence": "Static-confirmed for normal Fire",
      "detail": "Wiki Function-Registry: Ordinary-stage reset and delayed gameplay-enable process. Reset installs type 4, shared light/input defaults, 0x800EEC1C=1, 0x802C1A04=0; class 0x75 delayed callback waits eight ticks, class 0x101 completion and stage count before setting gameplay [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80016300",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Pause entry gate and native Pause menu. Entry exits when 0x800C255A is nonzero; with process state 0x802ECE18=2 it allocates class 0x400 menu callback 0x80016300, which reads 0x800BF2EE and renders PAUSED. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80014FC0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Inventory entry gate and native inventory process. Entry requires process state 0x802ECE18=2, semantic input bit 0x0800 **clear** at 0x800BF2EE, nonnegative stage, selector 0x802C18F8>0, live player and HP, and action +0x6AA in 0x302/0x303/0 [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80028EAC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Class-1 player-controller startup and live dispatch. Constructor 0x8002ECF4 installs 0x80028EAC using signed addiu -0x7154 (not 0x80038EAC). [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80065428",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Normal Fire boss helper and Stage-7 debug helper. Normal helper loads file 0x21 and schedules boss-specific processes (including x-position clamp 0x800653B0 and delayed opponent monitor 0x8003BE94) plus delayed audio 0x800655EC. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80065668",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Normal Fire boss helper and Stage-7 debug helper. Normal helper loads file 0x21 and schedules boss-specific processes (including x-position clamp 0x800653B0 and delayed opponent monitor 0x8003BE94) plus delayed audio 0x800655EC. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800720F0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Earth per-icon native use handlers. Item-use table IDs 0x11/0x12/0x13 dispatch here. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007213C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Earth per-icon native use handlers. Item-use table IDs 0x11/0x12/0x13 dispatch here. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80072188",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Earth per-icon native use handlers. Item-use table IDs 0x11/0x12/0x13 dispatch here. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800721D4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Wind per-icon native use handlers. Item-use table IDs 0x0E/0x0F/0x10 dispatch to the Circle / Three-Bars / Triangle handlers. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007226C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Wind per-icon native use handlers. Item-use table IDs 0x0E/0x0F/0x10 dispatch to the Circle / Three-Bars / Triangle handlers. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80072220",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Wind per-icon native use handlers. Item-use table IDs 0x0E/0x0F/0x10 dispatch to the Circle / Three-Bars / Triangle handlers. [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800722B8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Water per-icon native use handlers. Item-use table IDs 0x14/0x15/0x16 dispatch here and test gate bits 1/2/4; on success they OR the matching bit into 0x802C0D54 and call 0x8007EF30(0x801AF414). [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80072304",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Water per-icon native use handlers. Item-use table IDs 0x14/0x15/0x16 dispatch here and test gate bits 1/2/4; on success they OR the matching bit into 0x802C0D54 and call 0x8007EF30(0x801AF414). [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80072350",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Water per-icon native use handlers. Item-use table IDs 0x14/0x15/0x16 dispatch here and test gate bits 1/2/4; on success they OR the matching bit into 0x802C0D54 and call 0x8007EF30(0x801AF414). [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007239C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Fortress crystal native use handlers. Item-use table IDs 0x20/0x21/0x22 dispatch to three player-position-gated handlers which commit crystal progression bits 0x08/0x10/0x20 into 0x802C0D54; the third additionally requires the p [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80072400",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Fortress crystal native use handlers. Item-use table IDs 0x20/0x21/0x22 dispatch to three player-position-gated handlers which commit crystal progression bits 0x08/0x10/0x20 into 0x802C0D54; the third additionally requires the p [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80072464",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Wiki Function-Registry: Fortress crystal native use handlers. Item-use table IDs 0x20/0x21/0x22 dispatch to three player-position-gated handlers which commit crystal progression bits 0x08/0x10/0x20 into 0x802C0D54; the third additionally requires the p [Trace-only marker; function boundary NOT inferred.]",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8000060C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native scheduler setup: creates 0x802C1970 queue (capacity 32; backing 0x801AE4C8). Source: Production-Rich-Inventory-Music-Static-Investigation.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000724",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Scheduler pre-NMI OS event registration uses message 5. Source: Production-Rich-Inventory-Music-Static-Investigation.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000734",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Scheduler SP OS event registration uses message 1. Source: Production-Rich-Inventory-Music-Static-Investigation.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000744",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Scheduler DP OS event registration uses message 2. Source: Production-Rich-Inventory-Music-Static-Investigation.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8000075C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "osViSetEvent requests VI message 3 at rate 1; does not establish cause of rich-Inventory tempo drift. Source: Production-Rich-Inventory-Music-Static-Investigation.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80039418",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; pickup persistence Runtime-confirmed bounded",
      "detail": "Stock collected-flag store; MKSV ordinary-pickup capture interposes here; manager ordinal resides in s2, record in a1. Source: Persistence-Inventory-and-Lifecycle.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002EE44",
      "title": "repeatable comment",
      "evidence": "Runtime-confirmed bounded lifecycle v06",
      "detail": "Stock redundant full-HP constructor store overrides living HP restore; production v06 suppresses only this store. Stock ROM remains unchanged. Source: Persistence-Inventory-and-Lifecycle.md. WARNING: keep stock vs production distinction.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80071F58",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; production replacement Runtime-confirmed bounded",
      "detail": "Stock item-0x08 consuming use stub; production SEALED handling redirects use to inert 0x80071F50. Stock ROM retains consuming path. Source: Persistence-Inventory-and-Lifecycle.md. WARNING: keep stock vs production distinction.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80071F50",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stock inert return-zero item-use stub; target of production SEALED placeholder dispatch rewrite. Source: Persistence-Inventory-and-Lifecycle.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007AD34",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stock ten-word LIVE inventory reconstruction/store at 0x8007AD34; production four-box stage-masked loader composes around this route. Source: Persistence-Inventory-and-Lifecycle.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035CA0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; lifecycle v05/v06 Runtime-confirmed bounded",
      "detail": "Stock ordinary-death life decrement precedes 0x80016080 stage reconstruction; distinguish from Continue restore. Source: Stage-Flow-and-Selector.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80035C8C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; lifecycle v05/v06 Runtime-confirmed bounded",
      "detail": "Accepted Continue reloads configured lives here; distinguish from death decrement and fresh frontend initialization. Source: Stage-Flow-and-Selector.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8000D260",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Frontend fresh-flow resource initialization calls 0x80016B10; not the ordinary-death or Continue life-owner path. Source: Stage-Flow-and-Selector.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002ED30",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Player class-1 callback address is 0x80028EAC from sign-extended addiu -0x7154, NOT 0x80038EAC. Source: Stage-Flow-and-Selector.md. WARNING: keep stock vs production distinction.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800109E4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Normal Fire fresh-load path loads stage overlay file 0x9D to 0x802ECE30; Stage-7 debug entry omits this owner path. Source: Stage-Flow-and-Selector.md. Trace site; no new function boundary claimed.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80011070",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; Stage-7 RE unresolved",
      "detail": "Stage-7 debug entry omits normal Fire reset/overlay composition; missing startup state beyond overlay load is not fully resolved. Source: Stage-Flow-and-Selector.md. OPEN: do not infer remaining composition.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001CA88",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; rejected proof v08",
      "detail": "Native draw callee clobbers caller-saved t0; rejected proof helper improperly retained t0 across this call (later t5 carry unsafe). Source: Native-HUD-and-UI.md. WARNING: keep stock vs production distinction.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000E44",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; overwrite Pending",
      "detail": "Clears fresh audio task 0x8009A534 after promoting it to single queued pointer 0x8009A538 at 0x80000E3C. A replacement of unfinished queued work is not observed in endpoint states. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000EF4",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "VI path calls 0x8007D3FC to build next native audio task when 0x8009A530 enables audio; prior fresh dispatch precedes it. Not a separate VI delivery. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000F24",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Gated indirect VI/input callback through 0x800B43C0 runs AFTER native audio service (enable 0x80000300). Inspected callback target is 0x80015950, not a glyph path. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000F80",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; ownership Pending",
      "detail": "Audio dispatcher transfers single queued 0x8009A538 into active 0x8009A53C only when active task permits. Earlier overwritten generations or premature PCM/list reuse have not been observed. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80000F88",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; reuse Pending",
      "detail": "Clears the single queued audio task after active handoff. This alone does not establish overwritten work, delayed-completion safety, or unfinished-list reuse. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D4E8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; bounded rejection observed",
      "detail": "Submits PREVIOUS AudioInfo PCM by calling 0x8008A500. A full-FIFO failure returns -1 and the stock caller ignores the result at 0x8007D4F0 while next synthesis continues. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D55C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; upstream cause Pending",
      "detail": "Continues synthesis via 0x8008910C after previous PCM enqueue, even if the enqueue failed. Musical time can advance without audible output. AI enqueue retry is NOT an approved upstream correction. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007D98C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stores updated native audio frame counter to 0x800A7F60 in sample-DMA cleanup. Endpoint totals alone cannot locate the first scheduler/consumer timing violation. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8008A550",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Calls 0x80092E90 FIFO-full predicate; a full condition returns -1 without AI register writes. Native rejection is a downstream symptom; original rich Inventory trigger Pending. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8008A57C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Accepted PCM enqueue path writes AI_DRAM here, AI_LEN at 0x8008A580. A synthesized or rejected output is not an accepted AI write. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80089270",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "ALSynth sample clock advances at synth +0x20 during command construction, before RSP completion and independently of later AI acceptance. An upstream tempo-trigger remains unproven. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80073688",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory process at 0x80073588 calls 0x80028870 to suspend gameplay process lists, retaining state for Inventory. This is a one-time open/lifetime seam, not per-glyph processing. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80073BC8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory exit calls 0x800288A8 to restore previously detached gameplay process lists. Do not attribute per-frame rendering to this exit seam. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800728B0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native Inventory repeat draw is reached from 0x80073588 while open; stock Inventory loop draws and sleeps one tick through 0x80028794, not via repeated opening/suspension. Source: Production-Rich-Inventory-Music-Initial-Static-Manifest.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800741EC",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stock Inventory row/draw dispatch family reached by 0x800728B0. Production rich rows instead branch through guarded custom hooks; a stock code location is not proof custom wrappers exist in the clean ROM. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80074260",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stock Inventory row loads an item-label pointer using 0x800A633C + item ID*4; incoming a0 is a TEXT POINTER, not an allocation length. Production v14-v19 HUD first-load defect incorrectly passed such pointer into allocator; repaired in v20. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80073124",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; stock/production separation",
      "detail": "Stock call at 0x80073124 targets 0x800742B8. Rich Inventory production REUSES the latter address as a paper/detail trampoline to a custom file-1A payload; the clean ROM is NOT that generated module. Do not infer the production trampoline from retail bytes. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80074F88",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; stock/production separation",
      "detail": "Stock Inventory secondary value/HUD call site. Rich production repoints this call to shared custom trampoline at 0x800742C8; clean ROM has native text dispatch instead. Do not name generated targets as stock functions. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C81C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native presentation palette-cache MISS allocates a dynamic palette handle here; unlike cached HIT at 0x8001C628, the miss proceeds through conversion and upload/flush. Miss count and timing immediately before audio rejection remain unknown. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C6D0",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; source span rule",
      "detail": "Palette conversion can process the full requested 0x100 colors for native glyphs in mode 0; 16 visible colors do NOT authorize a 16-color backing descriptor. A cached hit does not convert/upload; no audio culpability shown. Source: Production-Rich-Inventory-Music-Initial-Static-Manifest.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001C898",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; lifetime pending",
      "detail": "Native palette free reached when the original acquired handle's release at 0x8001C64C decrements reference count to zero. A wrapped acquire counter does not invoke this free by itself; release-before-queued-render completion would need proof. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001EBB8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Textured glyph render-node submission path after 0x80073CEC -> 0x8001E578. Per-frame draw work remains even when rich Inventory's mutable content is materialized once. No direct glyph-to-audio scheduler call established. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001EC20",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native graphics builder walks render buckets; kind-2 glyph/textured nodes dispatch through 0x8001ED00. Workload is real but endpoint node counts are partial capture phases and cannot quantify first deadline miss. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001ED00",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Graphics bucket kind-2 textured/glyph dispatch. Rendering does not by itself prove audio scheduling interference; trace timing before blaming palette/glyph work. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80020108",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Graphics pipe-sync command emitter in the native bucket/render-list construction family; correlated with draw processing, not proof of a guest PCM enqueue failure. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8001BA84",
      "title": "repeatable comment",
      "evidence": "Static-confirmed; superseded decoder assumption",
      "detail": "Native render-node bank setup forms base 0x800C2950 + bank*0x157C0, 1000 nodes per bank. Previous second-bank-only assumption was incorrect for paired Fortress captures; both used valid first-bank cursors. Source: Production-Rich-Inventory-Music-Static-Investigation.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x80028870",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stock gameplay process-list suspend helper invoked by Inventory at 0x80073688. Saves old list head, narrows active process list to Inventory, and preserves links for eventual restore. No per-glyph participation. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x800288A8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Stock process-list restoration helper reached from Inventory exit at 0x80073BC8; restores saved process links. This does not imply Inventory reopens every frame. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002867C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native scheduler publishes CURRENT process/controller to 0x802ECE20 at this instruction. Generic child creation 0x8002830C does not permanently replace the current process pointer. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8002877C",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native scheduler clears current process/controller pointer 0x802ECE20 at process switch/exit. Do not interpret that address as a persistent pickup manager owner. Source: Test-Lab-Inventory-Hang-Static-Diagnosis.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Comment",
      "address": "0x8007CAF8",
      "title": "repeatable comment",
      "evidence": "Static-confirmed",
      "detail": "Native process context-switch routine used by stock process sleep and main scheduler. Stock 0x80028794 records sleep at controller+0x6DA before yielding. Not an additional OS VI audio callback. Source: Function-Registry.md.",
      "source": "analysis/comments.tsv"
    }
  ]
};
