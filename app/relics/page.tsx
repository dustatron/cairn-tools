import RelicCard from "./RelicCard";

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
      {relicList &&
        relicList.map((relic) => <RelicCard key={relic.id} relic={relic} />)}
    </div>
  );
}
