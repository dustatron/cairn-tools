"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
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
  const [monsterStore] = useLocalStorage<LocalMonsterRecord>(
    "cairn-monster-selects",
  );
  const [spellStore] = useLocalStorage<LocalSpellRecord>("cairn-spell-selects");
  const [relicStore] = useLocalStorage<LocalRelicsRecord>(
    "cairn-relic-selects",
  );

  return (
    <Tabs aria-label="Tabs colors" color="primary" radius="sm">
      <Tab key="mosters" title="Monsters">
        {monsterStore?.monsterList?.length ? (
          <MonsterTables list={monsterStore.monsterList} />
        ) : (
          <div>
            <p>No Monsters selected</p>
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
        )}
      </Tab>
      <Tab key="spells" title="Spells">
        {spellStore?.spellList?.length ? (
          <SpellTable list={spellStore.spellList} />
        ) : (
          "no spells selected"
        )}
      </Tab>
      <Tab key="relics" title="Relics">
        {relicStore?.relicList?.length ? (
          <RelicTable list={relicStore.relicList} />
        ) : (
          "no relics selected"
        )}
      </Tab>
    </Tabs>
  );
}
