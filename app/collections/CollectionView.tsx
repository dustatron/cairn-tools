"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

import SpellTable from "../spells/SpellTable";
import RelicTable from "../relics/RelicTable";

import {
  LocalMonsterRecord,
  LocalRelicsRecord,
  LocalSpellRecord,
} from "@/types/sharedTypes";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { MonsterTables } from "@/components/MonsterTables";

export function CollectionView() {
  const [localStorageMonsters, setToLsMonsters] =
    useLocalStorage<LocalMonsterRecord>("cairn-monster-selects");

  const [spellStore, setToLsSpells] = useLocalStorage<LocalSpellRecord>(
    "cairn-spell-selects"
  );
  const [relicStore, setToLsRelics] = useLocalStorage<LocalRelicsRecord>(
    "cairn-relic-selects"
  );

  return (
    <Tabs aria-label="Tabs colors" color="primary" radius="sm">
      <Tab key="mosters" title="Monsters">
        <div style={{ padding: "0 0 15px 0" }}>
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/monsters"
          >
            Add Monsters
          </Link>
        </div>

        {localStorageMonsters?.monsterList?.length ? (
          <MonsterTables
            list={localStorageMonsters.monsterList}
            localStorage={localStorageMonsters}
            setToLocalStorage={setToLsMonsters}
          />
        ) : (
          <div>
            <p>No Monsters selected</p>
          </div>
        )}
      </Tab>
      <Tab key="spells" title="Spells">
        <div style={{ padding: "0 0 15px 0" }}>
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/spells"
          >
            Add Spells
          </Link>
        </div>
        {spellStore?.spellList?.length ? (
          <SpellTable
            list={spellStore.spellList}
            localStorage={spellStore}
            setToLocalStorage={setToLsSpells}
          />
        ) : (
          "no spells selected"
        )}
      </Tab>
      <Tab key="relics" title="Relics">
        <div style={{ padding: "0 0 15px 0" }}>
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/relics"
          >
            Add relics
          </Link>
        </div>
        {relicStore?.relicList?.length ? (
          <RelicTable
            list={relicStore.relicList}
            localStorage={relicStore}
            setToLocalStorage={setToLsRelics}
          />
        ) : (
          "no relics selected"
        )}
      </Tab>
    </Tabs>
  );
}
