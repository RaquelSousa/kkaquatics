import React from "react";
import Image from "next/image";
import { ServicesInterface, services } from "@/app/constants/services.enum";

const Services = () => {
  return (
    <div id="services" className="px-12">
      <div className="mt-16 grid divide-x divide-y divide-border overflow-hidden rounded-3xl border border-border sm:grid-cols-2 lg:grid-cols-  lg:divide-y-0 xl:grid-cols-4">
        {services.map((service: ServicesInterface) => (
          <div
            key={service.id}
            className="group relative bg-background transition hover:z-[1] hover:shadow-2xl"
          >
            <div className="relative flex flex-col h-full">
              <div className="flex flex-col h-full">
                <Image
                  className="h-1/2 w-full object-cover object-top lg:w-full"
                  src={service.background}
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="space-y-4 p-8">
                  <h5 className="text-xl font-semibold text-tertiary transition ">
                    {service.title}
                  </h5>
                  <p className="text-foreground">{service.description}</p>
                  <p className="text-foreground">{service.content}</p>
                </div>
              </div>
              <a className="" href={service.link} target="_blank">
                <div className="space-y-2 p-8 hover:cursor-pointer text-primary font-bold hover:underline">
                  {`Check our video on youtube ->`}
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
