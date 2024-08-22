import { cookies } from "next/headers";

export default function getUserCookie() {
  const cookie = cookies().get("pb_auth");

  // must make typescript happy
  if (!cookie) {
    return null;
  }

  const { model } = JSON.parse(cookie.value);
  return model;
}
