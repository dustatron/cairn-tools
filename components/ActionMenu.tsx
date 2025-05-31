import {
  MonstersRecord,
  RelicsRecord,
  SpellsRecord,
} from "@/types/pocketbase-types";
import React, { useState } from "react";

import { setFavorite } from "@/utils/setFavorite";
import { ListLabels } from "@/types";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
import {
  LocalMonsterRecord,
  LocalRelicsRecord,
  LocalSpellRecord,
} from "@/types/sharedTypes";
import { FavoriteButton } from "./FavoriteButton";

type Props = {
  item: RelicsRecord | MonstersRecord | SpellsRecord;
  label: ListLabels;
};

export default function ActionMenu({ item, label }: Props) {
  const [liked, setLiked] = useState(false);
  const [localStorage, setToLocalStorage] = useLocalStorage<
    LocalRelicsRecord | LocalMonsterRecord | LocalSpellRecord
  >("cairn-relic-selects");

  const getFavStatus = (itemLabel: ListLabels): boolean => {
    if (itemLabel === "monsterList") {
      return !!(localStorage as LocalMonsterRecord).monsterList?.find(
        (monster) => monster.id === item.id
      );
    }
    if (itemLabel === "relicList") {
      return !!(localStorage as LocalRelicsRecord).relicList?.find(
        (relic) => relic.id === item.id
      );
    }
    if (itemLabel === "spellList") {
      return !!(localStorage as LocalSpellRecord).spellList?.find(
        (spell) => spell.id === item.id
      );
    }
    return true;
  };

  const isFav = getFavStatus(label);

  const toggleFavorite = () => {
    const result = setFavorite({
      currentLocalStorage: localStorage,
      item,
      label,
      liked: isFav,
      setLiked,
    });

    setToLocalStorage(result);
  };

  return <FavoriteButton isFav={isFav} setFav={toggleFavorite} />;
}
