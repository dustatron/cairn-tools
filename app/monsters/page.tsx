import { title } from "@/components/primitives";
import { MonsterLister } from "./MonsterLister";
import { createServerPb } from "@/utils/pocketbase";

const getMonsterList = async () => {
  const pb = await createServerPb();
  const monsterList = await pb.collection("monsters").getFullList();
  return monsterList;
};

export default function DocsPage() {
  const monsterList = getMonsterList();

  console.log("monster list", monsterList);
  return (
    <div>
      <h1 className={title()}>Monsters</h1>
      <MonsterLister />
      {JSON.stringify(monsterList)}
    </div>
  );
}
