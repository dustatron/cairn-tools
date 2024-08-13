"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import Fuse from "fuse.js";

import RelicCard from "./RelicCard";
import RelicTable from "./RelicTable";

import { RandomTables } from "@/components/RandomTables";
import { SearchInput } from "@/components/SearchInput";
import { RelicsRecord } from "@/types/pocketbase-types";
import { Lists } from "@/types";

type Props = {
  relicList: RelicsRecord[];
};

export default function RelicList({ relicList }: Props) {
  const [filteredList, setFilteredList] = useState<RelicsRecord[]>(relicList);
  const [currentList, setList] = useState<Lists>([]);

  const fuse = new Fuse<RelicsRecord>(relicList, {
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
      setFilteredList(relicList);
    }
  }

  const handleSearch = (searchTerm: string) => {
    makeSelection(searchTerm);
  };

  const handleClear = () => {
    setFilteredList(relicList);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Tabs aria-label="Tabs colors" color="primary" radius="sm">
        <Tab key="search" title="Search">
          <div className="flex justify-center">
            <SearchInput onClear={handleClear} onSearch={handleSearch} />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {filteredList &&
              filteredList.map((relic) => (
                <RelicCard key={relic.id} relic={relic} />
              ))}
          </div>
        </Tab>
        <Tab key="random-table" title="Random Tables">
          <RandomTables list={relicList} setList={setList}>
            <RelicTable list={currentList} />
          </RandomTables>
        </Tab>
      </Tabs>
    </div>
  );
}
