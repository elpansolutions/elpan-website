import React, { memo, useEffect, useState } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal'; // Import Fade animation
import PropTypes from 'prop-types'; // Import PropTypes
import Button from '../elements/Button/index.js';

// Lazy load Lottie to improve performance
const Card = memo(({ item, index }) => {
  const [isInViewport, setIsInViewport] = useState(false);

  // Lazy load cards based on the viewport visibility
  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.getElementById(`card-${item.id}`);
      const rect = cardElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInViewport(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [item.id]);

  return (
    <Fade bottom triggerOnce delay={150 * index}>
      <Zoom
        triggerOnce
        cascade
        duration={500} // Animation duration for zoom effect
        delay={20 * index} // Adds delay based on the card index for staggered animation
        in={isInViewport} // Only animate when in the viewport
      >
        <Button type="link" href={`/solution/${item.id}`}>
          <div
            id={`card-${item.id}`}
            className="group rounded-xl shadow-2xl w-80 h-[450px] transform transition-all duration-500 flex flex-col justify-between"  // Increased size here
          >
            <div className="relative h-2/3">
              <img
                src={item.imageUrl}
                srcSet={`${item.imageUrl} 1x, ${item.imageUrl.replace('.jpg', '@2x.jpg')} 2x, ${item.imageUrl.replace('.jpg', '@3x.jpg')} 3x`}
                alt="Solutions"
                decoding="async"
                className="rounded-t-xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-t-xl">
                <Button className="focus:outline-none">
                  <svg
                    className="w-16 h-16 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="py-4 px-6 text-center h-1/3 flex flex-col justify-center">
              {/* Title with fixed font size */}
              <h2 className="text-theme-blue text-lg sm:text-xl font-semibold">{item.title}</h2>
              {/* Description with responsive font size */}
              <p className="font-light text-gray-500 text-sm sm:text-base">{item.type}</p>

              {/* Learn More Button */}
              <div className="mt-4">
                <Button
                  type="link"
                  href={`/solution/${item.id}`}
                  className="text-theme-blue font-semibold text-sm py-1 px-3 border border-theme-blue rounded-md hover:bg-theme-blue hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Button>
      </Zoom>
    </Fade>
  );
});

// Define prop types for Card component
Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired, // Add index as prop
};

const Solutions = ({ data }) => {
  return (
    <section className="bg-gray-50 py-0 pt-2 pb-4 min-h-screen flex flex-col items-center mb-[1.7rem]">
      <div className="container mx-auto">
        {/* Add Fade animation to the header */}
        <Fade bottom triggerOnce delay={200}>
          <h1 className="text-5xl text-theme-blue text-center font-bold mb-0.5">Our Solutions</h1>
        </Fade>
        
        {/* Add Fade animation to the paragraph */}
        <Fade bottom triggerOnce delay={400}>
          <p className="font-light text-lg text-black-400 text-center mb-4">
            We are ready to scale up your business with our great work result.
          </p>
        </Fade>

        {/* Grid layout with responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {data.map((item, index) => (
            <Card key={item.id} item={item} index={index} /> // Pass index to Card
          ))}
        </div>
      </div>
    </section>
  );
};

// Define prop types for Solutions component
Solutions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Solutions;
