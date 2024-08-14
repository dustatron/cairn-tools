import { Button } from "@nextui-org/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { AddButton, MinusButton } from "./icons";

type Props = {
  isFav?: boolean;
  setFav: () => void;
};
export function FavoriteButton({ isFav, setFav }: Props) {
  return (
    <Button
      isIconOnly
      className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
      radius="full"
      variant="faded"
      onPress={() => setFav()}
    >
      {isFav ? <MinusButton /> : <AddButton />}
    </Button>
  );
}
