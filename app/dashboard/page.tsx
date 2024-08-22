import getUserCookie from "@/utils/getUserCookie";
import UserData from "./UserData";
import { cookies } from "next/headers";

export default function DashboardPage() {
  const model = getUserCookie();
  return (
    <main>
      <h1 className="text-2xl">Logged-in user: </h1>
      <UserData userData={model} />
    </main>
  );
}
