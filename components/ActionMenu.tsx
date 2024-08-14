import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React, { useState } from "react";
import { Key } from "@react-types/shared/src/key";

import { ActionMenuButton, AddButton, MinusButton } from "./icons";

import { setFavorite } from "@/utils/setFavorite";
import { RelicsRecord } from "@/types/pocketbase-types";
import { ListLabels } from "@/types";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { LocalRelicsRecord } from "@/types/sharedTypes";

type Props = {
  item: RelicsRecord;
  label: ListLabels;
};

export default function ActionMenu({ item, label }: Props) {
  const [liked, setLiked] = useState(false);
  const [localStorage, setToLocalStorage] = useLocalStorage<LocalRelicsRecord>(
    "cairn-relic-selects",
  );
  const isFav = localStorage?.relicList?.find((relic) => relic.id === item.id);

  const toggleFavorite = () => {
    const result = setFavorite({
      currentLocalStorage: localStorage,
      item,
      label,
      liked: !!isFav,
      setLiked,
    });

    setToLocalStorage(result);
  };

  const handleAction = (key: Key) => {
    if (key === "fav") {
      toggleFavorite();
    } else if (key === "source" && location) {
      if (label === "relicList") {
        location.href = "https://cairnrpg.com/resources/more-relics";
      } else if (label === "spellList") {
        location.href = "https://cairnrpg.com/resources/more-spellbooks/";
      } else if (label === "monsterList") {
        location.href =
          "https://cairnrpg.com/resources/monsters/" +
          item?.name?.replaceAll(" ", "-").toLocaleLowerCase();
      }
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="w-10" variant="light">
          <ActionMenuButton />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Action menu" onAction={handleAction}>
        <DropdownItem key="fav">
          <Button radius="full" variant="light">
            {isFav ? (
              <>
                Remove <MinusButton height={"20px"} width={"20px"} />
              </>
            ) : (
              <>
                Add <AddButton />
              </>
            )}
          </Button>
        </DropdownItem>
        <DropdownItem key="source">
          <Button variant="light">Souce</Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
