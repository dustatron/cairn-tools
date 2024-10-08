import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { SpellsRecord } from "@/types/pocketbase-types";
import ActionMenu from "@/components/ActionMenu";

type Props = {
  list: SpellsRecord[];
};

export default function SpellTable({ list }: Props) {
  return (
    <Table aria-label="Table of spells">
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Action</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Description</TableColumn>
      </TableHeader>
      <TableBody>
        {list.map((row, index) => {
          return (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <ActionMenu item={row} label="spellList" />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
