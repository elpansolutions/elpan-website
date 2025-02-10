/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */

import React, 
{ 
  useRef, 
  useEffect,
  useState, 
  lazy, 
  Suspense,
} from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import HeroAnimationData from "../assets/images/Lottie/Animation_mob.json";

// Lazy load Lottie to improve performance
const Lottie = lazy(() => import("react-lottie-player"));

export default function Hero() {
  const navigate = useNavigate();
  const animationRef = useRef(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const speed = 0.0005; // Adjusted for smoother animation

  useEffect(() => {
    let frameId;
    const startTime = performance.now();

    const animate = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (speed * 1000), 0.95); // Normalize progress

      setAnimationProgress(progress);

      if (progress < 0.95) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="hero w-full flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left px-4 sm:px-8 lg:px-12 mt-20 sm:mt-24 lg:mt-32">
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mt-2 lg:mt-2">
        <Fade bottom triggerOnce delay={300}>
          <h1 className="text-5xl sm:text-5xl text-theme-blue leading-tight mb-5">
            <span className="font-bold text-blue-500">Your Partner in Innovation:</span> <br />
            Where Challenges <br />
            Meets <br />
            Solutions
          </h1>
          <p className="font-light text-lg text-black-400 leading-relaxed mb-8">
            At Elpan Solutions, we create transformative experiences, not just services.
            <br />
            In today’s digital world, businesses need more than technology — they need a partner
            who understands their vision and keeps them ahead of the curve.
            <br />
            That’s where we come in.
          </p>
          <Button
            onClick={() => handleNavigation("/about")}
            className="flex justify-center items-center w-48 h-12 text-theme-blue border-2 border-theme-blue rounded-lg transition duration-200 hover:bg-theme-blue hover:text-white mx-auto lg:mx-0"
          >
            Learn More
          </Button>
        </Fade>
      </div>

      {/* Lottie Animation Section (Right side of the text) */}
      <div className="flex justify-center items-center w-full lg:w-1/2 order-first lg:order-last mt-6 lg:mt-6">
        <Fade direction="down" triggerOnce delay={450}>
          <Suspense fallback={<div className="h-40 w-40 animate-pulse bg-gray-300 rounded-lg" />}>
            <Lottie
              ref={animationRef}
              animationData={HeroAnimationData}
              play
              loop={false} // Play only once
              goTo={animationProgress} // Controlled animation progress
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
            />
          </Suspense>
        </Fade>
      </div>
    </section>
  );
}
