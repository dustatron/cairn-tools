import { MonsterLister } from "./MonsterLister";

import { title } from "@/components/primitives";
import { createServerPb, clientPB } from "@/utils/pocketbase";
import { Button } from "@nextui-org/button";
import { AddMonster } from "./AddMonster";

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
    <div className="">
      <h1 className={title()}>Monster List</h1>
      <div className="pt-2">
        {monsterList.length && <MonsterLister list={monsterList} />}
      </div>
    </div>
  );
}
