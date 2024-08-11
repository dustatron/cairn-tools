import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { makeRandomSelection } from "@/utils/randomSelection";
import { MonstersRecord } from "@/types/pocketbase-types";
type Props = {
  list: MonstersRecord[];
};
export function MonsterTables({ list }: Props) {
  const options = [4, 6, 8, 10, 12, 100];
  const [selected, setSelected] = useState(6);
  const [currentList, setList] = useState<MonstersRecord[]>([]);

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
        >
          {op}D
        </Button>
      ))}
      {currentList.length && (
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>#</TableColumn>
            <TableColumn>Save</TableColumn>
            <TableColumn>Monster</TableColumn>
            <TableColumn>Armor</TableColumn>
            <TableColumn>HP</TableColumn>
            <TableColumn>STG</TableColumn>
            <TableColumn>DEX</TableColumn>
            <TableColumn>WIL</TableColumn>
            <TableColumn>Attack</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Source</TableColumn>
          </TableHeader>
          <TableBody>
            {currentList.map((row, index) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Button radius="full">+</Button>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.armor}</TableCell>
                  <TableCell>{row.hp}</TableCell>
                  <TableCell>{row.str}</TableCell>
                  <TableCell>{row.dex}</TableCell>
                  <TableCell>{row.wil}</TableCell>
                  <TableCell>{row.attack}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>
                    <NextLink
                      className={clsx(
                        linkStyles({
                          color: "primary",
                        }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                      )}
                      href={`https://cairnrpg.com/resources/monsters/${row?.name?.replaceAll(" ", "-").toLocaleLowerCase()}`}
                      target="_blank"
                    >
                      <Button variant="faded">More</Button>
                    </NextLink>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
