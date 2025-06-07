type Props = {
  likedUpdate: boolean;
  item: {
    id: string;
  };
  label: string;
  currentList: { [key: string]: any } | null;
};

export const getFavoritesUpdate = ({
  likedUpdate,
  item,
  label,
  currentList,
}: Props) => {
  if (!currentList || !Array.isArray(currentList[label])) {
    return { [label]: [item] };
  }
  let result = {};
  // remove
  if (!likedUpdate) {
    const filterd = currentList[label].filter(
      // @ts-ignore
      (value) => value.id != item.id
    );

    result = { [label]: filterd };
  }

  // Add
  if (likedUpdate) {
    result = {
      [label]: [item, ...currentList[label]],
    };
  }
  return result;
};
