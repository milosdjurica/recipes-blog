import React from "react";
import { ThemeButton } from "./ThemeButton";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MobileMenu } from "./MobileMenu";
import { cormorant } from "../app/(website)/layout";

export default function Navbar() {
  return (
    <header
      className={`${cormorant.className} flex items-center justify-between border border-b-gray-400 border-t-gray-400 px-3 py-2`}
    >
      <h2>The Culinary Fair</h2>
      <nav className="hidden h-5 md:flex md:w-1/2 md:items-center md:justify-evenly">
        <Separator orientation="vertical" className="bg-gray-400" />
        <Link href="/">
          <Button
            variant="link"
            className="font-semibold text-foreground md:text-xl"
          >
            HOME
          </Button>
        </Link>
        <Separator orientation="vertical" className="bg-gray-400" />

        <Link href="/recipes">
          <Button
            variant="link"
            className="font-semibold text-foreground md:text-xl"
          >
            RECIPES
          </Button>
        </Link>

        <Separator orientation="vertical" className="bg-gray-400" />
        <Link href="/about">
          <Button
            variant="link"
            className="font-semibold text-foreground md:text-xl"
          >
            ABOUT US
          </Button>
        </Link>
        <Separator orientation="vertical" className="bg-gray-400" />
        <Link href="/contact">
          <Button
            variant="link"
            className="font-semibold text-foreground md:text-xl"
          >
            CONTACT
          </Button>
        </Link>
        <Separator orientation="vertical" className="bg-gray-400" />
      </nav>

      <div className="hidden md:flex">
        <ThemeButton />
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
