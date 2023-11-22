"use client";

import { Last8Type } from "@/src/types/recipe.type";
import { PortableText } from "@portabletext/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cormorant } from "../app/(website)/layout";

export default function RecipeCard({ recipe }: { recipe: Last8Type }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[400px] w-[90%] overflow-hidden rounded-lg p-4
      sm:w-[80%] md:w-[330px] lg:w-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 top-0 z-10 h-full w-full backdrop-blur-[5px] backdrop-filter transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <Link
            href={`/recipes/${recipe._id}`}
            className="flex flex-nowrap items-center  rounded-md bg-white 
            px-4 py-2 text-sm text-black shadow-md"
          >
            READ MORE <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="relative space-y-3">
        <h3 className={`${cormorant.className} text-2xl font-semibold`}>
          {recipe.title}
        </h3>
        <Image
          src={recipe.primaryImage}
          alt={recipe.title}
          width={200}
          height={150}
          // ! Check how to fix this with hotspot
          // maybe max-h?
          className="h-[200px] w-full rounded-md object-cover"
        />

        <PortableText value={recipe.descriptionHP} />
      </div>
    </div>
  );
}
