"use client";
import { Button } from "@nextui-org/button";

import { clientPB } from "@/utils/pocketbase";
import { moreSpells } from "@/utils/data-files/more-spells";
import { basicSpells } from "@/utils/data-files/basic-spells";

// Just using this to seed the database with monsters
export function AddSpells() {
  const addSpellToList = async () => {
    const pb = await clientPB();
    const spellList = moreSpells.slice(3);
    for (let spell of spellList) {
      const { description, number, title } = spell;
      const data = {
        description,
        number,
        name: title,
        Tags: ["MORE_SPELLS"],
      };

      await pb.collection("spells").create(data);
    }
  };

  return (
    <div>
      {" "}
      basic list length = {basicSpells.length}
      more list length = {moreSpells.length}
      <Button onClick={addSpellToList}>Add Monster</Button>{" "}
    </div>
  );
}
