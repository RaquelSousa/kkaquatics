import React from "react";
import { ModeToggle } from "../mode-toggle/mode-toggle";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const header = () => {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <Image
              src="/kandkaquatics_logo.png"
              width={100}
              height={100}
              alt="logo"
            ></Image>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              K&K Aquatics
            </span>
          </a>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <NavigationMenu className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="block py-2 pr-4 pl-3 text-primary border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Blog
                </NavigationMenuLink>
              </Link>

              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Shop
                </NavigationMenuLink>
              </Link>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </NavigationMenuLink>
              </Link>
              <ModeToggle />
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
