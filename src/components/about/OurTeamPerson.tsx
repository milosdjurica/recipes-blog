import React from "react";
import Image from "next/image";

type OurTeamPersonProps = {
  name: string;
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
      className={`flex items-center justify-around text-center ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Image src={imageUrl} alt={alt} width={100} height={100} className="" />
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
