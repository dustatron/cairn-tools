type Props = {
  setLiked: (isLike: boolean) => void;
  liked: boolean;
  item: {
    id: string;
  };
  label: string;
  currentLocalStorage: { [key: string]: any } | null;
};
export const setFavorite = ({
  setLiked,
  liked,
  item,
  label,
  currentLocalStorage,
}: Props) => {
  setLiked(!liked);

  let result = {};

  if (liked) {
    if (currentLocalStorage && Array.isArray(currentLocalStorage[label])) {
      const filterd = currentLocalStorage[label].filter(
        // @ts-ignore
        (value) => value.id != item.id,
      );

      result = { [label]: filterd };
    }
  }
  if (!liked) {
    if (currentLocalStorage && Array.isArray(currentLocalStorage[label])) {
      result = {
        monsterList: [...currentLocalStorage[label], item],
      };
    } else {
      result = {
        [label]: [item],
      };
    }
  }

  return result;
};
