import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-700">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
        <div className="h-[2px] w-14 bg-black mx-auto mt-2"></div>
      </div>

      {/* About section */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-xl shadow-md"
          src={assets.about_image}
          alt="About"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b className="text-gray-800 text-base">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl my-4 mb-8 text-center">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
        {[
          {
            title: 'EFFICIENCY',
            desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.',
          },
          {
            title: 'CONVENIENCE',
            desc: 'Access to a network of trusted healthcare professionals in your area.',
          },
          {
            title: 'PERSONALIZATION',
            desc: 'Tailored recommendations and reminders to help you stay on top of your health.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 px-8 md:px-12 py-10 flex flex-col gap-4 text-[15px] text-gray-600 cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm"
          >
            <b>{item.title}:</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
