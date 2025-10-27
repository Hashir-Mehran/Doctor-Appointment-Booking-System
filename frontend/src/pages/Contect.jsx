import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouch = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 1000); // 1 second ke baad hover off ho jaye
  };

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Iqbal Colony Sargodha <br /> Pakistan, Sargodha, Sargodha
          </p>
          <p className="text-gray-500">
            Phone: (+92) 316-8606867 <br /> Email: hashirmehran1002@gmail.com
          </p>

          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          {/* ✅ Fully working hover/tap button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouch}
            className={`border border-black px-8 py-4 text-sm rounded-md transition-all duration-300 cursor-pointer ${
              isHovered
                ? "bg-black text-white scale-105 shadow-md"
                : "bg-white text-black"
            }`}
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
