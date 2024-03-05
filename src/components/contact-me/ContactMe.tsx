import React from "react";
import Map from "./Map";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <div
      id="contact-me"
      className="md:h-screen h-[160vh] sm:h-[275vh] w-full bg-mainCol overflow-hidden"
    >
      <div className="flex flex-col w-11/12 md:w-4/5 mx-auto h-full gap-y-16">
        <div className="flex items-center justify-center w-full pt-[7rem] md:pt-[10rem]">
          <h1 className="font-bold text-xl md:text-4xl text-darkerCol">{`<Contact Me />`}</h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-10 md:gap-x-20 w-full">
          <div className="w-full md:w-1/2 ">
            <Map />
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
