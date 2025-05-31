import RelicList from "./RelicList";

import { title } from "@/components/primitives";
import { createServerPb } from "@/utils/pocketbase";
import { AddRelics } from "./AddRelics";

const getRelicList = async () => {
  const pb = await createServerPb();
  const relicList = await pb
    .collection("relics")
    .getFullList({ sort: "created" });

  return relicList;
};

export default async function RelicPage() {
  const relicList = await getRelicList();

  return (
    <div>
      <h1 className={title()}>Relics</h1>
      <div className="mt-2">
        <RelicList relicList={relicList} />
      </div>
    </div>
  );
}
