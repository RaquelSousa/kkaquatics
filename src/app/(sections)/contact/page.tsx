"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/send-email";
import React, { FormEvent } from "react";

const Contact = () => {
  const submitEmail = (event: any) => {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    console.log("sending email...", elements);
    sendEmail({
      name: elements.name.value,
      email: elements.email.value,
      message: elements.message.value,
      subject: elements.subject.value,
    });
  };
  return (
    <section className="pt-16" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-muted-foreground sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8" onSubmit={submitEmail}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your name
            </label>
            <Input
              type="text"
              id="name"
              className="shadow-sm shadow-tertiary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="KNK Aquatics"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <Input
              type="email"
              id="email"
              className="shadow-sm shadow-tertiary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@knkaquatics.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <Input
              type="text"
              id="subject"
              className="shadow-sm shadow-tertiary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Short description of how we can help"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <Textarea
              id="message"
              rows={6}
              className="shadow-sm shadow-tertiary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="How can we help, the more detail the better!"
            ></Textarea>
          </div>
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
