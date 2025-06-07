import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import ActionMenu from "./ActionMenu";

import { MonstersRecord } from "@/types/pocketbase-types";
import { LocalStore, useLocalStorage } from "@/utils/hooks/useLocalStorage";
import { LocalMonsterRecord } from "@/types/sharedTypes";

type Props = {
  list: MonstersRecord[];
  localStorage: LocalMonsterRecord;
  setToLocalStorage: (localStore: LocalStore) => void;
};
export function MonsterTables({
  list,
  localStorage,
  setToLocalStorage,
}: Props) {
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
                <ActionMenu
                  item={row}
                  label="monsterList"
                  localStorage={localStorage}
                  setToLocalStorage={setToLocalStorage}
                />
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
