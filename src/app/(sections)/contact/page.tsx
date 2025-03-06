"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/send-email";
import React, { FormEvent, useEffect, useState } from "react";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageSending, setIsMessageSending] = useState(false);

  const submitEmail = async (event: any) => {
    setIsMessageSending(true);
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const isSent = await sendEmail({
      name: elements.name.value,
      email: elements.email.value,
      message: elements.message.value,
      subject: elements.subject.value,
    });
    setIsMessageSending(false);
    setIsMessageSent(isSent);
  };

  return (
    <section className="pt-16" id="contact">
      <div className="px-4 mx-auto max-w-screen-md">
        {isMessageSending ? (
          <div className="p-4 bg-tertiary/60 rounded text-center text-foreground">
            We are sending your message, please give us a moment...
          </div>
        ) : isMessageSent ? (
          <div className="p-4 bg-tertiary/60 rounded text-center text-foreground">
            Your message has been sent, thank you!
          </div>
        ) : (
          <>
            <h2 className="mb-4 text-4xl tracking-tight text-tertiary font-extrabold text-center">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-muted-foreground sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8" onSubmit={submitEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Your name
                </label>
                <Input
                  type="text"
                  id="name"
                  className="shadow-sm shadow-primary text-sm rounded-lg block w-full p-2.5"
                  placeholder="KNK Aquatics"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <Input
                  type="email"
                  id="email"
                  className="shadow-sm shadow-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
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
                  className="shadow-sm shadow-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Short description of how we can help"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  className="shadow-sm shadow-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="How can we help, the more detail the better!"
                ></Textarea>
              </div>
              <Button type="submit">Send message</Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
