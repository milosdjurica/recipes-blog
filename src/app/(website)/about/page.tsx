import AboutSections from "@/src/components/about/AboutSections";
import OurTeamPerson from "@/src/components/about/OurTeamPerson";
import React from "react";

const welcome =
  "First, we want to welcome you to The Culinary Fair, a place where we take pride in our culinary journey, and our mission is to share our love for cooking with you. We aren't just another faceless food blog; We're a passionate team of culinary enthusiasts who have come together to create a culinary haven for food lovers like you.";
const ourStory =
  "Our team is a small, close-knit group of food lovers who share a deep passion for experimenting in the kitchen and discovering new recipes. Our journey led us to create this lovely cooking blog, where we share a treasure trove of recipes for every meal of the day. Whether you're looking for ideas for appetizers, lunch, dinner, or other, we've got you covered.";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate, minus voluptatem non ad vel praesentium accusantium dolorum rem tempore debitis. Distinctio placeat obcaecati veritatis magni animi, accusantium laboriosam voluptatibus?";

export default function About() {
  return (
    // !First
    <div className="mx-auto my-10 w-[90%] space-y-80 lg:w-3/4">
      {/* // ! first section */}

      <AboutSections
        title="WELCOME TO CULINARY FAIR"
        text={welcome}
        imageUrl="/images/about-welcome.jpg"
        alt="alt for pic"
        reverse={false}
      />
      <AboutSections
        title="OUR STORY"
        text={ourStory}
        imageUrl="/images/about-story.jpg"
        alt="alt for pic"
        reverse={true}
      />
      {/* // ! OUR TEAM SECTION */}
      <div className="flex flex-col space-y-40">
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