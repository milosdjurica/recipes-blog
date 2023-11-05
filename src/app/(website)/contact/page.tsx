import { Facebook, Instagram, Mail } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="my-20 flex flex-col items-center space-y-40">
      <h2 className="text-4xl font-semibold md:text-5xl">CONTACT US</h2>
      <div className="flex w-full flex-col items-center justify-around space-y-10 md:flex-row md:space-y-0">
        <div className="rounded-full bg-gray-100 p-20">
          <Instagram className="h-[50px] w-[50px]" />
        </div>
        <div className="rounded-full bg-gray-100 p-20">
          <Facebook className="h-[50px] w-[50px]" />
        </div>
        <div className="rounded-full bg-gray-100 p-20">
          <Mail className="h-[50px] w-[50px]" />
        </div>
      </div>
    </div>
  );
}
