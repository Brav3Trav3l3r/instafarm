import Link from "next/link";
import { Button } from "../../components/ui/button";
import { cookies } from "next/headers";
import { logout } from "@/app/_actions/auth";
import LogoutButton from "./logout-button";
import { ShoppingCart } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cart from "./cart";

export default function Header() {
  const session = cookies().get("session");

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-primary rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5">First Link</a>
          <a className="mr-5">Second Link</a>
          <a className="mr-5">Third Link</a>
          <a className="mr-5">Fourth Link</a>
        </nav>

        <div className="flex justify-center mx-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"ghost"} size={"icon"} className="mt-4 md:mt-0">
                <ShoppingCart />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Cart />
            </PopoverContent>
          </Popover>
        </div>

        {!session ? (
          <Link href={"/sign-in"}>
            <Button className="mt-4 md:mt-0">Sign in</Button>
          </Link>
        ) : (
          <LogoutButton />
        )}
      </div>
    </header>
  );
}
