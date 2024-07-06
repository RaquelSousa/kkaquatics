import React from "react";
import Image from "next/image";
import NavMenu from "../navigation/nav-menu";
import { ModeToggle } from "../mode-toggle/mode-toggle";

const header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background-2 backdrop-blur">
      <div className="px-4 lg:px-6 py-2.5 sticky bg-background-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl">
          <a href="/" className="flex items-center">
            <Image
              className="flex items-center"
              src="/kandkaquatics_logo.png"
              width={100}
              height={100}
              alt="logo"
            ></Image>
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              K&K Aquatics
            </span>
          </a>
          <NavMenu />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default header;
