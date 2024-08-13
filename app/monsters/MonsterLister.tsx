"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import Fuse from "fuse.js";

import { SearchInput } from "../../components/SearchInput";
import { MonsterTables } from "../../components/MonsterTables";

import { MonsterCard } from "./MonsterCard";

import { MonstersRecord } from "@/types/pocketbase-types";
import { RandomTables } from "@/components/RandomTables";

type Props = {
  list: MonstersRecord[];
};
export function MonsterLister({ list }: Props) {
  const [filteredList, setFilteredList] = useState<MonstersRecord[]>(list);
  const [currentList, setList] = useState<MonstersRecord[]>([]);

  const fuse = new Fuse<MonstersRecord>(list, {
    keys: ["name", "description", "detail1", "detail2", "detail3"],
    isCaseSensitive: false,
    threshold: 0.3,
  });

  function makeSelection(search: string) {
    if (search) {
      const newList = fuse.search(search).map((item) => {
        return item.item;
      });

      setFilteredList(newList);
    } else {
      setFilteredList(list);
    }
  }

  const handleSearch = (searchTerm: string) => {
    makeSelection(searchTerm);
  };

  const handleClear = () => {
    setFilteredList(list);
  };

  return (
    <Tabs aria-label="Tabs colors" color="primary" radius="sm">
      <Tab key="search" title="Search">
        <div className="flex justify-center">
          <SearchInput onClear={handleClear} onSearch={handleSearch} />
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredList.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))}
        </div>
      </Tab>
      <Tab key="random-table" title="Random Tables">
        <RandomTables list={list} setList={setList}>
          <MonsterTables list={currentList} />
        </RandomTables>
      </Tab>
    </Tabs>
  );
}
