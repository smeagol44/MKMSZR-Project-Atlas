// Selected metadata from pinned Ghidra manifests. Maintainer import audit is a separate historical snapshot.
window.MKMSZ_GHIDRA_DATA = {
  "snapshot": "2026-11-11",
  "sourceRepo": "smeagol44/MKMSZ-Ghidra",
  "sourceCommit": "8d73880ea5feb5838460f9df67c1e8f5527028b8",
  "projectCommit": "7e86e4009cfac206a3c736e29bf4c7b5de6b4a6f",
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
    "Function": 182,
    "Global": 65,
    "Code label": 3,
    "Overlay function": 14,
    "Bookmark": 106,
    "Type": 12,
    "Typed data": 1,
    "Comment": 233,
    "Overlay image": 8
  },
  "knowledgeScope": {
    "owners": 40,
    "enumeratedFindings": 927,
    "routedFindings": 927,
    "ghidraTargetClaims": 263,
    "anchoredSections": 253,
    "totalSections": 713,
    "statement": "These are known-knowledge routing measures, not a completion percentage of unknown game code; imported records and claims use different denominators.",
    "date": "2026-10-09"
  },
  "findings": [
    {
      "title": "Floor regions, ledge entry and XP",
      "evidence": "Merged metadata",
      "detail": "Three function names, five globals and the live XP-tier evaluation note. The reading of ledge state 1 as the hang state remains a strong inference.",
      "pr": 13,
      "source": "analysis/functions.tsv"
    },
    {
      "title": "Sektor rocket and throw research",
      "evidence": "Merged metadata",
      "detail": "Projectile processes, texture slots, palette copy, Ice spawn offsets, effects and reactions from the straight, homing and Double Missile work.",
      "pr": 12,
      "source": "analysis/globals.tsv"
    },
    {
      "title": "Sektor rocket and throw functions",
      "evidence": "Merged metadata",
      "detail": "Adds process and actor helpers, texture slots, Ice companions and hit effects, stage reactions and throw identities.",
      "pr": 11,
      "source": "analysis/functions.tsv"
    },
    {
      "title": "Animation script interpreter",
      "evidence": "Merged metadata",
      "detail": "Vertical flip, nine callback functions and two table globals. The interpreter remains a global MKMSZ identity.",
      "pr": 10,
      "source": "analysis/functions.tsv"
    },
    {
      "title": "Password, Options and exception handler",
      "evidence": "Merged metadata",
      "detail": "The password writer, Options dispatch, interrupt clobber and cache-related globals are visible in the manifests.",
      "pr": 9,
      "source": "analysis/functions.tsv"
    },
    {
      "title": "Water scripted selector",
      "evidence": "Merged · Water overlay",
      "detail": "One comment and one bookmark identify the original checkpoint increment and store in overlay file 0xA1.",
      "pr": 8,
      "source": "analysis/comments.tsv"
    },
    {
      "title": "Audio setup proposal",
      "evidence": "Closed · unmerged",
      "detail": "PR #7 proposed setup/restore metadata. The catalog reflects the merged manifests. The audio reserve correction is recorded in the Randomizer Wiki.",
      "pr": 7,
      "source": null
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
      "detail": "Writes `+0x74/+0x7C` descriptor geometry; initialized `+0x8C bit 0x40` path marks `+0xFA` dirty and resolves `+0x68/+0x80` from texture slot `+0x9C` and palette selector `+0x9E`; both relevant zero-preword entries mark dirty even on same-shape binds A non-zero word just before the descriptor is a texture-slot override: drawn from that slot, no +0xFA increment, slot record 0x802E83F0 + word*0x10 written. Generated descriptors must be preceded by zero (Sektor proofs v35-v39). See Wiki Data-Structures-and-Encodings (Frame descriptor and the preceding word).",
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
      "detail": "Allocates/reuses dynamic texture records in slot range 0x200..0x2FF. Reuse requires record +0x0C > 0; fresh stack storage comes top-down from 0x800BF2FC and returns -1 when it would cross the texture bump 0x801AE478.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001C528",
      "title": "presentation_resource_load",
      "evidence": "Static/runtime-confirmed at known callers",
      "detail": "Loads presentation resource/palette state; semantics are bounded to traced callers. Traced glyph path acquires by source pointer; active cache hit increments u16 refs and returns handle without conversion/upload. Miss allocates/converts/uploads; no audio causation established. The source pointer is the colours themselves (palette_slot_copy 0x8001C6D0 copies them as is): callers pass record + 4, past the count word (pickup manager, Sektor effects from proof v43; v35-v42 passed the record start and shifted every colour by two entries).",
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
      "detail": "Allocates/links a controller-process and clones current controller context fields. Returns the new controller (0 when free list 0x80111DC8 is empty; 64 controllers), linked after the current process; copies +0x6E0, +0x6E4 and +0x6F4..+0x718.",
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
      "detail": "Fighter animation script interpreter: advances the current script/cursor; tokens 1..16 via 0x800AD450. See Wiki Data-Structures-and-Encodings (Fighter animation script grammar).",
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
      "detail": "Removes actor through `0x80028408/0x80024B00`, then terminates the active projectile process through `0x80028564`; reached on generic flight offscreen/lifetime paths. Also callable from the flight loop's per-tick callback to end the projectile (Sektor homing rocket proximity miss, proofs v43-v46).",
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
      "detail": "Synchronous raw-file loader used by MKMSZR runtime bootstrap. No `cache` instruction in it or its callees within three call levels (Static-confirmed 2026-11-06): raw-loaded code/state must use uncached KSEG1 aliases. See Wiki Memory-and-Allocation-Map.",
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
      "detail": "Evaluates/clamps XP tier using native threshold table. Clamps g_current_xp to the stage cap (0x800A63FC), stores g_xp_level_value 0x802C1BA4 and returns the tier count 0..9. Special-move gates call it live on current XP (e.g. 0x8003CA24 Slide, 0x8004A2A0 Ice Clone) and compare with slti, so current XP alone decides usable powers.",
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
      "detail": "Production stage-key masking copy replacing stock sanitizer. Clean-ROM implementation; production randomizer replaces it. Since 2026-11-06 the production routine reads its key-to-stage table uncached at 0xA01B0970 (formerly the stock template 0x800A5FE4).",
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
      "category": "Function",
      "address": "0x8007550C",
      "title": "password_screen_handler",
      "evidence": "Static-confirmed",
      "detail": "Options password screen and password-effect handler (Options entry 3). Password `NXCVSZ` writes word 5 into 0x800A5FE4..0x800A6008; stage passwords write current stage 0x8009A910 and current XP 0x8011200C. Unpatched by MKMSZR. See Wiki Persistence-Inventory-and-Lifecycle.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800762C4",
      "title": "options_menu_dispatcher",
      "evidence": "Static-confirmed",
      "detail": "Five-entry Options menu; jump table 0x800AEAB8 targets 0x8007739C, 0x80076D74, 0x8007816C, 0x8007550C (password), 0x800766BC (GAME SETTINGS editor). Labels of entries 0-2 not individually confirmed.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800766BC",
      "title": "game_settings_editor",
      "evidence": "Static-confirmed",
      "detail": "GAME SETTINGS editor (Options entry 4); extended by MKMSZR's TURN/ATTACK/SPECIALS/JUMP/RUN frontend. See Wiki Native-HUD-and-UI.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80095DE0",
      "title": "os_exception_handler",
      "evidence": "Static-confirmed",
      "detail": "libultra-pattern exception entry. Overwrites k1 with Status at 0x80095DEC; the return path restores at/t8/t9 from the thread context (0x800965E4, 0x80096640, 0x80096644) but leaves k0 = 0xA430000C and k1 = RCP mask before eret at 0x8009670C. Injected code must not carry state in k0/k1. See Wiki Persistence-Inventory-and-Lifecycle.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800318B8",
      "title": "actor_flip_vertical",
      "evidence": "Static-confirmed",
      "detail": "Toggles actor +0x8C bit 0x20 and runs 0x8001BDA0; animation token 9.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028BF4",
      "title": "anim_cb_set_rate",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 1 (table 0x8009F95C, token 6): consumes one script word; low halfword -> period +0x6A6 and countdown +0x6A8. See Wiki Data-Structures-and-Encodings (Fighter animation script grammar).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028C18",
      "title": "anim_cb_play_sfx",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 2: consumes one script word and plays that gameplay SFX descriptor via 0x80064C18 with facing-dependent pan. See Wiki Data-Structures-and-Encodings (Fighter animation script grammar).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800288E0",
      "title": "anim_cb_set_actor_flag_2000",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 3: actor +0x64 |= 0x2000.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800288FC",
      "title": "anim_cb_clear_actor_flag_2000",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 4: actor +0x64 &= ~0x2000.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8002891C",
      "title": "anim_cb_set_actor_flag_20",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 5: actor +0x64 |= 0x20.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028938",
      "title": "anim_cb_clear_actor_flag_20",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 6: actor +0x64 &= ~0x20.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028958",
      "title": "anim_cb_adjust_position",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 7: actor +0x2C -= 0x19000; for actor type 0x0B wraps by +/-0x32000 into [0x5D00,0x333CB].",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800289E0",
      "title": "anim_cb_set_actor_flag_100",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 9: actor +0x64 |= 0x100.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800289FC",
      "title": "anim_cb_spawn_effect_process",
      "evidence": "Static-confirmed",
      "detail": "Animation callback 8: spawns class-0x100 process 0x80028A24, which builds a resource actor with a randomly chosen variant; effect identity Pending.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001C424",
      "title": "dynamic_texture_release",
      "evidence": "Static-confirmed",
      "detail": "Clears slot record +0x0E. For stack storage (+0x0C == 0) that is the current lowest, raises 0x800BF2FC to the lowest remaining active stack storage above it, or 0x80400000. See Wiki Data-Structures-and-Encodings (Dynamic gameplay texture-slot record).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001CA38",
      "title": "texture_storage_stage_reset",
      "evidence": "Static-confirmed",
      "detail": "Stage setup: texture bump pointer 0x801AE478 = 0x8034B000, dynamic-slot top-down pointer 0x800BF2FC = 0x80400000.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800245A4",
      "title": "object_alloc",
      "evidence": "Static-confirmed",
      "detail": "Takes an object from free list 0x802D0E34 (79 x 0x118 bytes), zeroes it, sets +0x88 = 0x01000100 and +0x90 = 0xFFFF; returns 0 when empty.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80024B00",
      "title": "actor_list_remove",
      "evidence": "Static-confirmed",
      "detail": "Removes an actor from a list (a1 = list head, e.g. 0x80111C98); counterpart of actor_list_insert 0x80024650.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028564",
      "title": "process_exit",
      "evidence": "Static-confirmed",
      "detail": "Ends the current process (controller returns to the free list); does not return.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007CAF8",
      "title": "process_context_save_switch",
      "evidence": "Static-confirmed",
      "detail": "Saves ra, sp, fp, gp and s0..s7 at controller +0x08 and switches to the next process (used by process_sleep 0x80028794).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8007CB84",
      "title": "process_context_restart",
      "evidence": "Static-confirmed",
      "detail": "Restarts the current process at the entry stored in its context (+0x08) with the stack from +0x0C.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80060A3C",
      "title": "ice_companion_helper_process",
      "evidence": "Static-confirmed; removal Runtime-confirmed (Sektor proof v35/v40)",
      "detail": "Class-0x100 Ice helper: sets 0x8009A5F0 = 1, takes a 0x50x0x50 texture slot, binds Ice palette 0x800B1A24, constructs an actor from file 0x87 table +0xF88[+0x718] plus a mirror copy (the blue 'ghosts'), inserts both, then continues in 0x80060D14.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80060D14",
      "title": "ice_companion_helper_update",
      "evidence": "Static-confirmed",
      "detail": "Per-frame loop of 0x80060A3C: advance 0x800304C0, copy to the mirror, sleep *(0x800A1600); at script end remove both actors, sleep 2, release the slot, exit.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004AB48",
      "title": "ice_hit_tint_process",
      "evidence": "Static-confirmed",
      "detail": "Hit-time counterpart of ice_screen_tint_process: 0x80044964(0x80,0x80,0xC0,0x80,0xD) then exit. Started by the Ice hit child 0x8004BB64.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80044964",
      "title": "positioned_screen_effect_start",
      "evidence": "Static-confirmed; purpose partly inferred",
      "detail": "Reads the caller controller's +0x6F4/+0x6F8/+0x6FC position and starts process 0x80060E68 with colour/duration arguments; used by the Ice tint processes.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80049C34",
      "title": "ice_blast_lp_callback",
      "evidence": "Static-confirmed",
      "detail": "LP Ice Blast record action: transfers to selector 0 (ice_projectile_action_root) when grounded. Sektor proofs lift it into the payload (selector 4).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8004BB64",
      "title": "ice_projectile_hit_child",
      "evidence": "Static-confirmed",
      "detail": "Ice contact process: Ice hit sound (0x8004BB94), moves the projectile to the victim, starts the Ice helper (0x8004BCB4) and hit tint (0x8004BCD0), then exits through 0x8004CDF8.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80051280",
      "title": "fire_trap_stumble_reaction",
      "evidence": "Static-confirmed; Runtime-confirmed as Sektor's rocket reaction (proofs v34-v41)",
      "detail": "Fire spiked-rod trap victim reaction (installed by the Fire overlay): hit voice, preamble 0x80053028 (airborne handler 0x800533C8), 8-tick hit pause at 0x80051318, push +/-0x56666 backwards, stumble phase slot 0x20 at 6 ticks/frame, exit 0x800328FC.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80053028",
      "title": "reaction_preamble",
      "evidence": "Static-confirmed",
      "detail": "Common victim-reaction preamble; a1 = airborne handler (e.g. 0x800533C8).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8005BC8C",
      "title": "player_throw",
      "evidence": "Static-confirmed; sound sites Runtime-confirmed (Sektor v41)",
      "detail": "Attacker throw: voice category 11 at 0x8005BCD4 (the grab sound), grab phase 0x80034578 at 0x8005BD58, victim made current and throw phase 0x80034578 at 0x8005BDC8 (attacker in s0), finish 0x8005BB84 at 0x8005BDF8.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8005BB84",
      "title": "player_throw_finish",
      "evidence": "Static-confirmed",
      "detail": "Throw finish: sets action id (a0) and continues through 0x8005BEA0.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80064B00",
      "title": "voice_category_play",
      "evidence": "Static-confirmed",
      "detail": "(category, 0, random, fighter type +0x78): plays the category entry of the type's voice table (player type 4: 0x800A2EC8, 12 categories); a 0 entry is skipped. See Wiki Sounds-and-Music (Imported fighter voice rule).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8000339C",
      "title": "embedded_image_type2_decode",
      "evidence": "Static-confirmed",
      "detail": "Run-length decoder: 24-bit little-endian size incl. header; control n >= 0 copies n+1 literals, n < 0 repeats one byte 1-n times.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001D6EC",
      "title": "texture_upload_queue",
      "evidence": "Static-confirmed",
      "detail": "Queues (mode, src, slot, width, height@sp+0x10) at 0x802C11C0 (20-byte entries, top index 0x802C16C0; no bound check).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001D7F0",
      "title": "texture_upload_drain",
      "evidence": "Static-confirmed",
      "detail": "Runs queued uploads; mode 1 copies to slot storage 0x800ED940[slot], byte copy 0x800202CC when slot header bits 0x180 == 0x80, otherwise a nibble-swapping half-width copy.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x800202CC",
      "title": "mem_copy_words",
      "evidence": "Static-confirmed",
      "detail": "Word-wise copy when length and both pointers are 4-aligned, otherwise falls back to 0x8008E854.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001DC00",
      "title": "sprite_render_build",
      "evidence": "Static-confirmed",
      "detail": "Builds render nodes for a sprite: rows per chunk 0x708 / align8(slot width), quad subdivision for large screen area, submission 0x8001EAE4 (draw table index & 0x3FF).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80024BA8",
      "title": "actor_floor_check",
      "evidence": "Static-confirmed; Runtime-confirmed (teleport v07, v40)",
      "detail": "Per-tick floor check for the player / fighter processes: finds the floor region (0x80025ED4) or sets controller +0x6B4 = 0x7FBC00 ('no floor below') and, when +0x6B0 is zero, installs the stock fall 0x80025230.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80028510",
      "title": "find_process_by_class",
      "evidence": "Static-confirmed; Runtime-confirmed as the Sektor homing target scan (proof v45)",
      "detail": "(class, mask): first process in the list, other than the current one, with +0x6D8 & mask == class, else 0. Ordinary enemies are classes 2-4 (spawn slots 0x71..0x73); the Ice root calls it with 0x700 at 0x8004ABB0 to refuse a second live projectile. See Wiki Player-Actions-and-Special-Moves (Heat-seeking rocket and Double Missile host findings).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x8001C6D0",
      "title": "palette_slot_copy",
      "evidence": "Static-confirmed; Runtime-confirmed through the Sektor effect palette fix (proof v43)",
      "detail": "Called by presentation_resource_load 0x8001C528 on a cache miss: copies count colours (at most 0x100) from the source pointer as is into the palette slot. The source must be the colours, not a count-prefixed record (pass record + 4).",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80025230",
      "title": "actor_walkoff_fall",
      "evidence": "Static-confirmed",
      "detail": "Stock walk-off/fall callback installed by actor_floor_check 0x80024BA8 when no floor matches and controller +0x6B0 is zero: busy input map, action 0x30A, stock jump/fall 0x800321D0 (sentinel 0xD, gravity 0x7851), exit 0x800328FC. Sektor composition v03 fall-through ended here.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80025ED4",
      "title": "floor_region_test",
      "evidence": "Static-confirmed",
      "detail": "Tests an actor against the stock floor regions (count g_floor_region_count 0x80290998, records *g_floor_region_table 0x800C2568, stride 0xB8); on a match writes floor << 8 to actor y +0x30 and controller +0x6B4. Airborne (+0x6B2 or actor +0x10 non-zero) lands only by crossing from previous y +0x3C. Flag 0x800 regions: ledge branch snaps a falling fighter to the nearest region end, plays sound 0x13 and installs ledge_grab_enter 0x80025E48 via 0x80032CD4.",
      "source": "analysis/functions.tsv"
    },
    {
      "category": "Function",
      "address": "0x80025E48",
      "title": "ledge_grab_enter",
      "evidence": "Static-confirmed mechanics; ledge-hang meaning Hypothesis / strong inference",
      "detail": "Installed by the ledge branch of floor_region_test 0x80025ED4. Sets controller +0x6DC = 1 (player state request); for process classes 2-3 appends the previous callback +0x6F0 to the list at 0x801AE480 (count 0x802E7DF4); restarts the process at live dispatch 0x80028F3C and context-switches through 0x8007CB84.",
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
      "category": "Global",
      "address": "0x800A5FE4",
      "title": "g_default_inventory_template",
      "evidence": "Static-confirmed",
      "detail": "Stock ten-word default-inventory template, obsolete under MKMSZR after the default loader is replaced. Still written by password `NXCVSZ` (0x8007550C). Former MKMSZR key-to-stage table location until 2026-11-06; do not reuse.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800AE940",
      "title": "g_password_buffer",
      "evidence": "Static-confirmed",
      "detail": "Six-character password entry buffer (default `BCDFGH`) used by 0x8007550C; the legacy Lua randomizer used it for seed entry.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800AEAB8",
      "title": "g_options_menu_jump_table",
      "evidence": "Static-confirmed",
      "detail": "Five-word jump table used by the Options dispatcher 0x800762C4.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800AD450",
      "title": "g_anim_token_jump_table",
      "evidence": "Static-confirmed",
      "detail": "Sixteen-word jump table for animation interpreter 0x800304C0 tokens 1..16 (dispatch at 0x80030584). See Wiki Data-Structures-and-Encodings (Fighter animation script grammar).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009F95C",
      "title": "g_anim_callback_table",
      "evidence": "Static-confirmed",
      "detail": "Ten-word animation callback table for token 6; index 0 is null (no-op), 1..9 are the anim_cb_* functions. See Wiki Data-Structures-and-Encodings (Fighter animation script grammar).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802E83F0",
      "title": "g_texture_slot_records",
      "evidence": "Static-confirmed",
      "detail": "16-byte dynamic texture-slot records (IDs 0x200..0x2FF). See Wiki Data-Structures-and-Encodings (Dynamic gameplay texture-slot record).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800ED940",
      "title": "g_texture_slot_storage",
      "evidence": "Static-confirmed",
      "detail": "Per-slot storage pointers, indexed by slot ID.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800BF2FC",
      "title": "g_texture_stack_top",
      "evidence": "Static-confirmed",
      "detail": "Lowest live dynamic-slot storage address (top-down; reset to 0x80400000).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x801AE478",
      "title": "g_texture_bump",
      "evidence": "Static-confirmed",
      "detail": "Texture-storage bump pointer advanced by 0x8001BF70 without a bound check (reset to 0x8034B000).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009A5F0",
      "title": "g_texture_slot_mode",
      "evidence": "Static-confirmed",
      "detail": "Render-mode index for the next fresh dynamic slot (header bits 0x60); reset to 0 every frame; the Ice helper sets 1.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009F6F4",
      "title": "g_slot_render_modes",
      "evidence": "Static-confirmed",
      "detail": "Four render-mode words indexed by slot header bits 0x60 (all 0x404240).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x8009F704",
      "title": "g_slot_render_alpha",
      "evidence": "Static-confirmed",
      "detail": "Four alpha bytes indexed by slot header bits 0x60: 0x80, 0xC0, 0x40, 0x20.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800EEB8C",
      "title": "g_image_decode_cursor",
      "evidence": "Static-confirmed",
      "detail": "Per-frame decode scratch cursor used by 0x8000322C; reset each frame from *0x80112014.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80112014",
      "title": "g_frame_scratch_base",
      "evidence": "Static-confirmed",
      "detail": "Per-frame scratch base (0x802C1C00 in the gameplay setters).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802E7E20",
      "title": "g_type4_ring",
      "evidence": "Static-confirmed",
      "detail": "1024-byte ring of the type-4 decoder 0x80003428; not cleared between images (output byte k at index (1+k) & 0x3FF).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80111DC8",
      "title": "g_process_free_list",
      "evidence": "Static-confirmed",
      "detail": "Free-list head of the 64 process controllers (0x720 bytes each).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802D0E34",
      "title": "g_object_free_list",
      "evidence": "Static-confirmed",
      "detail": "Free-list head of the 79 objects (0x118 bytes each).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80291C10",
      "title": "g_fighter_file_87_base",
      "evidence": "Static-confirmed",
      "detail": "Resident fighter file 0x87 base (written at stage load 0x8000D34C).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A1190",
      "title": "g_reaction_table",
      "evidence": "Static-confirmed",
      "detail": "Victim reaction routine table indexed by strike reaction byte; entry 0x23 is the unused endless-sleep 0x8004E0C0.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800AF484",
      "title": "g_projectile_strike_table",
      "evidence": "Static-confirmed",
      "detail": "Per-type projectile strike-record pointer table read by 0x8004CE6C; player type 4 selector 0x13 = straight projectile.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A2EC8",
      "title": "g_player_voice_table",
      "evidence": "Static-confirmed",
      "detail": "Player (type 4) voice table: 12 category halfwords -> SFX descriptors 0x20..0x2C; category 11 is the grab.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802C11C0",
      "title": "g_texture_upload_queue",
      "evidence": "Static-confirmed",
      "detail": "Texture upload queue (20-byte entries) filled by 0x8001D6EC; top index at 0x802C16C0 (-1 idle).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800A9FB8",
      "title": "g_image_type_jump_table",
      "evidence": "Static-confirmed",
      "detail": "Six-word jump table of 0x8000322C for image types 0..5.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80111DB8",
      "title": "g_ice_spawn_x_offset",
      "evidence": "Static-confirmed",
      "detail": "Ice root spawn x offset: set per mode (0x7000 for mode 0 at 0x8004AD40), then overwritten by the staging block with the computed x (0x8004AE18); a second creation must re-run 0x8004AD40 (Sektor Double Missile, proof v46).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802E7E08",
      "title": "g_ice_spawn_y_offset",
      "evidence": "Static-confirmed",
      "detail": "Ice root spawn y offset: 0x55F0 for mode 0 (0x8004AD50), then overwritten by the staging block with the computed y (0x8004AE54).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x80290998",
      "title": "g_floor_region_count",
      "evidence": "Static-confirmed",
      "detail": "Number of stock floor regions (word), read by floor_region_test 0x80025ED4; first fixed state after the arena bump bound 0x80290990.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800C2568",
      "title": "g_floor_region_table",
      "evidence": "Static-confirmed",
      "detail": "Pointer to the floor-region records, stride 0xB8: base x/y/z words +0/+4/+8 (world units), point count +0x0C, points from +0x10 (dx, dy signed halfwords, stride 8), flags +0x94 (0x300 shaping modes, 0x800 ledge). Applies when abs(z - base z) <= 0x80 and x lies between the first and last point; floor = base y + dy of the first point whose x exceeds the actor's. Modelled read-only by the Sektor teleport floor probe (composition v03/v04).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x801AE580",
      "title": "g_floor_region_enabled",
      "evidence": "Static-confirmed",
      "detail": "One enable byte per floor region (index as g_floor_region_table).",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x802C1BA4",
      "title": "g_xp_level_value",
      "evidence": "Static-confirmed",
      "detail": "Level value stored by xp_tier_evaluate 0x80074FBC from current XP (curve sum >> 8); read by the Power Ups strip builder 0x800750F0.",
      "source": "analysis/globals.tsv"
    },
    {
      "category": "Global",
      "address": "0x800C1248",
      "title": "g_power_ups_count",
      "evidence": "Static-confirmed",
      "detail": "Power Ups strip count: the tier count from xp_tier_evaluate, stored (capped at 9) by the strip builder 0x800750F0.",
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
      "category": "Code label",
      "address": "0x800185B8",
      "title": "render_frame_decode_upload",
      "evidence": "Static-confirmed",
      "detail": "Inside the per-actor render pass: when actor +0xFA is set, decodes frame record +0x7C through 0x8000322C, writes the decoded pointer back into the record, sets slot +0x08/+0x0A and queues the upload via 0x8001D6EC. Inside actor_motion_integrate 0x80017F80 (the per-frame actor pass); not a separate function.",
      "source": "analysis/code_labels.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802F52B0",
      "scope": "overlay_earth",
      "location": "Earth · file 0x9C",
      "title": "earth_key_award",
      "evidence": "Static-confirmed",
      "detail": "Earth icon callback",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EDF50",
      "scope": "overlay_earth",
      "location": "Earth · file 0x9C",
      "title": "earth_boss_construct",
      "evidence": "Static-confirmed",
      "detail": "Earth custom boss constructor",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802F1E44",
      "scope": "overlay_prison",
      "location": "Prison · file 0x9F",
      "title": "prison_trigger_dispatch",
      "evidence": "Static-confirmed; Ghidra decompilation maintainer-observed; L1-door identity Pending",
      "detail": "Long-running Prison trigger process: initializes globals, scans 0x3C-byte records at 0x801114F4 (count 0x802E8228), bounds-tests player position, dispatches via 0x802F26A8 stage-local callback table, yields via process_sleep 0x80028794(2), repeats. The existing symbol describes its trigger-dispatch role; not merely a one-shot routine.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EE320",
      "scope": "overlay_prison",
      "location": "Prison · file 0x9F",
      "title": "prison_scene_actor_update",
      "evidence": "Static-confirmed; Ghidra MIPS32 decompilation maintainer-observed 2026-10-08; first L1 group bit0 Runtime-confirmed bounded",
      "detail": "Persistent Prison three-panel door/scene mover: config current controller +0x6F4; constructs child animation actors from stage resources and 0x48-stride scene records at 0x80111FF8; subentry +0x20 bits consume 0x802C0D54 for panel state. Initial sleep(0x78) then polling sleep(2); player scene/collision/input predicates govern movement. Moves paired scene records, 0xB8-stride collision entry at 0x800C2568, 0x3C-stride scene entry at 0x802E729C, associated child actors and camera; plays movement sounds. First L1 scene group indices 0xFB/0xFC and enable credential bit0 already established in Global Item wiki; other groups remain bounded.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802F0754",
      "scope": "overlay_prison",
      "location": "Prison · file 0x9F",
      "title": "prison_capture_grunt_present",
      "evidence": "Static-confirmed; Ghidra MIPS32 decompilation maintainer-observed 2026-10-08; v01 resource removal failed and v02 retained asset Runtime-confirmed bounded",
      "detail": "Persistent Prison scripted staff-grunt capture/presentation controller. Reads file 0x8F slot 0x80112008; loads visual assets via 0x8001C528; creates two actors with +0x9C=0x21 and 0x22 via 0x800281A0 and 0x80024650; steps animation via 0x800304C0. Player/actor gates schedule class-0x15 helper 0x8005ED88, audio, and conditional selector 0x802C18F8=5 with reconstruction 0x80035F38. Polls via process_sleep(4); not ordinary stream combat. Ghidra giant artificial stack arrays not verified as real allocations.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EF178",
      "scope": "overlay_bridge",
      "location": "Bridge · file 0x9B",
      "title": "bridge_icon_award",
      "evidence": "Static-confirmed",
      "detail": "Bridge three-icons callback",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802ED888",
      "scope": "overlay_bridge",
      "location": "Bridge · file 0x9B",
      "title": "bridge_scene_trigger_dispatch",
      "evidence": "Static-confirmed",
      "detail": "Bridge trigger dispatcher",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EFDB0",
      "scope": "overlay_fortress",
      "location": "Fortress · file 0x9E",
      "title": "fortress_assassin_reward_manager",
      "evidence": "Static-confirmed",
      "detail": "Fortress assassin manager",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EF30C",
      "scope": "overlay_fortress",
      "location": "Fortress · file 0x9E",
      "title": "fortress_crystal_progression_dispatch",
      "evidence": "Static-confirmed",
      "detail": "Crystal progression",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EEC54",
      "scope": "overlay_temple",
      "location": "Temple · file 0xA0",
      "title": "temple_scripted_map_actor",
      "evidence": "Static-confirmed; known stage-owned scripted Map callback; exact function entry clean ROM",
      "detail": "Temple scripted Map/special-check actor callback; maintains location-owned elevator/progression path separately from special reward/persistence; not an ordinary pickup.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802EE9FC",
      "scope": "overlay_wind",
      "location": "Wind · file 0xA2",
      "title": "wind_spatial_trigger_dispatch",
      "evidence": "Static-confirmed; named Wind spatial-trigger controller",
      "detail": "Wind 0x3C-stride stage spatial-trigger records at 0x801114F4, player-position/event dispatch; maintains stage/selector physical state, not a pure pickup helper.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802F2CB4",
      "scope": "overlay_wind",
      "location": "Wind · file 0xA2",
      "title": "wind_mixed_icon_award",
      "evidence": "Static-confirmed; checkpoint suppression v01 rejected",
      "detail": "Wind Circle/Triangle/Three Bars pickup callback; combines inventory award with required stage-local checkpoint/selector events; cannot globally suppress physical-state updates.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802F2448",
      "scope": "overlay_water",
      "location": "Water · file 0xA1",
      "title": "water_icon_award",
      "evidence": "Static-confirmed; function entry in stock Water overlay",
      "detail": "Water Triangle/Three Bars/Moon icon award callback, stage-qualified; detailed full bounds unverified.",
      "source": "analysis/overlay_functions.tsv"
    },
    {
      "category": "Overlay function",
      "address": "0x802F0EBC",
      "scope": "overlay_fire",
      "location": "Fire · file 0x9D",
      "title": "fire_icon_award",
      "evidence": "Static-confirmed; bounded Fire checkpoint-free proof Runtime-confirmed",
      "detail": "Fire three icon awards, parameters 0..2; stock stage selector/checkpoint presentation writes present, bounded v01 route isolated suppression; not a general override.",
      "source": "analysis/overlay_functions.tsv"
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
      "category": "Bookmark",
      "address": "0x802F11A8",
      "scope": "overlay_water",
      "location": "Water · file 0xA1",
      "title": "MKMSZ/checkpoint-trace",
      "evidence": "Static-confirmed; bounded owner report",
      "detail": "Water 0xA1 stage-only selector commit sh v0,0x18F8(at), raw ROM 0xB9338. Producer at 0x802F11A0 / ROM 0xB9330 formerly increments current selector; targeted product edit loads constant 6 instead. Existing native reconstruction remains stock; higher-selector revisit Pending. Wiki: Stage-Catalog-Water.md.",
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
      "detail": "Struct · 0xA8 bytes. Four ten-word authoritative inventory boxes and settings/magic following at contiguous addresses",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_PickupRecord",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x30 bytes. Stage-Catalogs and Data-Structures-and-Encodings; ordinary 0x30-byte record",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_PersistenceV2",
      "evidence": "Static-confirmed; production lifecycle Runtime-confirmed bounded",
      "detail": "Struct · 0x50 bytes. MKMSZR production state; not vanilla ROM structure",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_EnemySpawnRecord",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x1C bytes. Only common opcodes 0/1/9; opcode 6 uses different 0x20 grammar",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_AuxTriggerRecord",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x3C bytes. Only 0x00..0x18 identified; remaining subtype arguments are context-specific",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_RenderNode",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x58 bytes. Partial field layout from Native UI owner; other bytes deliberately undefined",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_DynamicTextureSlot",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x10 bytes. Native gameplay allocator record; sparse fields",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_Type5ImageHeader",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x0C bytes. Compressed bitstream begins at +0x0C; variable length follows fixed header",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_EnemySpawnConditionalRecord",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x20 bytes. Data-Structures-and-Encodings.md",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_Type5ModelTableHeader",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x04 bytes. Data-Structures-and-Encodings.md",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Type",
      "address": "/MKMSZ",
      "title": "MKMSZ_SpecialActionDescriptor",
      "evidence": "Static-confirmed",
      "detail": "Struct · 0x2C bytes. Stock special-action descriptor, one Low Kick record at VA0x800B0F68 before 0x800B0F94 sentinel; Player-Actions-and-Special-Moves.md",
      "source": "analysis/types.tsv"
    },
    {
      "category": "Typed data",
      "address": "0x800B0F68",
      "title": "stock_low_kick_special_descriptor",
      "evidence": "Static-confirmed; maintainer-local imported 2026-10-09",
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
    },
    {
      "category": "Comment",
      "address": "0x802F11A0",
      "scope": "overlay_water",
      "location": "Water · file 0xA1",
      "title": "repeatable comment",
      "evidence": "Static-confirmed code; bounded owner runtime report",
      "detail": "Water file 0xA1 raw ROM 0xB9330: stock addiu v0,v0,1 reads selector at ROM 0xB9320; subsequent commit at ROM 0xB9338 and reconstruction call at ROM 0xB9344. Owner reported the disposable constant-6 (24020006) replacement working; now guarded by product pipeline. Exact boss-script attribution and later Water re-entry with selector >6 are not exhaustively validated. Do not assume this overlapping VA is global or flatten the overlay identity. Wiki: Stage-Catalog-Water.md.",
      "source": "analysis/comments.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_earth",
      "location": "Earth · file 0x9C",
      "title": "Earth overlay",
      "evidence": "Static-confirmed",
      "detail": "File 0x9C, ROM [0x000D8B90, 0x000E1B80); SHA-256 f4152a08069f42890136f6ccca97061475661dd707434c379df4ee1ce555dbc0.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_prison",
      "location": "Prison · file 0x9F",
      "title": "Prison overlay",
      "evidence": "Static-confirmed",
      "detail": "File 0x9F, ROM [0x000C4C70, 0x000CA510); SHA-256 a7f5e4999a74e65c576af1e823cfd3f9e68725d2683eba3dd53b9f344e5ff8fd.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_bridge",
      "location": "Bridge · file 0x9B",
      "title": "Bridge overlay",
      "evidence": "Static-confirmed",
      "detail": "File 0x9B, ROM [0x000BAF60, 0x000C0330); SHA-256 3ab3439c99d5c857599f29657e66a798fa5a347ff949e7be9ea30a20b63438e7.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_fortress",
      "location": "Fortress · file 0x9E",
      "title": "Fortress overlay",
      "evidence": "Static-confirmed",
      "detail": "File 0x9E, ROM [0x000C0330, 0x000C4C70); SHA-256 bd46bf0ecb461a62fe9d3534f1be127b3dd2597021317c53117311ee5596c6c8.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_temple",
      "location": "Temple · file 0xA0",
      "title": "Temple overlay",
      "evidence": "Static-confirmed: stock file table, stage loader, pickup/callback mapping",
      "detail": "File 0xA0, ROM [0x000CA510, 0x000CF160); SHA-256 eab72de2e8a9104bcb050807bff3cb0ae3ce1640b76857c90d30ec66346b89ce.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_wind",
      "location": "Wind · file 0xA2",
      "title": "Wind overlay",
      "evidence": "Static-confirmed: stock file table, stage loader, pickup/callback mapping",
      "detail": "File 0xA2, ROM [0x000CF160, 0x000D8B90); SHA-256 f7339eebe4f44efcafdf6da994f7709e9e21ac3895650f59ad194537c508164b.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_water",
      "location": "Water · file 0xA1",
      "title": "Water overlay",
      "evidence": "Static-confirmed: stock file table, stage loader, pickup/callback mapping",
      "detail": "File 0xA1, ROM [0x000B4FC0, 0x000BAF60); SHA-256 9e1c1491b8665822ade09697abb6dd53f62c7950a4eadbabf34fa6536e3cfac4.",
      "source": "analysis/overlays.tsv"
    },
    {
      "category": "Overlay image",
      "address": "0x802ECE30",
      "scope": "overlay_fire",
      "location": "Fire · file 0x9D",
      "title": "Fire overlay",
      "evidence": "Static-confirmed: stock file table, stage loader, pickup/callback mapping",
      "detail": "File 0x9D, ROM [0x000E1B80, 0x000E6610); SHA-256 ee65b26e06694ff36412fdcbb30e20b4ba15ab6fe76e96c1a7c689cac20e36a4.",
      "source": "analysis/overlays.tsv"
    }
  ]
};
