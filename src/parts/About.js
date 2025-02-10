/* eslint-disable max-len */

import React from 'react';
// import { Fade } from 'react-awesome-reveal';
import { Player } from '@lottiefiles/react-lottie-player'; // Updated import
import HeroAnimation from '../assets/images/Lottie/About Us.json'; // Import your Lottie animation file (update the path accordingly)
// import Button from "../elements/Button";

export default function About() {
  return (
    <>
      {/* Hero Section (About Us Section) */}
      <section className="hero py-8 sm:py-16 md:py-20 mt-10 sm:mt-10 lg:mt-18 flex flex-col lg:flex-row items-center mb-[-4rem]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 sm:px-12">
          {/* Left Section: Text Content */}
          <div className="w-full max-w-3xl text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl text-theme-blue font-extrabold leading-tight mb-6">
              About Us
            </h1>
            <p className="font-light text-lg sm:text-xl text-black-400 leading-relaxed mb-4">
              We are Elpan Solutions!
            </p>
            <p className="font-light text-lg sm:text-xl text-black-400 leading-relaxed mb-4">
              We are a team of passionate tech enthusiasts committed to providing world-class
              solutions that drive efficiency, engagement, and innovation.
            </p>
            <p className="font-light text-lg sm:text-xl text-black-400 leading-relaxed mb-6">
              Whether you are looking to harness the power of AI, build a seamless digital presence,
              or optimize your business processes, we&apos;ve got you covered.
            </p>
            <p className="font-light text-lg sm:text-xl text-black-400 leading-relaxed mb-6">
              What sets us apart is our commitment to understanding your unique challenges 
              and delivering personalized, scalable solutions that align with your vision. 
              Our team of dedicated professionals combines technical proficiency with creative
              thinking to craft solutions that not only solve today&apos;s challenges 
              but also future-proof your business for tomorrow.            
            </p>
          </div>

          {/* Right Section: Lottie Animation */}
          <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <Player
              src={HeroAnimation}
              className="player"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section with 3D Card Effect */}
      {/* <Fade bottom triggerOnce>
        <section className="flex container mx-auto justify-center pt-0 pb-2 -mt-24">
          <div className="flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl bg-white text-theme-blue p-8 sm:px-12 sm:py-16 xl:px-16 shadow-2xl transition-transform duration-300 border-4 border-theme-blue">
            
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 leading-tight text-center">
              Ready to transform your business? <br />
              Let&apos;s build the future together.
            </h2>

            <Fade delay={300} triggerOnce>
              <p className="font-light text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 text-center">
                We are here to help you take your business to the next level. Don't wait,
                contact us today to get started!
              </p>
            </Fade>

            <Fade direction="up" triggerOnce delay={50}>
              <div className="flex justify-center mt-6">
                <Button
                  href="/discuss-project"
                  type="link"
                  className="flex bg-theme-blue text-white text-xl sm:text-2xl tracking-wider items-center justify-center w-56 sm:w-72 lg:w-96 h-16 p-5 border-2 border-theme-blue shadow-lg rounded-full transform transition-transform duration-500 hover:translate-y-[-3px] hover:shadow-xl"
                >
                  Contact Us
                </Button>
              </div>
            </Fade>
          </div>
        </section>
      </Fade> */}
    </>
  );
}
