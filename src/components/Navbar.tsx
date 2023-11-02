import React from "react";
import { ThemeButton } from "./ThemeButton";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border border-b-primary px-6 py-2">
      <nav>
        <Link href="/">
          <Button variant="link" className="text-xl font-semibold">
            Home
          </Button>
        </Link>
      </nav>
      <ThemeButton />
    </header>
  );
}
