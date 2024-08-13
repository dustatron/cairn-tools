import { MonsterLister } from "./MonsterLister";

import { title } from "@/components/primitives";
import { createServerPb } from "@/utils/pocketbase";

const getMonsterList = async () => {
  const pb = await createServerPb();
  const monsterList = await pb
    .collection("monsters")
    .getFullList({ sort: "-created" });

  return monsterList;
};

export default async function MonsterPage() {
  const monsterList = await getMonsterList();

  return (
    <div>
      <h1 className={title()}>Monster List</h1>
      <div className="mt-2">
        <MonsterLister list={monsterList} />
      </div>
    </div>
  );
}
