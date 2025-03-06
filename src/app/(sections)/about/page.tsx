import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left flex-1 p-8">
          <h2 className="my-6 text-2xl tracking-tight font-extrabold text-tertiary sm:text-3xl md:text-4xl">
            About Us
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-foreground">
              We are Kel and Krevan. Based in London and Northern Ireland,
              aquascaping and fishkeeping has always been a passion of ours as
              children. After years of aquascaping and fishkeeping as a hobby,
              we decided to come together, and bring it a step futhera. Now we
              are expanding our horizon. We know how difficult it can be to get
              started and we can help you through every step of the way. Having
              an aquarium or a pond is extremely beautiful, rewarding and fun.
              With our combined knowledge of plants, fish, aquariums, equipment
              and DIY, we can help you!
            </p>
            <p>
              We use only the best quality plants and décor from our trusted
              suppliers, who take as much pride as we do in providing our
              service.
            </p>
            <h1 className="text-xl text-primary">
              Listening to your aims and objectives
            </h1>
            <p>
              We seek to understand where and how you would like to improve your
              current set up. Following our initial assessment, we then offer
              solutions and plans to ensure that your refurbished aquarium is
              everything you hope for. We will base the fish tank design on
              whatever style you would like to achieve, whether that be a
              hardscape or a planted aquarium, and then supplement with our
              suggestions based on our experience and skills. The result will be
              a finished aquarium that is perfect for your needs.
            </p>
            <h1 className="text-xl text-primary">Care advice</h1>
            <p>
              We can also advise on the differing care levels of plants and
              fish, as well as the varying systems to help keep your aquarium
              happy and healthy for the longer term, ensuring your aquarium is a
              pleasure to own. If you would like help to totally refurbish your
              aquarium, then please do contact us for help.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            className="h-56 w-full object-cover object-top hidden lg:block md:h-96 lg:w-full lg:h-full"
            src="/pond.jpg"
            alt=""
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
