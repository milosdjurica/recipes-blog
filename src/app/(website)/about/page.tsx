import Image from "next/image";
import React from "react";

export default function About() {
  return (
    // !First
    <div className="mx-auto my-10 w-[90%] space-y-80 md:w-4/5 lg:w-2/3">
      {/* // ! first section */}
      <div
        className="flex flex-col items-center justify-between border
      border-black md:flex-row md:items-center md:space-x-10"
      >
        {/* // ! image div */}
        <div className="relative h-[300px] w-[60%] md:h-[400px] md:w-1/2">
          <Image
            src="/images/about.png"
            alt=""
            fill
            className="h-full w-full object-cover"
          />
        </div>
        {/* // ! 2nd part of section */}
        <div
          className="mt-10 flex flex-col items-center justify-between space-y-5 border
         border-yellow-300 text-center md:mt-0 md:w-1/2 md:space-y-10"
        >
          <Image
            src="/images/about.png"
            alt=""
            width={100}
            height={100}
            className="hidden md:flex"
          />
          <h2 className="text-4xl font-semibold">WELCOME TO CULINARY FAIR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            blanditiis laborum praesentium sit quisquam, officiis, animi, omnis
            ea dicta quae corrupti quaerat. Dicta nemo iure tempore quo?
            Reiciendis, aliquid iusto.
          </p>
        </div>
      </div>
      {/* // ! OUR STORY section */}
      <div
        className="flex flex-col items-center justify-between border
      border-black md:flex-row-reverse md:items-center md:space-x-10"
      >
        {/* // ! image div */}
        <div className="relative h-[300px] w-[60%] md:h-[400px] md:w-1/2">
          <Image
            src="/images/about.png"
            alt=""
            fill
            className="h-full w-full object-cover"
          />
        </div>
        {/* // ! 2nd part of section */}
        <div
          className="mt-10 flex flex-col items-center justify-between space-y-5 border
         border-yellow-300 text-center md:mt-0 md:w-1/2 md:space-y-10"
        >
          <Image
            src="/images/about.png"
            alt=""
            width={100}
            height={100}
            className="hidden md:flex"
          />
          <h2 className="text-4xl font-semibold">WELCOME TO CULINARY FAIR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            blanditiis laborum praesentium sit quisquam, officiis, animi, omnis
            ea dicta quae corrupti quaerat. Dicta nemo iure tempore quo?
            Reiciendis, aliquid iusto.
          </p>
        </div>
      </div>
      {/* // ! OUR TEAM SECTION */}
      <div className="flex flex-col space-y-20">
        <div className="flex items-center justify-around">
          <Image
            src="/images/about.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold">Anja Bulatovic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              impedit a blanditiis omnis, obcaecati animi optio expedita. Nihil
              dicta nobis reiciendis. Ducimus porro quaerat, nobis sequi
              provident culpa iusto eius.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-around">
          <Image
            src="/images/about.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="w-1/2">
            <h3 className="text-3xl font-semibold">Anja Bulatovic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              impedit a blanditiis omnis, obcaecati animi optio expedita. Nihil
              dicta nobis reiciendis. Ducimus porro quaerat, nobis sequi
              provident culpa iusto eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
