// Atlas qualitative ratings. Each row has 40 units. Findings name a subset of those units.
window.MKMSZ_READINESS_DATA = {
  "snapshot": "2026-11-11",
  "wikiCommit": "7e86e4009cfac206a3c736e29bf4c7b5de6b4a6f",
  "ghidraCommit": "8d73880ea5feb5838460f9df67c1e8f5527028b8",
  "previousTotals": {"g":121,"y":149,"b":330},
  "rows": [
    {
      "name": "Frontend / boot / title",
      "counts": {"g":8,"y":10,"b":22},
      "owner": "Presentation-and-Branding.md",
      "findings": [
        ["g","Debug stage selector","0x8000D0B8","Runtime-confirmed menu behavior and production routing are understood."],
        ["g","Legal/logo/title owner","0x80079510","Owning frontend routine and narrow presentation bypasses are mapped."],
        ["g","Frontend fade / normalization","0x800615D8","Call behavior is understood and preserved after the logo bypass."],
        ["y","Title handoff","0x80078C40","Known handoff point, but the complete frontend state machine is not reconstructed."],
        ["g","Title image package","global file 0x5E","Compression round-trip, relocation, palette handling and replacement are understood."],
        ["y","Options dispatcher and password writer","0x800762C4 / 0x8007550C","The five Options targets are identified. The password screen still writes the stock inventory template, so the four-box map was moved to file 0x1A. Labels for Options entries 0–2 remain unconfirmed.","Function-Registry.md","Static-confirmed dispatcher and writer","2026-11-11","y"]
      ]
    },
    {
      "name": "Stage flow / loading",
      "counts": {"g":6,"y":10,"b":24},
      "owner": "Stage-Flow-and-Selector.md",
      "findings": [
        ["g","Stage transition handler","0x80015088","Selection-to-current-stage transition behavior is established."],
        ["g","Safe eight-stage flow","native stages 0,1,2,3,4,5,8,9","Selector routing and problematic entries are understood."],
        ["y","Automatic stage save","0x800798A8","Identified and selectively bypassed, but save-flow internals are partial."],
        ["y","Stage initialization order","stage lifecycle","Several critical boundaries are known through proofs; the complete state machine is not."],
        ["y","Mission Objective transition","stage frontend","Important allocation/lifecycle behavior is known experimentally."]
      ]
    },
    {
      "name": "Pickups / item records",
      "counts": {"g":21,"y":11,"b":8},
      "owner": "Pickups-and-Item-Randomization.md",
      "findings": [
        ["g","Ordinary pickup record","0x30-byte grammar","All fields +0x00..+0x2C and the 28-byte identity slice are documented."],
        ["g","Pickup manager","0x80038ACC","Shared manager is mapped and used by production restore logic."],
        ["g","Collected-flag commit","0x80039418","Runtime-confirmed persistence capture site."],
        ["g","Potion callback","0x800388FC","Award semantics and inventory ID are confirmed."],
        ["g","Herbs callback","0x800389BC","Award semantics and inventory ID are confirmed."],
        ["g","Health urn callback","0x800389EC","Award path is static/runtime-confirmed."],
        ["g","Shield callback","0x8003892C","Award path is runtime-confirmed."],
        ["g","Eye callback","0x8003895C","Award path is static/runtime-confirmed."],
        ["g","Formula callback","0x8003898C","Award path is static/runtime-confirmed."],
        ["y","Generic key/crystal award","0x80038770 + global wrappers","Logical awards are separated from destination checkpoint/activation state and integrated in global-v2; broader full-seed runtime coverage remains pending."],
        ["g","84 ordinary pickup catalog","8 main stages","The complete ordinary-record boundary is cataloged."],
        ["g","Temple scripted special check","scripted actor / 85th check","Trigger/progression ownership is separated from logical reward ownership; v02 is Runtime-confirmed and global-v2 routes the 85th reward through the dedicated wrapper."]
      ]
    },
    {
      "name": "Inventory / keys",
      "counts": {"g":17,"y":11,"b":12},
      "owner": "Persistence-Inventory-and-Lifecycle.md",
      "findings": [
        ["g","Ten-slot live inventory","0x800A600C","Stock consumer window and slot semantics are known."],
        ["g","Four backing boxes","0x800A6048..0x800A60E7","Layout and switching/preservation behavior are runtime-confirmed."],
        ["g","Inventory insertion","0x80075448","Native insertion helper is runtime-confirmed."],
        ["g","Inventory count","0x800741B4","Native count helper is identified."],
        ["g","Find first item","0x80075320","Inventory lookup helper is identified."],
        ["g","Foreign-key masking","SEALED placeholder / item 0x08","Origin mapping, authoritative backing identity, live-only masking semantics, and user-facing SEALED presentation are established."],
        ["g","Stock sanitizer replacement","0x8007AD00","Behavior is understood well enough to replace safely."],
        ["g","Default inventory loader","0x8007AD4C","Reconstruction behavior is understood for production replacement."],
        ["g","Game Over inventory boundary","lifecycle v06","Final no-continues Game Over clearing and next-run inventory/progression reconstruction are Runtime-confirmed on the reference route."],
        ["g","Relocated key-to-stage map","0xA01B0970 / ROM 0xF69150","Shared file 0x1A carries the 22-byte map in a 32-byte slice. The mask routine reads it uncached. The former stock template is still written by the password screen.","Persistence-Inventory-and-Lifecycle.md","Static-confirmed writer and bounded runtime proof","2026-11-11","g"]
      ]
    },
    {
      "name": "XP / save / persistence",
      "counts": {"g":12,"y":11,"b":17},
      "owner": "XP-and-Progression.md",
      "findings": [
        ["g","Central XP award","0x8002E104","Central XP path and current XP storage are identified."],
        ["g","XP tier evaluator","0x80074FBC","Threshold/clamp behavior and cap table are mapped."],
        ["g","Save-loader XP restore","0x80078A18","XP restore field at save-record +0x7C is identified."],
        ["g","Runtime state V2","0x801AF7D0..0x801AF81F","Versioned header, pickup bitsets, progression words and optional-state tail are documented inside the 16 KiB MKMSZR reservation."],
        ["g","Pickup persistence","84 ordinary pickups","Capture/restore architecture is runtime-confirmed across representative locations in all eight stages."],
        ["y","Nine-tier progression","85..7354 XP","Architecture exists, early tiers/lifecycle are confirmed, and shuffled order is integrated; exhaustive representative all-tier production coverage is still pending."],
        ["g","Nonblocking Power feedback","v23 async child","Power awards are synchronous while one guarded child owns the three 2-tick white pulses; rapid adjacent Power pickups still award immediately."],
        ["g","HP persistence","lifecycle v06","Static ownership and the accepted runtime lifecycle are closed: living re-entry may restore damaged HP, while death/Continue constructs full-health replacements."],
        ["g","Lives / continues persistence","lifecycle v06","Configured lives/continues, stock decrements, Continue reconstruction, and final no-continues Game Over reset are mapped and Runtime-confirmed on the reference route."],
        ["y","Full save structure","save system","Relevant fields and paths are mapped, not the complete save format."],
        ["y","Lifecycle v07 transport","0xA01B0C10 / ROM 0xF69240","The guarded edit routes hooks through t9 and spills the reason from t8 around the native call. The owner validated the pickups-ON ordinary-death route. The remaining lifecycle events were not individually retested in that proof.","Persistence-Inventory-and-Lifecycle.md#lifecycle-event-code-carried-in-k1--fixed-by-transport-v07-2026-11-06","Static-confirmed edit; bounded runtime proof","2026-11-11","y"]
      ]
    },
    {
      "name": "Files / arena / resources",
      "counts": {"g":12,"y":13,"b":15},
      "owner": "ROM-Overlay-and-Resource-Map.md",
      "findings": [
        ["g","Raw global-file loader","0x80065D64","Runtime-confirmed synchronous raw-file load path."],
        ["g","Arena synchronization helper","0x80066390","Bootstrap interaction is implementation-confirmed."],
        ["g","Resource-entry resolver","0x800281A0","Outer selector to stage-relative descriptor resolution is mapped."],
        ["g","Resource-backed actor helper","0x80028128","Constructor-helper contract is understood."],
        ["g","Native file-table use","global file table","Registration and relocation are used by multiple successful proofs."],
        ["y","Cross-stage resource planner","global-v2 resource materialization","The planner is integrated into the 85-check global pipeline with destination-native resource plans, eight appended 1 MiB stage slots, external-to-embedded translation, key masking, and destination wrappers. Full eight-stage/full-seed runtime coverage remains pending."],
        ["y","Arena lifetime / budget","16 KiB MKMSZR reservation","The 16 KiB arena-floor reservation is runtime-confirmed across all eight safe stages and allocator bounds are enforced, but whole-engine allocation behavior is not decompiled."],
        ["y","Foreign key resources","cross-stage items","Fire → Wind Circle v02 confirms masking/reveal/use/re-masking. The production materializer now separates logical key awards from destination-owned Wind/Water/Earth/Fire/Prison state and Bridge/Fortress activation gates; exhaustive runtime coverage remains pending."],
        ["g","Inventory HUD generated assets","0x01800000..0x01815200","Portrait atlas, relocated common image-package capacity, and fixed HUD data block have explicit generated-output ownership and bounded load/size contracts."]
      ]
    },
    {
      "name": "Native UI / text / render",
      "counts": {"g":9,"y":10,"b":21},
      "owner": "Native-HUD-and-UI.md",
      "findings": [
        ["g","Gameplay HUD owner","0x8005BFB0","HUD function and its submit calls are mapped."],
        ["g","Render-node allocator","0x8002018C","0x58-byte node allocation is runtime-confirmed."],
        ["g","Render-node submit","0x8001EAE4","Runtime-confirmed submission path used by MKMSZR UI."],
        ["g","Render-node structure","0x58 bytes","Vertex XY and per-vertex RGBA fields are documented."],
        ["g","Native text draw","0x80073E74","Arbitrary custom RDRAM strings render successfully."],
        ["g","Text width helper","0x80074084","Native font width path is identified and tested."],
        ["y","Alternate renderer family","0x80073CEC / 0x8001E578","Known renderer family, but not a universal HUD abstraction."],
        ["g","Textured HUD composition","Toasty CI4 v02 production","Nine 16-color CI4 slices, a 16-entry TLUT, timed lower-right presentation, successful-reaction trigger, and dedicated audio are runtime-confirmed on the accepted v02 route."],
        ["g","Native GAME SETTINGS reuse","0x800766BC / v02 control suite","The shared builder integrates TURN, ATTACK, SPECIALS, JUMP, RUN, EXIT, with CLASSIC / MODERN Attack and Specials, DPAD / BUTTON Jump, and HOLD / AUTO Run. The v02 composition is runtime-confirmed on the tested route."],
        ["g","Native Inventory HUD","v21 / 0x800742B8..0x800743A8","Colored STG# credentials, real titles, streamed portraits, STG CHECKS KEYS, REQUIRED POWERS X/Y, XX/85, and ordinary-row font/palette forwarding are Runtime-confirmed on the bounded TEST LAB route."],
        ["b","General renderer architecture","graphics engine","No comprehensive reconstruction of render queues/material state/frame composition yet."],
        ["y","Dynamic texture slots and upload capacity","0x8001C2B4 / 0x8001C424 / 0x800185B8","The slot has backing dimensions separate from current image dimensions. Uploads can overrun the backing slot, as observed with Sektor's rope companion. The downstream ownership of the slot height field is only partly cataloged.","Data-Structures-and-Encodings.md#dynamic-gameplay-texture-slot-record","Static-confirmed fields; bounded runtime overflow evidence","2026-11-11","y"]
      ]
    },
    {
      "name": "Fighter graphics / Type-5",
      "counts": {"g":17,"y":11,"b":12},
      "owner": "Data-Structures-and-Encodings.md",
      "findings": [
        ["g","Image dispatch","0x8000322C","Embedded image dispatch and the exact Type-5 special case are mapped."],
        ["g","Type-5 wrapper","0x80003314","Dimensions, model-table pointer, bitstream and arena-output contract are known."],
        ["g","Type-5 decoder","0x80065E00","2-row × 4-pixel block grammar is reconstructed."],
        ["g","Sub-Zero Type-5 corpus","341 frames","Entire stock fighter corpus has been decoded and benchmarked."],
        ["g","Type-5 re-encoder","encoder v2","Pixel round-trip and stock-parity compression behavior are implementation-confirmed."],
        ["g","Shared dictionary packing","multi-model Type-5","Multiple entropy models sharing one dictionary are understood and used."],
        ["g","Player TLUT / palette path","64-entry TLUT","Native fighter palette adaptation is runtime-confirmed."],
        ["g","Sektor transplant pipeline","MKT → MKMSZ","Large common animation sets and donor resource translation are runtime-confirmed."],
        ["y","Rare/special fighter presentation","fighter states","Many common states are known; special and rare families remain incomplete."],
        ["b","All fighter resource semantics","fighter package","Graphics storage is much better understood than every surrounding descriptor/control field."],
        ["g","Animation token and callback dispatch","0x800304C0 / table 0x8009F95C","The interpreter's word widths, cursor updates, operand counts, frame offsets, phase return values and nine callback targets are documented. Downstream meaning of token 5's return and the spawned effect identity remain open.","Data-Structures-and-Encodings.md#fighter-animation-script-grammar","Static-confirmed against clean ROM and Ghidra metadata","2026-11-11","y"],
        ["y","Description-driven fighter body","MKT Rev. 2 → native Type-5","The generic builder reproduces Sektor byte for byte and produced Reptile's accepted v03 body. Some roster codec-16 palette semantics are still open.","Fighter-Recompiler-Status.md","Implementation/CI-confirmed; bounded runtime body proof","2026-11-11","y"],
        ["g","Runtime palette rebinding (historical Rainbow proof)","0x8001BDA0 / file 0x87 + raw file 0x92","The bounded proof established the rebinding and cache-invalidation path. The Rainbow outfit was retired from the product after a loader conflict with imported fighters.","Palette-and-Recoloring.md","Historical bounded runtime proof","2026-11-11","g"]
      ]
    },
    {
      "name": "Player construction / actions",
      "counts": {"g":7,"y":11,"b":22},
      "owner": "Player-Actions-and-Special-Moves.md",
      "findings": [
        ["g","Player construction path","0x8002EC78 / 0x8002ECF4","Correct player-construction family is identified."],
        ["g","Horizontal velocity helper","0x8002B1EC","Writes actor movement fields and corrected a major earlier misconception."],
        ["g","TURN world-direction / facing-lock controls","0x800293B0 / 0x800294DC / 0x80015754","The production TOGGLE/LOCK model is runtime-confirmed: LOCK corrects opposite-direction facing, preserves held-Turn backpedal, suppresses Turn states only when effective, and defers to bounded forced-facing policy."],
        ["y","ATTACK semantic translation","0x80014B38 / 0x8004D7AC","The context-priority input map, live backward predicate, Block startup cancellation and stock combo-parser seam are documented and runtime-confirmed on tested routes; the whole combat engine is not decompiled."],
        ["y","SPECIALS chords and native eligibility","0x8003C9F8 / 0x8003CAF4","Facing-relative MODERN chords and native Slide/Super Slide progression recognizers are mapped; other stock special-action internals remain partial."],
        ["y","JUMP button and ledge routes","0x8002B1F8 / state 0x030F","Standing, locomotion, running-jump classifier and hanging-ledge input routes are bounded and tested; the complete jump/action state machine is not mapped."],
        ["y","RUN predicate and live transitions","0x8002EAFC / 0x80029778","HOLD/AUTO preserves the stock predicate and remapped physical Run snapshot, with a post-classifier Run-to-Walk seam; overall locomotion remains partially mapped."],
        ["y","Action callback installer","0x80032CD4","Top-level callback transfer/non-return contract is understood; whole action system is not."],
        ["y","Scheduler transfer shim","0x8004AA4C","Correct context-transfer role is known."],
        ["y","Ice action root","0x8004AB84","Complete native ice action root is identified."],
        ["y","Projectile flight / cadence","0x8004B82C + v74/v75","Projectile ownership and host integration are mapped; folded 60→30 Hz cadence and bounded velocity calibration are runtime-confirmed, while a generic projectile adapter remains incomplete."],
        ["y","Projectile setup","0x8004CC14","Projectile actor-field behavior is mapped."],
        ["y","MKT combo grammar translation","runtime proof v62","Record structure is compatible, but donor reaction selectors still require semantic translation."],
        ["b","Complete player state machine","all player actions","Only selected roots and state families are mapped."],
        ["g","Stock floor matching and airborne crossing","0x80025ED4 / stride 0xB8","The ordinary record path is mapped from table/count/enabled bytes through x/z matching, point height and previous-y crossing to the actor and controller floor writes. Shaping modes, moving platforms and ledge-state meaning are outside this unit.","Data-Structures-and-Encodings.md#stock-floor-regions","Static-confirmed; bounded floor probe","2026-11-11","y"],
        ["y","Ledge entry and player state 1","0x80025ED4 / 0x80025E48","The flag-0x800 region branch snaps the actor to an endpoint and installs the callback that requests player state 1. Identifying state 1 as the ledge hang remains a strong inference.","Data-Structures-and-Encodings.md#stock-floor-regions","Static-confirmed mechanics; state meaning inferred","2026-11-11","y"]
      ]
    },
    {
      "name": "Combat / hit / collision",
      "counts": {"g":3,"y":10,"b":27},
      "owner": "Player-Actions-and-Special-Moves.md",
      "findings": [
        ["g","Sektor combo control records","runtime proof v62","Several genuine MKT combo strings are runtime-confirmed after selector translation."],
        ["y","Grab / throw attacker path","fighter action","Runtime behavior/presentation has been ported, but the whole combat contract is not reconstructed."],
        ["y","Knockback reaction semantics","reaction selectors","Important cross-game selector mismatch is proven; full semantic map is incomplete."],
        ["y","Hit / knockdown / stumble states","player reactions","Several individual presentation states are runtime-confirmed."],
        ["b","Collision engine","combat collision","No complete hitbox/hurtbox/collision-system decompilation exists."],
        ["b","Damage resolution","combat core","Damage calculation and resolution are not comprehensively reconstructed."],
        ["b","Victim reaction state machine","combat reactions","Player-victim grab/throw and broader reaction families remain incomplete."],
        ["y","Native enemy-projectile path used by the player","Type 4 projectile / Reptile forceball v06–v07","The owner tested a Reptile forceball launched by Sub-Zero through the native enemy-projectile path. The data-driven backend rebuilt the proof byte for byte. Wider collision and reaction behavior remains partial.","Fighter-Recompiler-Components.md#generic-projectile-lowering","Bounded runtime proof; byte-identical backend rebuild","2026-11-11","y"]
      ]
    },
    {
      "name": "Enemy spawning",
      "counts": {"g":5,"y":12,"b":23},
      "owner": "Enemy-Randomization.md",
      "findings": [
        ["g","Enemy stream interpreter","0x80071500","Shared ordinary-enemy command interpreter is identified."],
        ["g","Spawn parameter helper","0x800719F0","Spawn index/type helper is mapped."],
        ["g","Shared fighter constructor","0x80071B20","Resource-slot lookup is static/runtime-confirmed."],
        ["g","Lower fighter allocator","0x8002FCDC","Descriptor/type storage path is mapped."],
        ["g","Spawn-record grammar","0x1C / 0x20 records","Coordinates, type, quota and activation fields are documented."],
        ["y","Enemy stream opcodes","0..9","Several effects are known, but gameplay meanings of opcodes 1, 2 and 9 remain unresolved."],
        ["y","Cross-stage enemy residency","Temple monk in Fire","Construction/resource feasibility is runtime-confirmed; arbitrary compatibility is not."],
        ["b","All encounter scripts","stage encounters","Ordinary streams are only one part of encounter orchestration."]
      ]
    },
    {
      "name": "Enemy behavior / AI",
      "counts": {"g":1,"y":6,"b":33},
      "owner": "Enemy-Randomization.md",
      "findings": [
        ["y","Imported monk behavior","runtime proof","The foreign monk moved, fought and could be killed, proving native AI remained functional."],
        ["y","Enemy type contracts","resource + descriptor","Some construction dependencies are known."],
        ["b","Enemy decision logic","AI","No broad function-level reconstruction of AI decision trees/state machines."],
        ["b","Enemy navigation / pursuit","AI movement","Behavior is observed, while internals remain largely unmapped."],
        ["b","Death / despawn presentation","enemy lifecycle","Known missing compatibility dependency in the imported-monk proof."]
      ]
    },
    {
      "name": "Stage overlays / scripting",
      "counts": {"g":3,"y":7,"b":30},
      "owner": "Stage-Catalogs.md",
      "findings": [
        ["g","Stage key callbacks","overlay functions","Fire/Wind/Water/Earth/Bridge award callbacks are individually identified."],
        ["y","Auxiliary trigger records","0x3C-byte grammar","Activation/script-volume structure is partially decoded."],
        ["y","Overlay-specific functions","0x802xxxxx","Several useful callbacks are mapped, but overlays remain stage-specific and far from complete."],
        ["b","Complete stage scripting VM","stage logic","No complete reconstruction of stage event scripting and state progression exists."],
        ["b","Hazards / puzzles / doors","stage mechanics","Only task-specific pieces have been investigated."],
        ["g","Water boss-area checkpoint selector write","Water file 0xA1 · VA 0x802F11A0 · ROM 0xB9330","Stock increments the current selector and commits it before reconstruction. The guarded edit sets it to 6 and passed the reported skipped-predecessor route. Re-entry with a later selector remains pending.","Stage-Catalog-Water.md#scripted-boss-area-checkpoint--water-selector-fix-2026-11-06","Static-confirmed edit; bounded owner runtime report","2026-11-11","y"]
      ]
    },
    {
      "name": "Audio / music / SFX",
      "counts": {"g":4,"y":6,"b":30},
      "owner": "Sounds-and-Music.md",
      "findings": [
        ["g","Gameplay SFX wrapper","0x80064C18","Descriptor-table lookup and playback handoff are mapped."],
        ["g","Raw sound playback entry","0x80080A88","Runtime sound-definition selection path is identified."],
        ["y","Voice allocator","0x8007EC4C","Low-level sound-definition consumption is statically mapped."],
        ["g","Donor SFX translation","MKT → MKMSZ audio","Dedicated donor playback is Runtime-confirmed for Toasty and both Temple intro positions. Temple keeps descriptors 0x41/0x42/0x43 stock, edits only events 123/124/125, and uses isolated host 486→329→319; the rejected 0x20A route remains stock for Bridge/Prison audio."],
        ["b","Music sequencer","music engine","No comprehensive music-system reconstruction is documented."],
        ["b","Sound-bank loader/editor","audio system","Only selected playback/bank paths are understood."],
        ["g","AI FIFO enqueue and PCM sizing","0x8007D4A8 / 0x8008A500 / ROM 0x1F54","The prior buffer is submitted first. A full two-slot FIFO rejects it, then head-only AI_LEN feedback plus the boot reserve sizes the next buffer. The guarded 320→272 reserve change passed the bounded vanilla speed-up comparison. The source of occasional pops remains open.","Sounds-and-Music.md#vanilla-audio-fifo-speed-up--root-cause-and-fix-2026-11-06","Static-confirmed enqueue and sizing; bounded runtime comparison","2026-11-11","y"]
      ]
    },
    {
      "name": "Bosses / camera / effects / misc",
      "counts": {"g":1,"y":5,"b":34},
      "owner": "Function-Registry.md",
      "findings": [
        ["y","Boss exclusions / constructors","special encounters","Several bosses are identified as dedicated non-ordinary construction paths."],
        ["y","Effects/render constructor candidate","0x8005EF5C","Correctly classified away from enemy loading, but not deeply reconstructed."],
        ["y","Geometry/camera family","0x80064788","Known not to be the sought enemy loader; internal semantics remain limited."],
        ["b","Boss AI and scripting","bosses","Per-boss systems are essentially separate reverse-engineering projects."],
        ["b","Camera system","camera","No complete camera-control reconstruction."],
        ["b","Particles / environmental FX","effects","Broadly unmapped."],
        ["b","Misc engine services","engine","Large portions of the executable have not been studied at function-semantic depth."],
        ["g","Interrupt register preservation at lifecycle seams","0x80095DE0 / 0x8009670C","The exception handler overwrites k0/k1 and does not restore them on the traced return. t9, t8 and at are saved and restored. This is the documented register contract for the v07 lifecycle transport.","Persistence-Inventory-and-Lifecycle.md#lifecycle-event-code-carried-in-k1--fixed-by-transport-v07-2026-11-06","Static-confirmed register contract","2026-11-11","y"]
      ]
    }
  ]
};
