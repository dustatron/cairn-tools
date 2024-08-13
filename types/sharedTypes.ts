import { MonstersRecord, RelicsRecord, SpellsRecord } from "./pocketbase-types";

export type LocalMonsterRecord = {
  monsterList: MonstersRecord[];
};
export type LocalSpellRecord = {
  spellList: SpellsRecord[];
};
export type LocalRelicsRecord = {
  relicList: RelicsRecord[];
};
