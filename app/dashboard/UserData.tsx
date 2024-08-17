import { logout } from "../actions";
import { cookies } from "next/headers";
export default function UserData() {
  const cookie = cookies().get("pb_auth");

  // This never happens because of the middleware,
  // but we must make typescript happy
  if (!cookie) throw new Error("Not logged in");

  const { model } = JSON.parse(cookie.value);

  return (
    <>
      <pre>{JSON.stringify(model, null, 2)}</pre>
      <form action={logout}>
        <button type="submit">logout</button>
      </form>
    </>
  );
}
