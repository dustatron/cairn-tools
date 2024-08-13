import RelicList from "./RelicList";

import { title } from "@/components/primitives";
import { createServerPb } from "@/utils/pocketbase";

const getSpellList = async () => {
  const pb = await createServerPb();
  const monsterList = await pb
    .collection("relics")
    .getFullList({ sort: "-created" });

  return monsterList;
};

export default async function RelicPage() {
  const relicList = await getSpellList();

  return (
    <div>
      <h1 className={title()}>Relics</h1>
      <div className="mt-2">
        <RelicList relicList={relicList} />
      </div>
    </div>
  );
}
