"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { FormEvent } from "react";

import { MonsterCard } from "./MonsterCard";

import { MonstersRecord } from "@/types/pocketbase-types";
import { MonsterTables } from "./MonsterTables";

type Props = {
  list: MonstersRecord[];
};
export function MonsterLister({ list }: Props) {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Tabs aria-label="Tabs colors" color="primary" radius="sm">
      <Tab key="search" title="Search">
        <form
          className="flex justify-center items-center gap-2 p-3"
          onSubmit={handleSearch}
        >
          <Input
            isClearable
            className="max-w-xs"
            label="Monster Search"
            size="sm"
            type="text"
            variant="flat"
            onClear={() => console.log("input cleared")}
          />
          <Button
            className="max-w-xs"
            color="primary"
            radius="sm"
            size="lg"
            type="submit"
          >
            Search
          </Button>
        </form>
        <div className="flex flex-wrap gap-3 justify-center">
          {list.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))}
        </div>
      </Tab>
      <Tab key="random-table" title="Random Tables">
        <MonsterTables list={list} />
      </Tab>
    </Tabs>
  );
}
