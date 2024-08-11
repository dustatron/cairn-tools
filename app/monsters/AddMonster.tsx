"use client";
import { Button } from "@nextui-org/button";
import { clientPB } from "@/utils/pocketbase";
import { monsters } from "@/utils/monsters-list-data";

// Just using this to seed the database with monsters
export function AddMonster() {
  const addMonsterToList = async () => {
    const pb = await clientPB();

    monsters.forEach((monster) => {
      const {
        title,
        stats: { armor, attack, dex, hp, str, wil },
        details,
      } = monster;
      const data = {
        name: title,
        hp,
        dex,
        str,
        wil,
        attack,
        armor,
        description: details[0],
        detail1: details[1],
        detail2: details[2],
        detail3: details[3],
      };

      pb.collection("monsters")
        .create(data)
        .then((res) => {
          console.log("added", title);
        })
        .catch((err) => console.log("error", err));
    });
  };

  return (
    <div>
      {" "}
      original list length = {monsters.length}
      <Button onClick={addMonsterToList}>Add Monster</Button>{" "}
    </div>
  );
}
