import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cormorant } from "@/src/app/(website)/layout";

type OurTeamPersonProps = {
  name?: string;
  text: string;
  imageUrl: string;
  alt: string;
  reverse: boolean;
};

export default function OurTeamPerson({
  name,
  text,
  imageUrl,
  alt,
  reverse,
}: OurTeamPersonProps) {
  return (
    <div
      className={`flex flex-col items-center justify-around space-y-10 text-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        width={250}
        height={150}
        className="rounded-full"
      />
      <div className="space-y-10  md:w-1/2">
        <h2 className={`${cormorant.className} text-4xl font-semibold`}>
          {name}
        </h2>
        <p>{text}</p>
        {reverse ? (
          <></>
        ) : (
          <div className="flex justify-evenly">
            {/* // ! ADD LINKS */}
            <a
              href="https://www.facebook.com/anja.bulatovic.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size="30px" />
            </a>
            <a
              href="https://www.instagram.com/anjabulatovic2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size="30px" />
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Mail size="30px" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>anjabulatovic@icloud.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </div>
  );
}
