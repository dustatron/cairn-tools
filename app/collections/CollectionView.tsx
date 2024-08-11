"use client";
import { Tab, Tabs } from "@nextui-org/tabs";

export function CollectionView() {
  return (
    <Tabs aria-label="Tabs colors" color="primary" radius="sm">
      <Tab key="mosters" title="Monsters">
        spells
      </Tab>
      <Tab key="spells" title="Spells">
        spells
      </Tab>
      <Tab key="relics" title="Relics">
        relics
      </Tab>
    </Tabs>
  );
}
