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

import { MonstersRecord } from "@/types/pocketbase-types";
import ActionMenu from "./ActionMenu";
type Props = {
  list: MonstersRecord[];
};
export function MonsterTables({ list }: Props) {
  return (
    <Table aria-label="Monster list">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Action</TableColumn>
        <TableColumn>Monster</TableColumn>
        <TableColumn>Armor</TableColumn>
        <TableColumn>HP</TableColumn>
        <TableColumn>STG</TableColumn>
        <TableColumn>DEX</TableColumn>
        <TableColumn>WIL</TableColumn>
        <TableColumn>Attack</TableColumn>
        <TableColumn>Description</TableColumn>
      </TableHeader>
      <TableBody>
        {list.map((row, index) => {
          return (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <ActionMenu label="monsterList" item={row} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.armor}</TableCell>
              <TableCell>{row.hp}</TableCell>
              <TableCell>{row.str}</TableCell>
              <TableCell>{row.dex}</TableCell>
              <TableCell>{row.wil}</TableCell>
              <TableCell>{row.attack}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
