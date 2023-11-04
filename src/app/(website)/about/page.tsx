import AboutSections from "@/src/components/about/AboutSections";
import OurTeamPerson from "@/src/components/about/OurTeamPerson";
import React from "react";

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quos vero culpa modi, corporis accusamus alias commodi fugit molestiae eaque obcaecati perspiciatis quasi. Animi est dignissimos labore nam dolorum minus.";

export default function About() {
  return (
    // !First
    <div className="mx-auto my-10 w-[90%] space-y-80 md:w-4/5 lg:w-2/3">
      {/* // ! first section */}
      <AboutSections
        title="WELCOME TO CULINARY FAIR"
        text={lorem}
        imageUrl="/images/about.png"
        alt="alt for pic"
        reverse={false}
      />
      <AboutSections
        title="OUR STORY"
        text={lorem}
        imageUrl="/images/about.png"
        alt="alt for pic"
        reverse={true}
      />
      {/* // ! OUR TEAM SECTION */}
      <div className="flex flex-col space-y-20">
        <OurTeamPerson
          name="Anja Bulatovic"
          text={lorem}
          imageUrl="/images/about.png"
          alt="alt for pic"
          reverse={false}
        />
        <OurTeamPerson
          name="Anja Bulatovic"
          text={lorem}
          imageUrl="/images/about.png"
          alt="alt for pic"
          reverse={true}
        />
      </div>
    </div>
  );
}
