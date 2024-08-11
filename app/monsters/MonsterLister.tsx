import { MonstersRecord, MonstersResponse } from "@/types/pocketbase-types";

type Props = {
  list: MonstersRecord[];
};
export function MonsterLister({ list }: Props) {
  return (
    <div>
      monster count = {list.length}
      {list.map((monster) => (
        <div key={monster.id}>name:{monster.name}</div>
      ))}
    </div>
  );
}
