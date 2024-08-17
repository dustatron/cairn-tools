import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { login } from "../actions";

import DiscordLogin from "./DiscordLogin";

export default function Page() {
  return (
    <main>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3 text-center">
          <h2 className="text-2xl text-center w-full">Login</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <form
            action={login}
            className="flex justify-center flex-wrap space-y-2"
          >
            <label htmlFor="email">
              E-mail
              <Input
                isClearable
                className="max-w-xs"
                id="email"
                type="email"
                variant="bordered"
              />
            </label>
            <label htmlFor="password">
              Password
              <Input
                isClearable
                className="max-w-xs"
                id="password"
                type="password"
                variant="bordered"
              />
            </label>
            <div className="w-full flex justify-center p-2">
              <Button
                className="w-1/2"
                color="primary"
                type="submit"
                variant="shadow"
              >
                Login
              </Button>
            </div>
          </form>
        </CardBody>
        <Divider />
        <CardFooter>
          <DiscordLogin />
        </CardFooter>
      </Card>
    </main>
  );
}
