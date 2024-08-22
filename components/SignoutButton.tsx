import { Button } from "@nextui-org/button";

import { LogoutIcon } from "./icons";

import { logout } from "@/app/actions";

type Props = {
  style?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
};

export default function SignoutButton({ style = "bordered" }: Props) {
  return (
    <form action={logout}>
      <Button type="submit" variant={style}>
        <LogoutIcon height="15px" width="15px" /> Logout
      </Button>
    </form>
  );
}
