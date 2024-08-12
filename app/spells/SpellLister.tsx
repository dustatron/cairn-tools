"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import Fuse from "fuse.js";

import { SearchInput } from "../../components/SearchInput";
import SpellCard from "./SpellCard";
import { MonstersRecord, SpellsRecord } from "@/types/pocketbase-types";

type Props = {
  list: SpellsRecord[];
};
export function SpellLister({ list }: Props) {
  const [filteredList, setFilteredList] = useState<SpellsRecord[]>(list);

  const fuse = new Fuse<SpellsRecord>(list, {
    keys: ["name", "description"],
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
          <div className=" w-30% p-2 mb-1 flex justify-center items-center rounded-md text-gray-600 font-semibold">
            <p>Showing: {filteredList.length}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredList.map((spell) => (
            <SpellCard key={spell.id} spell={spell} />
          ))}
        </div>
      </Tab>
      <Tab key="random-table" title="Random Tables">
        {/* <MonsterTables list={list} /> */}
      </Tab>
    </Tabs>
  );
}
