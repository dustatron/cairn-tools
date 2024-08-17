"use client";
import { clientPB } from "@/utils/pocketbase";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { setCookies } from "../actions";

export default function DiscordLogin() {
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

  return <Button onClick={discordLogin}>Discord</Button>;
}
