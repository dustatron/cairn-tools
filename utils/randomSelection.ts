import { Lists } from "@/types";

export function makeRandomSelection(amount: number, monstersList: Lists) {
  let randNumbers = new Set<number>();

  const randomSelection: Lists = [];

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
