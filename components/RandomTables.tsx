"use client";
import { Button } from "@nextui-org/button";
import { ReactNode, useEffect, useState } from "react";

import { makeRandomSelection } from "@/utils/randomSelection";
import { Lists } from "@/types";

type Props = {
  list: Lists;
  children: ReactNode;
  setList: (lists: Lists) => void;
};
export function RandomTables({ list, children, setList }: Props) {
  const options = [4, 6, 8, 10, 12, 100];
  const [selected, setSelected] = useState(6);

  const onSelect = (amount: number) => {
    setSelected(amount);
    const randomList = makeRandomSelection(amount, list);

    setList(randomList);
  };

  useEffect(() => {
    setList(makeRandomSelection(selected, list));
  }, []);

  return (
    <div className="flex flex-wrap justify-center w-full gap-2">
      {options.map((op) => (
        <Button
          key={op}
          color={selected === op ? "primary" : "default"}
          onClick={() => onSelect(op)}
          variant={selected === op ? "shadow" : "bordered"}
        >
          {op}D
        </Button>
      ))}

      {children}
    </div>
  );
}
