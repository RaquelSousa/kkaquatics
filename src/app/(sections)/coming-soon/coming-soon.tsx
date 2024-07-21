import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative px-4">
      <div className="top-0 left-0 w-full h-full bg-cover bg-center opacity-30"></div>
      <Image
        alt="logo"
        src="/kandkaquatics_logo.png"
        width={250}
        height={250}
      />
      <h1 className="text-5xl md:text-7xl font-bold mb-8 z-10">Coming Soon</h1>
      <p className="text-muted-foreground text-xl md:text-2xl">
        We are working hard to bring you something amazing. Stay tuned!
      </p>
      {/* <p className="text-muted-foreground text-xl md:text-xl pt-10">
        Meanwhile, you can subscribe to our newsletter below
      </p>

      <div className="flex w-full max-w-sm items-center space-x-2 pt-10">
        <Input
          type="email"
          placeholder="Email"
          className="shadow-sm shadow-tertiary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        />
        <Button type="submit">Subscribe</Button>
      </div> */}
    </div>
  );
};

export default ComingSoon;
