import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Cain RPG&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Tools&nbsp;</h1>
        <br />
        <h1 className={title()}>Build encounter tables.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          For finding spells, relics, and monsters.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/monsters"
        >
          Monsters
        </Link>
        <Link
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
            color: "warning",
          })}
          href="/spells"
        >
          Spells
        </Link>
        <Link
          className={buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
          })}
          href="/relics"
        >
          Relics
        </Link>
      </div>
      <div>
        <Link
          className={buttonStyles({
            color: "danger",
            radius: "full",
            variant: "shadow",
          })}
          href="/collections"
        >
          Your Collections
        </Link>
      </div>
    </section>
  );
}
