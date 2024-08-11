"use client";
import { MonstersRecord } from "@/types/pocketbase-types";
import { MonsterCard } from "./MonsterCard";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { FormEvent } from "react";

type Props = {
  list: MonstersRecord[];
};
export function MonsterLister({ list }: Props) {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Tabs color="primary" aria-label="Tabs colors" radius="sm">
      <Tab key="search" title="Search">
        <form
          className="flex justify-center items-center gap-2 p-3"
          onSubmit={handleSearch}
        >
          <Input
            isClearable
            type="text"
            label="Monster Search"
            variant="flat"
            size="sm"
            onClear={() => console.log("input cleared")}
            className="max-w-xs"
          />
          <Button
            type="submit"
            className="max-w-xs"
            size="lg"
            radius="sm"
            color="primary"
          >
            Search
          </Button>
        </form>
        <div className="flex flex-wrap gap-3 justify-center">
          {list.map((monster) => (
            <MonsterCard monster={monster} key={monster.id} />
          ))}
        </div>
      </Tab>
      <Tab key="random-table" title="Random Tables">
        <div className="flex flex-wrap justify-center w-full">table</div>
      </Tab>
    </Tabs>
  );
}
