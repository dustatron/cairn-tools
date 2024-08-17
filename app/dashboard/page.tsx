import UserData from "./UserData";

export default function DashboardPage() {
  return (
    <main>
      <p>This is the dashboard. Only logged-in users can view this route</p>
      <p>Logged-in user: </p>
      <UserData />
    </main>
  );
}
