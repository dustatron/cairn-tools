import { useState } from "react";

type LocalStore = { [key: string]: any };

export function useLocalStorage<T>(
  storageKey: string
): [T, (localStore: LocalStore) => void] {
  const [storageVal, setStorageVal] = useState<T>(
    getFromLocalStorage<T>(storageKey)
  );

  const setter = (toStore: LocalStore) => {
    setToLocalStorage(storageKey, toStore);
    setStorageVal(toStore as T);
  };

  return [storageVal, setter];
}

function getFromLocalStorage<T>(key: string): T {
  if (!localStorage) return "" as T;
  const value = localStorage?.getItem(key);

  // handle json
  try {
    return JSON.parse(value || "");
  } catch (error) {
    //handle simple string
    return value as T;
  }
}

const setToLocalStorage = (key: string, value: LocalStore) => {
  if (!localStorage) return null;
  let result = "";

  if (value && typeof value === "object") {
    result = JSON.stringify(value);
  } else {
    result = value;
  }
  localStorage?.setItem(key, result);
};
