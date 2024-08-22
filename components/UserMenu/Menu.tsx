"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { UserIcon } from "../icons";

type MenuItem = {
  key: string;
  name: string;
  element?: ReactNode;
};

type Props = {
  menuItems: MenuItem[];
};

export function Menu({ menuItems }: Props) {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">
          <UserIcon
            className="text-default-500"
            height={"24px"}
            width={"24px"}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        items={menuItems}
        onAction={(key) => {
          console.log("key", key);
          if (key === "login") {
            router.push("/login");
          }
          if (key === "dash") {
            router.push("/dashboard");
          }
          if (key === "home") {
            router.push("/");
          }
        }}
      >
        {(item) => (
          <DropdownItem key={item.key}>
            {item.element ? <>{item.element}</> : item.name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
