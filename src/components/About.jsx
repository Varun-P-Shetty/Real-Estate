import React from "react";
import { assets,stats} from "../assets/assets";

const About = () => {
  return (
    <div className="">
      <div
        className="flex-col-center container mx-auto px-4 md:px-20 lg:px-32 w-full pt-20"
        id="About"
      >
        <h1 className="text-2xl sm:text-4xl font-bold">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Our Brand
          </span>
        </h1>
        <p className="text-gray-700 max-w-80 text-center mt-4 mb-10">
          Passionate About Properties, Dedicated to Your Vision
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10 w-full min-h-screen">
          {/* Image Wrapper */}
          <div className="w-full sm:w-1/2 flex justify-start sticky top-0 h-full">
            <img
              src={assets.images.brand_img}
              alt="brand image"
              className="w-[95%] md:w-full h-auto max-w-lg object-contain"
            />
          </div>

          {/* Stats + Paragraph Wrapper */}
          <div className="flex flex-col w-full sm:w-1/2 mt-6 md:mt-7">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-7">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h2 className="text-4xl font-bold">{stat.number}</h2>
                  <p className="text-gray-700 text-sm">{stat.text}</p>
                </div>
              ))}
            </div>

            {/* Paragraph Below the Grid */}
            <p className="text-gray-700 text-md mt-6 md:mt-10 sm:ml-5 md:ml-7 w-full mb-10">
            Welcome to a world where dreams turn into addresses! With a passion for excellence and a commitment to customer satisfaction, we provide top-tier real estate services to help you find your perfect home or investment property. Whether you're buying, selling, or exploring rental options, our team of experienced professionals ensures a seamless and stress-free experience. We specialize in modern, luxury, and budget-friendly properties tailored to your unique needs. Let us guide you on your journey to finding the ideal space to call home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
