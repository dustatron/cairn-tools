"use client";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useEffect, useState } from "react";

import { RelicsRecord } from "@/types/pocketbase-types";
import { FavoriteButton } from "@/components/FavoriteButton";
import { setFavorite } from "@/utils/setFavorite";
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { RELIC_KEY } from "@/types/keys";

type Props = {
  relic: RelicsRecord;
};

type LocalRelicRecord = {
  relicList: RelicsRecord[];
};

export default function RelicCard({ relic }: Props) {
  const [localStorage, setToLocalStorage] =
    useLocalStorage<LocalRelicRecord>(RELIC_KEY);
  const { name, charges, description, recharge } = relic;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (Array.isArray(localStorage?.relicList)) {
      const isFavorite = !!localStorage?.relicList.find(
        (item) => item.id === relic.id,
      );

      if (isFavorite) {
        setLiked(isFavorite);
      }
    }
  }, [localStorage?.relicList]);

  const toggleFavorite = () => {
    const result = setFavorite({
      currentLocalStorage: localStorage,
      item: relic,
      label: "relicList",
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
            <p className="text-small text-default-500 capitalize text-left">
              Charges: {charges}
            </p>
          </div>
          <FavoriteButton isFav={liked} setFav={toggleFavorite} />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className=" w-full p-3 mb-2">{description}</div>
      </CardBody>
      <CardFooter>
        <div className=" w-full p-3 mb-2 text-left">
          <h3>Rechatge:</h3>
          {recharge}
        </div>
      </CardFooter>
    </Card>
  );
}
