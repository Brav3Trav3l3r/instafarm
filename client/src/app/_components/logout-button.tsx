"use client";

import { Button } from "@/components/ui/button";
import { logout } from "../_actions/auth";

export default function LogoutButton() {
  return (
    <Button variant={"destructive"} onClick={async () => await logout()}>
      Logout
    </Button>
  );
}
