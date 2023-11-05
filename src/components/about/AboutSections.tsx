import Image from "next/image";
import React from "react";

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
      } md:items-center md:space-x-10`}
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
        className="mt-10 flex flex-col items-center justify-between space-y-5
        text-center md:mt-0 md:w-1/2 md:space-y-10"
      >
        <Image
          src={imageUrl}
          alt={alt}
          width={100}
          height={100}
          className="hidden md:flex"
        />
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
