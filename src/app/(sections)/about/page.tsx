import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="relative bg-background overflow-hidden mt-16">
      <div className="flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left flex-1 p-14 lg:p-28">
          <h2 className="my-6 text-2xl tracking-tight font-extrabold text-tertiary sm:text-3xl md:text-4xl">
            About Us
          </h2>
          <p className="text-foreground">
            We are Kel and Krevan. Based in London and Northern Ireland,
            aquascaping and fishkeeping has always been a passion of ours as
            children. After years of aquascaping and fishkeeping as a hobby, we
            decided to come together, and bring it a step futher and start doing
            youtube videos. Now we are expanding our horizon. We know how
            difficult it can be to get started and we can help you through every
            step of the way. Having an aquarium or a pond is extremely
            beautiful, rewarding and fun. With our combined knowledge of plants,
            fish, aquariums, equipment and DIY, we can help you!
          </p>
        </div>
        <div className="flex-1">
          <Image
            className="h-56 w-full object-cover object-top hidden lg:block md:h-96 lg:w-full lg:h-full"
            src="/pond.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
