import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-10 text-center">
      <div className="mx-auto flex items-start justify-around md:w-2/3">
        <div className="flex flex-col space-y-2">
          <h6>QUICK LINKS</h6>
          <Separator className="bg-black" />
          <div className="flex flex-col">
            <Link href="/about">About us</Link>
            <Link href="/pp">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h6>FOLLOW US</h6>
          <Separator className="bg-black" />
          <div className="flex flex-col items-center justify-between space-y-2">
            <Instagram />
            <Facebook />
            <Mail />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h6>TOP RECIPES</h6>
          <Separator className="bg-black" />
          <div className="flex flex-col">
            <Link href="/recipes">Recipe 1 </Link>
            <Link href="/recipes">Recipe 2</Link>
            <Link href="/recipes">Recipe 3</Link>
            <Link href="/recipes">Recipe 4</Link>
          </div>
        </div>
      </div>
      <h5 className="mt-4">Copyright something should be here ???</h5>
    </div>
  );
}