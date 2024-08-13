import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { RelicsRecord } from "@/types/pocketbase-types";

type Props = {
  list: RelicsRecord[];
};

export default function RelicTable({ list }: Props) {
  return (
    <Table aria-label="List of Relics">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Action</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Charges</TableColumn>
        <TableColumn>Recharge</TableColumn>
      </TableHeader>
      <TableBody>
        {list.map((row, index) => {
          return (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Button radius="full">+</Button>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.charges}</TableCell>
              <TableCell>{row.recharge}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
