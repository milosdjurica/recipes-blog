import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

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
import { ThemeButton } from "./ThemeButton";
import { cormorant } from "../app/(website)/layout";

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
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>Recipes</DropdownMenuItem>
          <DropdownMenuItem>About us</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-400" />
        <DropdownMenuGroup>
          <div className="flex items-center justify-between">
            <DropdownMenuLabel className="text-md font-semibold">
              Theme
            </DropdownMenuLabel>
            <ThemeButton />
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
