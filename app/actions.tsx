"use server";

import { redirect } from "next/navigation";
import { createServerPb } from "@/utils/pocketbase";
import { cookies } from "next/headers";
import { UsersResponse } from "@/types/pocketbase-types";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // TODO: server-side validation

  const pb = createServerPb();

  const { token, record: model } = await pb
    .collection("users")
    .authWithPassword(email, password);

  const cookie = JSON.stringify({ token, model });

  cookies().set("pb_auth", cookie, {
    secure: true,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
  });

  redirect("/dashboard");
}

export async function setCookies(token: string, model: UsersResponse<unknown>) {
  // TODO: server-side validation
  const cookie = JSON.stringify({ token, model });

  cookies().set("pb_auth", cookie, {
    secure: true,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
  });

  redirect("/dashboard");
}

export async function addUser(formData: FormData) {
  const pb = createServerPb();

  const data = {
    email: formData.get("email") as string,
    emailVisibility: true,
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordconfirm") as string,
    name: formData.get("name") as string,
  };

  const record = await pb.collection("users").create(data);
  console.log("record", record);
}

export async function logout() {
  cookies().delete("pb_auth");
  redirect("/");
}
