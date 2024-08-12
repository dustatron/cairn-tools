"use client";
import { FavoriteButton } from "@/components/FavoriteButton";
import { SpellsRecord } from "@/types/pocketbase-types";
import { Divider } from "@nextui-org/divider";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useEffect, useState } from "react";
import { setFavorite } from "@/utils/setFavorite";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { SPELL_KEY } from "@/types/keys";

type Props = {
  spell: SpellsRecord;
};

type LocalSpellRecord = {
  spellList: SpellsRecord[];
};

export default function SpellCard({ spell }: Props) {
  const [localStorage, setToLocalStorage] =
    useLocalStorage<LocalSpellRecord>(SPELL_KEY);
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

  const toggleFavorite = () => {
    const result = setFavorite({
      currentLocalStorage: localStorage,
      item: spell,
      label: "spellList",
      liked,
      setLiked,
    });
    setToLocalStorage(result);
  };

  return (
    <Card className="w-[500px] border-1 border-gray-700" radius="sm">
      <CardHeader className="flex gap-3">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="text-lg text-left">{name}</p>
          </div>
          <FavoriteButton isFav={liked} setFav={toggleFavorite} />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className=" w-full p-3 mb-2">{description}</div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
