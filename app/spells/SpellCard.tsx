"use client";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useEffect, useState } from "react";

import { SpellsRecord } from "@/types/pocketbase-types";
import { FavoriteButton } from "@/components/FavoriteButton";
import { getFavoritesUpdate } from "@/utils/setFavorite";
import { LocalStore, useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { LocalSpellRecord } from "@/types/sharedTypes";
import ActionMenu from "@/components/ActionMenu";

type Props = {
  spell: SpellsRecord;
  localStorage: LocalSpellRecord;
  setToLocalStorage: (localStore: LocalStore) => void;
};

export default function SpellCard({
  spell,
  localStorage,
  setToLocalStorage,
}: Props) {
  const { name, Tags, description, number } = spell;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (Array.isArray(localStorage?.spellList)) {
      const isFavorite = !!localStorage?.spellList.find(
        (item) => item.id === spell.id
      );

      if (isFavorite) {
        setLiked(isFavorite);
      }
    }
  }, [localStorage?.spellList]);

  return (
    <Card className="w-[500px] border-1 border-gray-700" radius="sm">
      <CardHeader className="flex gap-3">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="text-lg text-left">{name}</p>
          </div>
          <ActionMenu
            item={spell}
            label="spellList"
            localStorage={localStorage}
            setToLocalStorage={setToLocalStorage}
          />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className=" w-full p-3 mb-2">{description}</div>
      </CardBody>
      <CardFooter />
    </Card>
  );
}
