"use client";
import { HeartIcon } from "@/components/HeartIcon";
import { MonstersRecord } from "@/types/pocketbase-types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { Divider } from "@nextui-org/divider";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { FavoriteButton } from "@/components/FavoriteButton";

type Props = {
  monster: MonstersRecord;
};
export function MonsterCard({ monster }: Props) {
  const {
    name,
    armor,
    attack,
    description,
    detail1,
    detail2,
    detail3,
    dex,
    hp,
    str,
    wil,
  } = monster;
  const [liked, setLiked] = useState(false);
  return (
    <Card className="w-[500px] border-1 border-gray-700" radius="sm">
      <CardHeader className="flex gap-3">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="text-lg text-left">{name}</p>
            <p className="text-small text-default-500 capitalize text-left">
              Attack: {attack}
            </p>
          </div>
          <FavoriteButton isFav={liked} setFav={setLiked} />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Table removeWrapper aria-label="Stats for monster" radius="none">
          <TableHeader>
            <TableColumn>Armor</TableColumn>
            <TableColumn>HP</TableColumn>
            <TableColumn>STR</TableColumn>
            <TableColumn>DEX</TableColumn>
            <TableColumn>WIL</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>{armor}</TableCell>
              <TableCell>{hp}</TableCell>
              <TableCell>{str}</TableCell>
              <TableCell>{dex}</TableCell>
              <TableCell>{wil}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Divider />
        <div className="w-full pt-2">
          {description && <div className="w-full p-3 mb-2">{description}</div>}
          {detail1 && <div className=" w-full p-3 mb-2">{detail1}</div>}
          {detail2 && <div className="w-full p-3 mb-2">{detail2}</div>}
          {detail3 && <div className="w-full p-3 mb-2">{detail3}</div>}
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="w-full flex justify-end">
          <NextLink
            target="_blank"
            className={clsx(
              linkStyles({
                color: "primary",
              }),
              "data-[active=true]:text-primary data-[active=true]:font-medium"
            )}
            href={`https://cairnrpg.com/resources/monsters/${name?.replaceAll(" ", "-").toLocaleLowerCase()}`}
          >
            <Button variant="faded">Source</Button>
          </NextLink>
        </div>
      </CardFooter>
    </Card>
  );
}
