"use client";
import { Button } from "@nextui-org/button";

import { setCookies } from "../actions";

import { clientPB } from "@/utils/pocketbase";

export default function eDiscordLogin() {
  const pb = clientPB();
  const discordLogin = async () => {
    // Make sure to register https://pocket.pdxmccord.com/api/oauth2-redirect as redirect url.
    const authData = await pb
      .collection("users")
      .authWithOAuth2({ provider: "discord" });

    if (authData.token) {
      setCookies(authData.token, authData.record);
    }
  };

  return (
    <Button color="secondary" size="md" variant="shadow" onClick={discordLogin}>
      Discord
    </Button>
  );
}
