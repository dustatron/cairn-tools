import {
  MonstersRecord,
  RelicsRecord,
  SpellsRecord,
} from "@/types/pocketbase-types";
import React, { useState } from "react";

import { getFavoritesUpdate } from "@/utils/setFavorite";
import { ListLabels } from "@/types";
import { LocalStore } from "@/utils/hooks/useLocalStorage";
import {
  LocalMonsterRecord,
  LocalRelicsRecord,
  LocalSpellRecord,
} from "@/types/sharedTypes";
import { FavoriteButton } from "./FavoriteButton";

type Props = {
  item: RelicsRecord | MonstersRecord | SpellsRecord;
  label: ListLabels;
  localStorage: LocalRelicsRecord | LocalMonsterRecord | LocalSpellRecord;
  setToLocalStorage: (props: LocalStore) => void;
};

export default function ActionMenu({
  item,
  label,
  localStorage,
  setToLocalStorage,
}: Props) {
  const [liked, setLiked] = useState(false);

  const getFavStatus = (itemLabel: ListLabels, itemId: string): boolean => {
    if (itemLabel === "monsterList") {
      return !!(localStorage as LocalMonsterRecord)?.monsterList?.find(
        (monster) => monster.id === itemId
      );
    }
    if (itemLabel === "relicList") {
      return !!(localStorage as LocalRelicsRecord)?.relicList?.find(
        (relic) => relic.id === itemId
      );
    }
    if (itemLabel === "spellList") {
      return !!(localStorage as LocalSpellRecord)?.spellList?.find(
        (spell) => spell.id === itemId
      );
    }
    return false;
  };

  const isFav = getFavStatus(label, item.id);

  const toggleFavorite = () => {
    const likeToggled = !isFav;
    setLiked(likeToggled);
    const result = getFavoritesUpdate({
      currentList: localStorage,
      item,
      label,
      likedUpdate: likeToggled,
    });
    setToLocalStorage(result);
  };

  return <FavoriteButton isFav={isFav} handleOnFav={toggleFavorite} />;
}
