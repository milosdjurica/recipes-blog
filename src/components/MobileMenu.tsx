import { Menu } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { cormorant } from "../app/(website)/layout";
import Link from "next/link";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${cormorant.className} mr-2 w-48 border border-gray-400 md:hidden`}
      >
        <div className="flex flex-wrap items-end justify-around">
          <DropdownMenuLabel className="text-md font-semibold">
            The Culinary Fair
          </DropdownMenuLabel>
        </div>

        <DropdownMenuSeparator className="bg-gray-400" />
        <DropdownMenuGroup className="font-semibold">
          {/* // ! ADD LINKS!!!!!!!!!!!!!!!! */}
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/recipes">Recipes</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/about">About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
