// Snapshot of the eight canonical MKMSZR stage catalogs.
window.MKMSZ_STAGE_DATA = {
  "snapshot": "2026-09-27",
  "sourceCommit": "f00c1d97cc5b491593790e8fe0544176c63ff26a",
  "stages": [
    {
      "name": "Temple",
      "compact": 0,
      "native": 0,
      "resourceFileId": null,
      "fileTableEntry": "0x000A5490",
      "resourceRom": "0x00513710..0x0052336F",
      "fileSize": "0xFC60 (64608 bytes)",
      "runtimeBase": "0x80226E28",
      "outerSlots": 17,
      "emptySlots": "1, 2, 11, 12, 13",
      "unknownSlots": "none",
      "pickups": 4,
      "pickupMix": [
        {
          "name": "Herbs",
          "count": 4
        }
      ],
      "evidence": [
        "Static-confirmed: all four ordinary pickup records, the 17 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the resource-file mapping was matched against captured runtime memory, and persistence testing reached completed Temple ordinary-pickup coverage. This does not broaden into a claim about all 84 records in all stages.",
        "Temple's scripted Map is a separate special-actor path, not a fifth ordinary 0x30-byte record."
      ],
      "notes": [
        "All four ordinary pickup records are Herbs and all use stage-local resource slot 15.",
        "The Temple Map is tracked by the legacy runtime work at collected flag RDRAM 0x8026E9A4, but it is not one of the four ordinary records and is not assigned an ordinary resource slot here.",
        "The Map's Temple trigger/reward separation and possible 85th-check/global-shuffle policy are owned by Global item materialization and solvability.",
        "Cross-stage Map retention/removal and run-lifecycle behavior are owned by Persistence, inventory, and lifecycle. This catalog records only the Temple-local boundary and does not make the Map policy canonical here."
      ],
      "source": "Stage-Catalog-Temple.md"
    },
    {
      "name": "Wind",
      "compact": 1,
      "native": 1,
      "resourceFileId": null,
      "fileTableEntry": "0x000A561C",
      "resourceRom": "0x00698680..0x0069A81F",
      "fileSize": "0x21A0 (8608 bytes)",
      "runtimeBase": "0x80264FC8",
      "outerSlots": 12,
      "emptySlots": "6, 7, 8, 9",
      "unknownSlots": "none",
      "pickups": 6,
      "pickupMix": [
        {
          "name": "Herbs",
          "count": 2
        },
        {
          "name": "Extra-life urn",
          "count": 1
        },
        {
          "name": "Wind Circle",
          "count": 1
        },
        {
          "name": "Wind Triangle",
          "count": 1
        },
        {
          "name": "Wind Three Bars",
          "count": 1
        }
      ],
      "evidence": [
        "Static-confirmed: all six ordinary pickup records, the 12 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the complete 0x21A0-byte resource file was matched byte-for-byte at RDRAM 0x80264FC8 during live Wind gameplay.",
        "Runtime-confirmed: the all-eight-stage persistence test collected/restored a representative Wind ordinary pickup. The six Wind records have not been individually exhausted one by one in runtime testing."
      ],
      "notes": [
        "The six ordinary records are two Herbs, one Extra-life urn, and the three Wind icons.",
        "The progression metadata remains stage-local: Wind Triangle requires wind-circle; Wind Three Bars requires wind-triangle.",
        "Occupied slot 3 has no user among the six ordinary pickup records. Its non-pickup gameplay owner remains unresolved; the slot stays protected rather than being treated as available.",
        "No outer slot is currently classified unknown/nonstandard; empty stock slots are 6, 7, 8, 9. Per the shared schema, those zeros are logical selector capacity only and do not establish free physical storage."
      ],
      "source": "Stage-Catalog-Wind.md"
    },
    {
      "name": "Water",
      "compact": 2,
      "native": 2,
      "resourceFileId": "0x75",
      "fileTableEntry": "0x000A558C",
      "resourceRom": "0x00611780..0x00617C5F",
      "fileSize": "0x64E0 (25824 bytes)",
      "runtimeBase": "0x802504A8",
      "outerSlots": 29,
      "emptySlots": "8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19",
      "unknownSlots": "none",
      "pickups": 9,
      "pickupMix": [
        {
          "name": "Health urn",
          "count": 2
        },
        {
          "name": "Mana pickup",
          "count": 1
        },
        {
          "name": "Herbs",
          "count": 1
        },
        {
          "name": "Potion",
          "count": 1
        },
        {
          "name": "Extra-life urn",
          "count": 1
        },
        {
          "name": "Water Triangle",
          "count": 1
        },
        {
          "name": "Water Three Bars",
          "count": 1
        },
        {
          "name": "Water Moon",
          "count": 1
        }
      ],
      "evidence": [
        "Static-confirmed: all nine ordinary pickup records, all 29 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the complete 0x64E0-byte stage resource file was matched byte-for-byte at RDRAM 0x802504A8 during live Water gameplay.",
        "Runtime-confirmed: the all-eight-stage persistence validation collected/restored a representative Water ordinary pickup. The nine Water records have not been individually exhausted one by one in runtime testing.",
        "Water's three stage key pickups use stage-qualified overlay callback VA 0x802F2448; this address is Water-overlay evidence, not a globally resident callback identity."
      ],
      "notes": [
        "The complete 0x64E0-byte ROM resource file matches RDRAM at 0x802504A8 byte-for-byte in live Water gameplay.",
        "All nine standard 0x30-byte pickup records are contiguous and mapped: three Water icons, two Health urns, and one each of Extra-life urn, Herbs, mana, and Potion.",
        "The supplied Lua comments identify slot 26 as mana and substitute Herbs in the virtual item pool; the native callback 0x80038A58 and presentation pointer 0x800B1C14 remain distinct from Herbs.",
        "Water's progression metadata remains stage-local: Water Three Bars requires water-triangle; Water Moon requires water-three-bars; the second Health urn requires water-moon."
      ],
      "source": "Stage-Catalog-Water.md"
    },
    {
      "name": "Earth",
      "compact": 3,
      "native": 3,
      "resourceFileId": "0x88",
      "fileTableEntry": "0x000A5670",
      "resourceRom": "0x006BAEC0..0x006DD46F",
      "fileSize": "0x225B0 (140720 bytes)",
      "runtimeBase": "0x802434B8",
      "outerSlots": 65,
      "emptySlots": "41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64",
      "unknownSlots": "3, 35, 38, 43",
      "pickups": 20,
      "pickupMix": [
        {
          "name": "Earth Square",
          "count": 1
        },
        {
          "name": "Earth Four Square",
          "count": 1
        },
        {
          "name": "Earth Triangle",
          "count": 1
        },
        {
          "name": "Formula",
          "count": 1
        },
        {
          "name": "Extra-life urn",
          "count": 5
        },
        {
          "name": "Herbs",
          "count": 7
        },
        {
          "name": "Mana pickup",
          "count": 2
        },
        {
          "name": "Eye",
          "count": 1
        },
        {
          "name": "Shield",
          "count": 1
        }
      ],
      "evidence": [
        "Static-confirmed: all 20 ordinary pickup records, all 65 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the complete 0x225B0-byte stage resource file was matched byte-for-byte at RDRAM 0x802434B8 during live Earth gameplay.",
        "Runtime-confirmed: the all-eight-stage persistence validation collected/restored a representative Earth ordinary pickup. The 20 Earth records have not been individually exhausted one by one in runtime testing.",
        "Earth's three stage key pickups use stage-qualified overlay callback VA 0x802F52B0; this address is Earth-overlay evidence, not a globally resident callback identity."
      ],
      "notes": [
        "The complete 0x225B0-byte ROM resource file matches RDRAM at 0x802434B8 byte-for-byte in live Earth gameplay.",
        "All 20 standard 0x30-byte pickup records are contiguous and mapped, including the three Earth icons and six ordinary item/resource slots.",
        "The supplied Lua comments identify the two slot-15 pickups as mana and substitute Herbs in the virtual item pool; the native callback 0x80038A58 and presentation pointer 0x800B1C14 remain distinct from Herbs.",
        "Earth progression metadata remains stage-local: Earth Four Square requires earth-square; Earth Triangle requires earth-four-square; later location requirements are preserved row-by-row in the ordinary-pickup table."
      ],
      "source": "Stage-Catalog-Earth.md"
    },
    {
      "name": "Prison",
      "compact": 4,
      "native": 4,
      "resourceFileId": "0x49",
      "fileTableEntry": "0x000A537C",
      "resourceRom": "0x0041C680..0x00420F6F",
      "fileSize": "0x48F0 (18672 bytes)",
      "runtimeBase": "0x801FB798",
      "outerSlots": 12,
      "emptySlots": "none",
      "unknownSlots": "none",
      "pickups": 10,
      "pickupMix": [
        {
          "name": "Prison L1",
          "count": 1
        },
        {
          "name": "Prison L2",
          "count": 1
        },
        {
          "name": "Prison L3",
          "count": 1
        },
        {
          "name": "Strength urn",
          "count": 1
        },
        {
          "name": "Herbs",
          "count": 6
        }
      ],
      "evidence": [
        "Static-confirmed: all 10 ordinary pickup records, all 12 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the Prison resource-file mapping was matched against captured runtime memory at 0x801FB798.",
        "Runtime-confirmed: representative Prison ordinary-pickup collection/persistence is established, but all 10 Prison records have not been individually exhausted one by one in runtime testing.",
        "Runtime-confirmed, proof-only: Prison is the destination used for the six-Herbs extension-selector proof, single imported embedded Potion proof, converted Health-urn proof, and the composed five-import visual stress proof. Exact stage-local configurations are preserved below; the generalized conclusions remain with the global materialization owner."
      ],
      "notes": [
        "The stock resource file has exactly 12 outer slots. Its outer table occupies file-relative 0x0000..0x002F; the first descriptor starts immediately at 0x30. No stock outer slot is empty. Inserting a 13th stock-table word in place would overwrite the first descriptor.",
        "That stock-table layout does not mean Prison lacks ordinary-pickup selector expansion capacity. The later extension-selector mechanism avoids inserting into the stock table. The lookup mechanics and their interpretation are canonical in Global item materialization and solvability.",
        "Disposable Proof D — Runtime-confirmed, proof-only: the stock 0x48F0-byte Prison resource file was relocated/expanded by four bytes. A selector word appended at file-relative 0x48F0 pointed to the existing Herbs descriptor 0x255C, producing selector 0x123C (0x48F0 / 4). All six Prison Herbs ordinary records were changed from stock selector 8 to 0x123C. Two early Herbs were manually collected and rendered/awarded like vanilla Herbs; the other four were not individually runtime-tested in that proof.",
        "Disposable Proof F — Runtime-confirmed, proof-only: stock Prison selectors remained intact. Extension selector 0x123C pointed to an appended, file-relative-pointer-rebased copy of Water's embedded Potion bundle. One early Prison Herbs location became Potion while the remaining Herbs records stayed stock. The imported Potion and an untouched Herbs control both rendered and awarded correctly."
      ],
      "source": "Stage-Catalog-Prison.md"
    },
    {
      "name": "Fire",
      "compact": 5,
      "native": 5,
      "resourceFileId": "0x3C",
      "fileTableEntry": "0x000A52E0",
      "resourceRom": "0x00388260..0x0038A78F",
      "fileSize": "0x2530 (9520 bytes)",
      "runtimeBase": "0x80224C88",
      "outerSlots": 27,
      "emptySlots": "5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19",
      "unknownSlots": "none",
      "pickups": 16,
      "pickupMix": [
        {
          "name": "Potion",
          "count": 2
        },
        {
          "name": "Formula",
          "count": 1
        },
        {
          "name": "Health urn",
          "count": 2
        },
        {
          "name": "Herbs",
          "count": 4
        },
        {
          "name": "Fire icon param 0",
          "count": 1
        },
        {
          "name": "Shield",
          "count": 1
        },
        {
          "name": "Extra life",
          "count": 2
        },
        {
          "name": "Fire icon param 1",
          "count": 1
        },
        {
          "name": "Eye",
          "count": 1
        },
        {
          "name": "Fire icon param 2",
          "count": 1
        }
      ],
      "evidence": [
        "Static-confirmed: all 16 ordinary pickup records, all 27 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the Fire resource-file mapping was matched against captured runtime memory at 0x80224C88.",
        "Runtime-confirmed: representative Fire ordinary-pickup collection/persistence is established, but all 16 Fire records have not been individually exhausted one by one in runtime testing.",
        "Fire's three icon pickups call stage-qualified overlay VA 0x802F0EBC. That address is Fire-overlay evidence and must not be treated as a globally resident callback identity."
      ],
      "notes": [
        "Stock Fire has 15 empty logical outer slots, selectors 5..19, in the 27-word table. This is Static-confirmed selector-table capacity only. It is not evidence of 15 free physical payload regions, unused RDRAM, or production-safe allocation space, and the foreign-key proof below runtime-tested only one of those logical slots.",
        "Slots 20..26 are stock ordinary-item resources. Fire Potion (slot 24) uses external IDs 0x27F..0x286; Fire Health urn (slot 26) uses external IDs 0x28F..0x292. Formula, Eye, Shield, Extra-life urn, and Health urn also preserve their exact external-ID records in the table above. Cross-stage storage-form equivalence and external-to-embedded conversion are owned by Global item materialization and solvability.",
        "Early raw Prison-to-Fire identity copy — Rejected / failed in this bounded route: copying the Prison identity without destination resource materialization produced no usable item because the source selector was not meaningful against Fire's stage resource file.",
        "Foreign Prison Level 1 key proof — Runtime-confirmed, proof-only: clean stock slot 5 was populated with the imported key bundle. The appended descriptor began at file-relative 0x2530; appended resource records occupied exact file-relative interval 0x2558..0x25F7. The proof resource file expanded from stock size 0x2530 to 0x2BE8, so the full appended proof-only file-relative region is 0x2530..0x2BE7."
      ],
      "source": "Stage-Catalog-Fire.md"
    },
    {
      "name": "Bridge",
      "compact": 6,
      "native": 8,
      "resourceFileId": "0x27",
      "fileTableEntry": "0x000A51E4",
      "resourceRom": "0x00296140..0x0029A46F",
      "fileSize": "0x4330 (17200 bytes)",
      "runtimeBase": "0x80243000",
      "outerSlots": 25,
      "emptySlots": "4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20",
      "unknownSlots": "none",
      "pickups": 10,
      "pickupMix": [
        {
          "name": "Bridge Omega",
          "count": 1
        },
        {
          "name": "Bridge Rings",
          "count": 1
        },
        {
          "name": "Bridge Arrow",
          "count": 1
        },
        {
          "name": "Health urn",
          "count": 4
        },
        {
          "name": "Potion",
          "count": 1
        },
        {
          "name": "Herbs",
          "count": 1
        },
        {
          "name": "Extra-life urn",
          "count": 1
        }
      ],
      "evidence": [
        "Static-confirmed: all 10 ordinary pickup records, all 25 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the complete Bridge resource file was byte-matched against captured runtime memory at 0x80243000.",
        "Runtime-confirmed: representative Bridge ordinary-pickup collection/persistence is established, but all 10 Bridge records have not been individually exhausted one by one in runtime testing.",
        "Bridge's three icon pickups call stage-qualified overlay VA 0x802EF178; this address is Bridge-overlay evidence and must not be treated as a globally resident callback identity."
      ],
      "notes": [
        "Stock Bridge has 17 empty logical outer slots, selectors 4..20, in the 25-word table. This is Static-confirmed selector-table capacity only; it is not evidence of 17 free physical payload regions, unused RDRAM, or production-safe allocation space.",
        "Slots 21 and 22 are embedded Herbs and Extra-life-urn bundles. Slot 23 is Potion using external IDs 0x27F..0x286; slot 24 is Health urn using external IDs 0x28F..0x292.",
        "Matching external-family evidence — Static-confirmed: Bridge contains Health-urn payloads matching the same 0x28F..0x292 family used by Water and Fire. The preserved extracted raw payload lengths are 340, 272, 272, 272 bytes; the conversion/round-trip interpretation and runtime proof belong to Global item materialization and solvability, not this stage page.",
        "No Bridge-specific runtime cross-stage materialization proof is established by that payload match. It is static source/resource evidence only."
      ],
      "source": "Stage-Catalog-Bridge.md"
    },
    {
      "name": "Fortress",
      "compact": 7,
      "native": 9,
      "resourceFileId": "0x43",
      "fileTableEntry": "0x000A5334",
      "resourceRom": "0x003B9700..0x003BCD1F",
      "fileSize": "0x3620 (13856 bytes)",
      "runtimeBase": "0x801F4E20",
      "outerSlots": 7,
      "emptySlots": "none",
      "unknownSlots": "none",
      "pickups": 9,
      "pickupMix": [
        {
          "name": "Crystal Kia",
          "count": 1
        },
        {
          "name": "Crystal Jataaka",
          "count": 1
        },
        {
          "name": "Crystal Sareena",
          "count": 1
        },
        {
          "name": "Herbs",
          "count": 6
        }
      ],
      "evidence": [
        "Static-confirmed: all 9 ordinary pickup records, all 7 stock outer slots, and the recognized resource records below are decoded from the clean USA N64 ROM.",
        "Runtime-confirmed: the complete Fortress resource file was byte-matched against captured runtime memory at 0x801F4E20.",
        "Runtime-confirmed: representative Fortress ordinary-pickup collection/persistence is established, but all 9 Fortress records have not been individually exhausted one by one in runtime testing.",
        "Implementation/static-confirmed, proof-only; runtime Pending: the composed five-import stress ROM contains the equivalent Fortress construction for Potion, Urn of Vitality, Formula, Eye, and Shield, with another Herbs record retained byte-for-byte as a control. The Fortress half has not been manually runtime-tested and must not inherit Prison's Runtime-confirmed status."
      ],
      "notes": [
        "The stock resource file has exactly 7 occupied outer slots. Its outer table occupies file-relative 0x0000..0x001B; the first descriptor starts immediately at 0x1C. There is no empty stock logical selector.",
        "Adding an eighth stock-table word in place would overwrite that first descriptor. This is a Static-confirmed stock-layout fact, not a claim that Fortress lacks all ordinary-pickup selector expansion paths.",
        "Slot 5 aliases the Herbs descriptor 0x1338 used by slot 3. Slots 4 and 6 have no ordinary-pickup users, but all three remain protected until other Fortress actor/script references are resolved.",
        "The crystal callback parameters are raw 0x00008000, 0x00008001, and 0x00008002; their low selectors correspond to inventory IDs 0x20, 0x21, and 0x22 through the stage-dependent callback, while the high-bit meaning remains unresolved."
      ],
      "source": "Stage-Catalog-Fortress.md"
    }
  ]
};
