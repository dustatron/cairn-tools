import SignoutButton from "@/components/SignoutButton";

export type UserModel = {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
};

type Props = {
  userData: UserModel;
};

export default function UserData({ userData }: Props) {
  return (
    <>
      <p>{userData.id}</p>
      <p>{userData.email}</p>
      <p>{userData.collectionName}</p>

      <SignoutButton />
    </>
  );
}
