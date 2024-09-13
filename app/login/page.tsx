import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

import { login } from "../actions";

import DiscordLogin from "./DiscordLogin";

export default function Page() {
  if (process.env.ALLOW_USERS) {
    return (
      <main>
        <div className="w-full flex justify-center">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3 text-center">
              <h2 className="text-2xl text-center w-full">Login</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <form
                action={login}
                className="flex justify-center flex-wrap space-y-2 w-full"
              >
                <div className="w-full flex justify-center py-2">
                  <Input
                    isClearable
                    className="max-3xl"
                    id="email"
                    placeholder="Email"
                    size="lg"
                    type="email"
                    variant="bordered"
                  />
                </div>
                <div className="w-full flex justify-center py-2">
                  <Input
                    isClearable
                    className="max-3xl"
                    id="password"
                    placeholder="Password"
                    size="lg"
                    type="password"
                    variant="bordered"
                  />
                </div>
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
              <div className="w-full flex justify-center">
                <DiscordLogin />
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="w-full flex justify-center">
          <p>Page not found</p>
        </div>
      </main>
    );
  }
}
