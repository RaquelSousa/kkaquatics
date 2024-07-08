import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServicesInterface, services } from "@/app/constants/services.enum";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div id="services" className="grid grid-cols-4 gap-4 mt-16">
      {services.map((service: ServicesInterface) => (
        <Card
          key={service.id}
          className={`h-96 ${service.background} bg-cover bg-background/80 bg-blend-multiply text-center`}
        >
          <CardHeader>
            <CardTitle className="pt-5">{service.title}</CardTitle>
            <CardDescription className="pt-5">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{service.content}</p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Services;
