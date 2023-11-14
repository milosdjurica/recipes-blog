import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-100 pb-5 pt-10 text-center">
      <div className="mx-auto flex items-start justify-around md:w-2/3">
        <div className="flex flex-col space-y-2">
          <h6>QUICK LINKS</h6>
          <Separator className="bg-black" />
          <div className="flex flex-col space-y-3">
            <Link href="/about">About us</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h6>FOLLOW US</h6>
          <Separator className="bg-black" />
          <div className="flex flex-col items-center justify-between space-y-6">
            <Instagram className="h-[30px] w-[30px]" />
            <Facebook className="h-[30px] w-[30px]" />
            <Mail className="h-[30px] w-[30px]" />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h6>TOP RECIPES</h6>
          <Separator className="bg-black" />
          <div className="flex flex-col space-y-3">
            <Link href="/recipes">Recipe 1</Link>
            <Link href="/recipes">Recipe 2</Link>
            <Link href="/recipes">Recipe 3</Link>
            <Link href="/recipes">Recipe 4</Link>
          </div>
        </div>
      </div>
      <h5 className="mt-10">
        © 2023 The Culinary Fair. All rights reserved. Design by Bulatovic
        Anja.
      </h5>
    </div>
  );
}
