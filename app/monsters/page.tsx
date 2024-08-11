import { MonsterLister } from "./MonsterLister";

import { title } from "@/components/primitives";
import { createServerPb } from "@/utils/pocketbase";

const getMonsterList = async () => {
  const pb = await createServerPb();
  const monsterList = await pb.collection("monsters").getFullList();

  console.log("monster list in fetcher", monsterList);

  return monsterList;
};

export default async function MonsterPage() {
  const monsterList = await getMonsterList();

  console.log("monster list in component", monsterList);

  return (
    <div>
      <h1 className={title()}>Monsters</h1>
      <MonsterLister />
      monster count = {monsterList.length}
      {monsterList.map((monster) => (
        <div key={monster.id}>name:{monster.name}</div>
      ))}
    </div>
  );
}
