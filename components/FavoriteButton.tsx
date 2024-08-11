import { Button } from "@nextui-org/button";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

type Props = {
  isFav?: boolean;
  setFav: (fav: boolean) => void;
};
export function FavoriteButton({ isFav, setFav }: Props) {
  return (
    <Button
      isIconOnly
      className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
      radius="full"
      variant="faded"
      onPress={() => setFav(!isFav)}
    >
      {isFav ? (
        <CiCircleMinus size="md" color="red" />
      ) : (
        <IoIosAddCircleOutline size="md" className="bg-blue-800" />
      )}
    </Button>
  );
}
