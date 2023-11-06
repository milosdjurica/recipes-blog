import AboutSections from "@/src/components/about/AboutSections";
import OurTeamPerson from "@/src/components/about/OurTeamPerson";
import React from "react";

const welcome =
  "First, we want to welcome you to The Culinary Fair, a place where we take pride in our culinary journey, and our mission is to share our love for cooking with you. We aren't just another faceless food blog; We're a passionate team of culinary enthusiasts who have come together to create a culinary haven for food lovers like you.";
const ourStory =
  "Our team is a small, close-knit group of food lovers who share a deep passion for experimenting in the kitchen and discovering new recipes. Our journey led us to create this lovely cooking blog, where we share a treasure trove of recipes for every meal of the day. Whether you're looking for ideas for appetizers, lunch, dinner, or other, we've got you covered.";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate, minus voluptatem non ad vel praesentium accusantium dolorum rem tempore debitis. Distinctio placeat obcaecati veritatis magni animi, accusantium laboriosam voluptatibus?";

const anja1 =
  "Hi, I'm Anya! Along with being a food lover, I'm a professional copywriter and content writer. I've recognized the perfect opportunity to merge my two passions - cooking and writing. The result? The Culinary Fair is a blog that's a testament to my dedication to the culinary arts and the written craft. With a deep appreciation for wholesome, healthy, and delicious food, The Culinary Fair's focus is creating recipes that celebrate natural ingredients, whole grains, good fats, and an abundance of fresh fruits and vegetables. My love for the culinary world goes beyond the kitchen.";
const anja2 =
  "I'm on a mission to make your cooking experience a delightful and enriching adventure. Whether you're a seasoned home chef or just starting your culinary journey, The Culinary Fair is designed to inspire, educate, and simplify your path to culinary excellence. Feel free to reach out to us with your questions or simply to say 'hi.' - Remember, this is more than just a blog; it's a journey that invites you to explore the world of flavors, one delicious recipe at a time.";

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
      <div className="space-y-20">
        <OurTeamPerson
          name="Anja Bulatovic"
          text={anja1}
          imageUrl="/images/anja-siva.png"
          alt="alt for pic"
          reverse={false}
        />
        <OurTeamPerson
          text={anja2}
          imageUrl="/images/doodle.png"
          alt="doodle alt"
          reverse={true}
        />
      </div>
    </div>
  );
}
