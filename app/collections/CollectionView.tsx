"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import clsx from "clsx";

import { MONSTER_KEY, SPELL_KEY, RELIC_KEY } from "@/types/keys";
import {
  LocalMonsterRecord,
  LocalRelicsRecord,
  LocalSpellRecord,
} from "@/types/sharedTypes";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { MonsterTables } from "@/components/MonsterTables";
import SpellTable from "../spells/SpellTable";
import RelicTable from "../relics/RelicTable";

export function CollectionView() {
  const [monsterStore] = useLocalStorage<LocalMonsterRecord>(MONSTER_KEY);
  const [spellStore] = useLocalStorage<LocalSpellRecord>(SPELL_KEY);
  const [relicStore] = useLocalStorage<LocalRelicsRecord>(RELIC_KEY);

  return (
    <Tabs aria-label="Tabs colors" color="primary" radius="sm">
      <Tab key="mosters" title="Monsters">
        {monsterStore?.monsterList?.length ? (
          <MonsterTables list={monsterStore.monsterList} />
        ) : (
          "no monsters selected"
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
