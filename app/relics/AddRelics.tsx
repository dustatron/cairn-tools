"use client";
import { Button } from "@nextui-org/button";

import { clientPB } from "@/utils/pocketbase";
import { relicList } from "@/utils/data-files/relics";

// Just using this to seed the database with monsters
export function AddRelics() {
  const addRelicToList = async () => {
    const pb = await clientPB();
    const relicListOptions = relicList;

    for (let relic of relicListOptions) {
      const { details, recharge, title } = relic;

      const formatLogic = title.split(",");
      const data = {
        name: formatLogic[0].trim(),
        charges: formatLogic[1] ? Number(formatLogic[1][1]) : 0,
        recharge,
        description: details.join(" "),
      };

      await pb.collection("relics").create(data);
    }
  };

  return (
    <div>
      {" "}
      relics list length = {relicList.length}
      <Button onClick={addRelicToList}>Add Relic</Button>{" "}
    </div>
  );
}
