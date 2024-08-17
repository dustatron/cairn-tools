import { Input } from "@nextui-org/input";
import { login } from "../actions";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
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
            <label>
              E-mail
              <Input
                isClearable
                type="email"
                variant="bordered"
                className="max-w-xs"
              />
            </label>
            <label>
              Password
              <Input
                isClearable
                type="password"
                variant="bordered"
                className="max-w-xs"
              />
            </label>
            <div className="w-full flex justify-center p-2">
              <Button
                type="submit"
                variant="shadow"
                color="primary"
                className="w-1/2"
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
