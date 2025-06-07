"use client";
import { Divider } from "@nextui-org/divider";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useEffect, useState } from "react";

import { RelicsRecord } from "@/types/pocketbase-types";
import { FavoriteButton } from "@/components/FavoriteButton";
import { getFavoritesUpdate } from "@/utils/setFavorite";
import { LocalStore } from "@/utils/hooks/useLocalStorage";
import { LocalRelicsRecord } from "@/types/sharedTypes";
import ActionMenu from "@/components/ActionMenu";

type Props = {
  relic: RelicsRecord;
  localStorage: LocalRelicsRecord;
  setToLocalStorage: (localStore: LocalStore) => void;
};

export default function RelicCard({
  relic,
  localStorage,
  setToLocalStorage,
}: Props) {
  const [liked, setLiked] = useState(false);

  const { name, charges, description, recharge } = relic;

  useEffect(() => {
    if (Array.isArray(localStorage?.relicList)) {
      const isFavorite = !!localStorage?.relicList.find(
        (item) => item.id === relic.id
      );

      if (isFavorite) {
        setLiked(isFavorite);
      }
    }
  }, [localStorage?.relicList]);

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
          <ActionMenu
            item={relic}
            label="relicList"
            localStorage={localStorage}
            setToLocalStorage={setToLocalStorage}
          />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className=" w-full p-3 mb-2">{description}</div>
      </CardBody>
      <CardFooter>
        <div className=" w-full p-3 mb-2 text-left">
          <h3>Recharge:</h3>
          {recharge}
        </div>
      </CardFooter>
    </Card>
  );
}
