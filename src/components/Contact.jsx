import React from "react";
import InputField from "./ui/InputField";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="grid grid-rows-1 md:grid-rows-2 min-h-screen">
        {/* First Grid: Background Image with Title */}
        <div className="relative h-[60vh] w-full flex-col-center text-white text-3xl font-bold text-center px-4">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{ backgroundImage: `url(${assets.images.contactus_img})` }}
          ></div>

   
          <h1 className="relative z-10 mt-5">Connect with Us</h1>

      
          <p className="relative z-10 text-lg font-medium mt-4 px-4 sm:px-20 md:px-32 lg:px-48">
            Ready to Make a Move? Let’s Build Your Future Together.
          </p>
        </div>

        {/* Second Grid: Form */}
        <div className="flex items-center justify-center p-8">
      <form className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField id="name" label="Name" type="text" required />
          <InputField id="email" label="Email" type="email" required />
        </div>
        <div className="mt-4">
          <InputField id="message" label="Message" type="textarea" required />
        </div>
        <button type="submit" className="mt-4 btn-gradient-pb">
          Submit
        </button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Contact;
