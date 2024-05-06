"use server";

import { z } from "zod";
import { signInFormSchema, signUpFormSchema } from "../_lib/definitions";
import { createSession, deleteSession, getUserId } from "../_lib/session";
import { redirect } from "next/navigation";

export async function signUp(values: z.infer<typeof signUpFormSchema>) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }
  );

  if (response.ok) {
    const { data } = await response.json();
    await createSession(data.user._id);
    redirect("/");
  } else {
    // Handle errors
    const { errors } = await response.json();
    return errors;
  }
}

export async function signIn(values: z.infer<typeof signInFormSchema>) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }
  );

  if (response.ok) {
    const { data } = await response.json();
    await createSession(data.user._id);
    redirect("/");
  } else {
    // Handle errors
    const error = await response.json();
    throw new Error(error.message);
  }
}

export async function logout() {
  deleteSession();
  redirect("/sign-in");
}

export async function getUserInfo() {
  const userId = await getUserId();
  console.log(userId);

  if (!userId) {
    redirect("/sign-in");
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${userId}`
    );

    if (!res.ok) {
      throw new Error("Could not retrieve user info");
    }

    return res.json();
  } catch (e) {
    console.log(e);
  }
}
