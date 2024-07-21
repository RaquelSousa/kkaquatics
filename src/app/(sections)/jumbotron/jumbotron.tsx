import React from "react";
import { ArrowDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Jumbotron = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/krevan-aquarium.jpg')] bg-cover bg-tertiary-foreground/75 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-tertiary">
          We unlock your aquarium’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-primary-foreground lg:text-xl sm:px-16 lg:px-48">
          Here at K&K Aquatics we focus on your needs, wether you want a custom
          made aquarium for your home, a pond in your garden, or a beautiful
          aquascape in your workplace
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-4">
          <Link href="#contact">
            <Button>
              <ArrowDown className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </Link>
          <Link href="#services">
            <Button
              variant="ghost"
              className="rounded-lg border border-tertiary text-primary-foreground"
            >
              What We Do
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
