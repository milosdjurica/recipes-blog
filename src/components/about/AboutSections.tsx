import Image from "next/image";
import React from "react";

import { cormorant } from "@/src/app/(website)/layout";

type AboutSections = {
  title: string;
  text: string;
  imageUrl: string;
  alt: string;
  reverse: boolean;
};

export default function AboutSections({
  title,
  text,
  imageUrl,
  alt,
  reverse,
}: AboutSections) {
  return (
    <div
      className={`flex flex-col items-center justify-between ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center`}
    >
      {/* // ! image div */}
      <div className="relative h-[300px] w-[60%] md:h-[400px] md:w-1/2">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="h-full w-full object-cover"
        />
      </div>
      {/* // ! 2nd part of section */}
      <div
        className="mt-10 flex flex-col items-center justify-between 
        text-center md:mt-0 md:w-1/2"
      >
        <Image
          src="/images/doodle.png"
          alt={alt}
          width={200}
          height={200}
          className="hidden md:flex"
        />
        <div className="space-y-10">
          <h2 className={` text-4xl font-semibold ${cormorant.className}`}>
            {title}
          </h2>
          <p className="mx-auto md:w-[90%]">{text}</p>
        </div>
      </div>
    </div>
  );
}
