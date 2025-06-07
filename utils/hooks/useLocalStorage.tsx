"use client";
import { useState } from "react";

export type LocalStore = { [key: string]: any };

export function useLocalStorage<T>(
  storageKey:
    | "cairn-monster-selects"
    | "cairn-spell-selects"
    | "cairn-relic-selects"
): [T, (localStore: LocalStore) => void] {
  const [storageVal, setStorageVal] = useState<T>(
    getFromLocalStorage<T>(storageKey)
  );

  const setter = (toStore: LocalStore) => {
    setStorageVal(toStore as T);
    if (typeof window !== "undefined") {
      setToLocalStorage(storageKey, toStore);
    }
  };

  return [storageVal, setter];
}

function getFromLocalStorage<T>(key: string): T {
  if (typeof window === "undefined") return "" as T;
  const value = window?.localStorage?.getItem(key);

  // handle json
  try {
    return JSON.parse(value || "");
  } catch (error) {
    //handle simple string
    return value as T;
  }
}

const setToLocalStorage = (key: string, value: LocalStore) => {
  if (typeof window === "undefined") return null;
  let result = "";

  if (value && typeof value === "object") {
    result = JSON.stringify(value);
  } else {
    result = value;
  }
  window?.localStorage?.setItem(key, result);
};
