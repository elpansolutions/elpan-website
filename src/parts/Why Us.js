/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Changed to use Fade only

export default function WhyUs({ data }) {
  return (
    <div className="bg-white py-4 mb-24 sm:mb-18 xl:mb-16 mt-2">
      <div className="container mx-auto">
        {/* Title and Description Section with Fade Animation */}
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Why Choose Us</h1>
          <p className="font-light text-lg text-black text-center mb-12 sm:mb-5 xl:mb-0">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        {/* Main content - Left and Right columns */}
        <div className="flex flex-col sm:flex-row">
          {/* Left Column with Fade Animation from Left */}
          <div className="flex-col">
            {
              data[0].map((item, index) => (
                <Fade direction="left" triggerOnce delay={500 * index} key={index}>
                  <div className="bg-white flex flex-row items-center p-4 my-4 mx-2 sm:my-5 sm:mx-5 xl:my-10 xl:mx-6 rounded-xl shadow-xl border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:bg-light-theme-purple/50 hover:shadow-2xl">
                    <img src={item.imageUrl} alt="" className="w-16 sm:w-20 xl:w-24" />
                    <div className="flex-col pl-6">
                      <h2 className="text-theme-blue text-xl sm:text-2xl xl:text-3xl font-semibold">{item.title}</h2>
                      <p className="font-light text-black text-sm sm:text-base xl:text-lg">{item.description}</p>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>

          {/* Right Column with Fade Animation from Right */}
          <div className="flex-col -mt-4 sm:mt-8">
            {
              data[1].map((item, index) => (
                <Fade direction="right" triggerOnce delay={500 * index} key={index}>
                  <div className="bg-white flex flex-row items-center p-4 my-4 mx-2 sm:my-5 sm:mx-5 xl:my-10 xl:mx-6 rounded-xl shadow-xl border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:bg-light-theme-purple/50 hover:shadow-2xl">
                    <img src={item.imageUrl} alt="" className="w-16 sm:w-20 xl:w-24" />
                    <div className="flex-col pl-6">
                      <h2 className="text-theme-blue text-xl sm:text-2xl xl:text-3xl font-semibold">{item.title}</h2>
                      <p className="font-light text-black text-sm sm:text-base xl:text-lg">{item.description}</p>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
