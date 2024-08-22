import UserData from "./UserData";

import getUserCookie from "@/utils/getUserCookie";

export default function DashboardPage() {
  const model = getUserCookie();

  return (
    <main>
      <h1 className="text-2xl">Logged-in user: </h1>
      <UserData userData={model} />
    </main>
  );
}
