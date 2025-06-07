"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { RelicsRecord } from "@/types/pocketbase-types";
import ActionMenu from "@/components/ActionMenu";
import { Button } from "@nextui-org/button";
import { LocalRelicsRecord } from "@/types/sharedTypes";
import { LocalStore } from "@/utils/hooks/useLocalStorage";

type Props = {
  list: RelicsRecord[];
  localStorage: LocalRelicsRecord;
  setToLocalStorage: (localStore: LocalStore) => void;
};

const columns = [
  { name: "#", uid: "#" },
  { name: "Actions", uid: "action" },
  { name: "Name", uid: "name" },
  { name: "Charges", uid: "charges" },
  { name: "Description", uid: "description" },
  { name: "Recharges", uid: "recharges" },
];

export default function RelicTable({
  list,
  localStorage,
  setToLocalStorage,
}: Props) {
  return (
    <Table aria-label="List of Relics">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody>
        {list.map((row, index) => {
          return (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <ActionMenu
                  item={row}
                  label="relicList"
                  localStorage={localStorage}
                  setToLocalStorage={setToLocalStorage}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.charges}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.recharge}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
