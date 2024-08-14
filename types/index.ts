import { SVGProps } from "react";

import {
  MonstersRecord,
  SpellsRecord,
  RelicsRecord,
} from "@/types/pocketbase-types";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Lists = MonstersRecord[] | SpellsRecord[] | RelicsRecord[];

export type ListLabels = "spellList" | "relicList" | "monsterList";
