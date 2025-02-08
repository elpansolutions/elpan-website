/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Fade } from 'react-awesome-reveal';

export default function WhyUs({ data }) {
  return (
    <div className="bg-white py-8 mb-24 sm:mb-18 xl:mb-16 mt-2">
      <div className="container mx-auto">
        {/* Title and Description Section with Fade Animation */}
        <Fade bottom triggerOnce>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-theme-blue text-center font-bold mb-1">
            Why Choose Us
          </h1>
          <p className="font-light text-lg text-black-400 text-center mb-4">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        {/* Main content - Left and Right columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Left Column with Fade Animation from Left */}
          <div className="flex flex-col gap-6">
            {
              data[0].map((item) => (
                <Fade direction="left" triggerOnce delay={500} key={item.title || item.id}> {/* Use unique key */}
                  <div className="bg-white flex flex-row items-center p-4 sm:p-6 mx-2 sm:mx-4 xl:mx-6 my-4 rounded-xl shadow-xl border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:bg-light-theme-purple/50 hover:shadow-2xl overflow-hidden">
                    <img src={item.imageUrl} alt="" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32" />
                    <div className="flex-col pl-4 sm:pl-6 flex-1">
                      <h2 className="text-theme-blue text-base sm:text-lg xl:text-xl font-semibold break-words">
                        {item.title}
                      </h2>
                      <p className="font-light text-black text-sm sm:text-base xl:text-lg break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>

          {/* Right Column with Fade Animation from Right */}
          <div className="flex flex-col gap-6 -mt-4 sm:mt-8">
            {
              data[1].map((item) => (
                <Fade direction="right" triggerOnce delay={500} key={item.title || item.id}> {/* Use unique key */}
                  <div className="bg-white flex flex-row items-center p-4 sm:p-6 mx-2 sm:mx-4 xl:mx-6 my-4 rounded-xl shadow-xl border border-light-theme-purple transform transition-all duration-300 hover:scale-105 hover:bg-light-theme-purple/50 hover:shadow-2xl overflow-hidden">
                    <img src={item.imageUrl} alt="" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32" />
                    <div className="flex-col pl-4 sm:pl-6 flex-1">
                      <h2 className="text-theme-blue text-base sm:text-lg xl:text-xl font-semibold break-words">
                        {item.title}
                      </h2>
                      <p className="font-light text-black text-sm sm:text-base xl:text-lg break-words">
                        {item.description}
                      </p>
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

// Prop Types validation
WhyUs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired, // Assuming each item has a unique 'id'
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
  ).isRequired,
};
