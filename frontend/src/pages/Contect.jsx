import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouch = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 800); // mobile tap hover timing
  };

  return (
    <div className="px-6 md:px-20 lg:px-32 py-10">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-700">
        <p>
          CONTACT <span className="text-primary">US</span>
        </p>
        <div className="h-[2px] w-14 bg-black mx-auto mt-2"></div>
      </div>

      {/* Content */}
      <div className="my-14 flex flex-col-reverse md:flex-row items-center justify-center gap-12 text-gray-600">
        {/* Text Section */}
        <div className="flex flex-col items-start gap-6 max-w-md">
          <div>
            <p className="font-semibold text-lg text-gray-800">OUR OFFICE</p>
            <p className="text-gray-500 leading-relaxed">
              Iqbal Colony Sargodha <br /> Pakistan, Sargodha, Sargodha
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">CONTACT INFO</p>
            <p className="text-gray-500 leading-relaxed">
              Phone: (+92) 316-8606867 <br /> Email: hashirmehran1002@gmail.com
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">
              CAREERS AT PRESCRIPTO
            </p>
            <p className="text-gray-500 leading-relaxed">
              Learn more about our teams and job openings.
            </p>
          </div>

          {/* Modern Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouch}
            className={`relative overflow-hidden px-8 py-3 rounded-full border border-gray-800 font-medium text-sm transition-all duration-300 ease-out ${
              isHovered
                ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg scale-105"
                : "bg-white text-gray-800"
            }`}
          >
            <span
              className={`absolute inset-0 transition-opacity duration-300 ${
                isHovered ? "opacity-20 bg-white" : "opacity-0"
              }`}
            ></span>
            Explore Jobs
          </button>
        </div>

        {/* Image Section */}
        <img
          className="w-full md:max-w-[400px] rounded-xl shadow-md"
          src={assets.contact_image}
          alt="Contact"
        />
      </div>
    </div>
  );
};

export default Contact;
