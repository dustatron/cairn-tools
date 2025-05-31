import { SpellLister } from "./SpellLister";
import { createServerPb } from "@/utils/pocketbase";
import { title } from "@/components/primitives";

const getSpellList = async () => {
  const pb = await createServerPb();
  const spellList = await pb
    .collection("spells")
    .getFullList({ sort: "number" });
  return spellList;
};

export default async function SpellPage() {
  const spellList = await getSpellList();

  return (
    <div>
      <h1 className={title()}>Spells</h1>
      <div className="mt-2">
        <SpellLister list={spellList} />
      </div>
    </div>
  );
}
