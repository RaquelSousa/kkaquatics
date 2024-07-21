import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="relative bg-background overflow-hidden mt-16">
      <div className="flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left flex-auto p-28">
          <h2 className="my-6 text-2xl tracking-tight font-extrabold text-tertiary sm:text-3xl md:text-4xl">
            About Us
          </h2>
          <p className="text-foreground">
            We are Kel and Krevan. Based in London and Northern Ireland,
            aquascaping and fishkeeping has always been a passion of ours as
            children. After years of aquascaping and fishkeeping as a hobby, we
            decided come together, and bring it a step futher and start doing
            youtube videos. Now we are expanding our horizon. We know how
            difficult it can be to get started and we can help you through every
            step of the way. Having an aquarium or a pond is extremely
            beautiful, rewarding and fun. With our combined knowledge of plants,
            fish, aquariums, equipment and DIY, we can help you!
          </p>
        </div>
        <div className="flex-auto">
          <Image
            className="h-56 w-full object-cover object-top hidden lg:block md:h-96 lg:w-full lg:h-full"
            src="/pond.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 mr-5">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-tertiary sm:text-3xl md:text-4xl">
                About Us
              </h2>
              <p className="text-foreground">
                We are Kel and Krevan. Based in London and Northern Ireland,
                aquascaping and fishkeeping has always been a passion of ours as
                children. After years of aquascaping and fishkeeping as a hobby,
                we decided come together, and bring it a step futher and start
                doing youtube videos. Now we are expanding our horizon. We know
                how difficult it can be to get started and we can help you
                through every step of the way. Having an aquarium or a pond is
                extremely beautiful, rewarding and fun. With our combined
                knowledge of plants, fish, aquariums, equipment and DIY, we can
                help you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/pond.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div> */}
    </div>
  );
};

export default About;
