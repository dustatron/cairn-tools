import { MonstersRecord } from "@/types/pocketbase-types";

export function makeRandomSelection(
  amount: number,
  monstersList: MonstersRecord[],
) {
  let randNumbers = new Set<number>();

  const randomSelection: MonstersRecord[] = [];

  while (randNumbers.size < amount) {
    const currentNumb = Math.floor(Math.random() * monstersList.length);

    if (!randNumbers.has(currentNumb)) {
      randNumbers.add(currentNumb);
    }
  }
  randNumbers.forEach((num) => {
    randomSelection.push(monstersList[num]);
  });

  return randomSelection;
}
