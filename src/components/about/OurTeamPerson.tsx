import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";

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
      <Image src={imageUrl} alt={alt} width={250} height={150} />
      <div className="space-y-5 md:w-1/2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p>{text}</p>
        <div className="flex justify-evenly">
          {/* // ! ADD LINKS */}
          <Facebook size="30px" />
          <Instagram size="30px" />
          <Mail size="30px" />
        </div>
      </div>
    </div>
  );
}
