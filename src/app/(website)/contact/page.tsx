import { Facebook, Instagram, Mail } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="my-20 flex flex-col items-center space-y-20">
      <h2 className="text-5xl font-semibold">CONTACT US</h2>
      <div className="flex w-full flex-col items-center justify-around space-y-20 md:w-1/2 md:flex-col">
        <div className="flex flex-col items-center">
          <Instagram className="h-[50px] w-[50px]" />
          <h3>INSTAGRAM</h3>
        </div>
        <div className="flex flex-col items-center">
          <Facebook className="h-[50px] w-[50px]" />
          <h3>FACEBOOK</h3>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="h-[50px] w-[50px]" />
          <h3>MAIL</h3>
        </div>
      </div>
    </div>
  );
}
