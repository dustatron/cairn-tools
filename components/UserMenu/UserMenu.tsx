import SignoutButton from "../SignoutButton";

import { Menu } from "./Menu";

import getUserCookie from "@/utils/getUserCookie";

export default async function UserMenu() {
  const user = getUserCookie();

  const menuItems = [
    ...(user
      ? [
          { key: "dash", name: "Dashboard" },
          { key: "home", name: "home" },
          {
            key: "logout",
            name: "Logout",
            element: (
              <div className="w-full flex justify-center">
                <SignoutButton style="shadow" />
              </div>
            ),
          },
        ]
      : [{ key: "login", name: "Login" }]),
  ];

  return <Menu menuItems={menuItems} />;
}
