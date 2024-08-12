import { title } from "@/components/primitives";
import SpellCard from "./SpellCard";
import { createServerPb } from "@/utils/pocketbase";
import { SpellLister } from "./SpellLister";
import { AddSpells } from "./AddSpell";

const getSpellList = async () => {
  const pb = await createServerPb();
  const monsterList = await pb
    .collection("spells")
    .getFullList({ sort: "-created" });

  return monsterList;
};

export default async function PricingPage() {
  const spellList = await getSpellList();
  return (
    <div>
      <h1 className={title()}>Spells</h1>
      <div>{spellList && <SpellLister list={spellList} />}</div>
    </div>
  );
}
