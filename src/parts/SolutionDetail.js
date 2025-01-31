/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import NotFound from 'assets/images/NotFound.png';
import Button from 'elements/Button';
import { useNavigate } from 'react-router-dom';

export default function SolutionDetail({ data }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (data === null) {
    return (
      <section className="container mx-auto mt-8 px-6">
        <Fade bottom triggerOnce>
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={NotFound}
              alt="Not Found"
              className="sm:w-3/4 xl:w-5/12 mt-5 object-contain"
            />
            <h1 className="text-theme-blue text-4xl font-extrabold mt-8">
              Project Not Found
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              Sorry, the project you are looking for doesn’t exist.
            </p>
            <Button
              href="/solutions"
              type="link"
              className="mt-8 px-8 py-3 bg-theme-blue text-white rounded-lg hover:bg-gray-900 transition-transform transform hover:scale-105"
            >
              Go Back
            </Button>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-8 px-6">
      <Fade bottom>
        <Button
          type="link"
          href="/solutions"
          className="flex items-center text-lg text-gray-500 hover:underline mt-4 ml-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See All Solutions
        </Button>
      </Fade>

      {data.map((item) => (
        <div className="flex flex-col mt-8" key={item.id}>
          <Fade bottom triggerOnce>
            <h1 className="text-4xl sm:text-5xl text-theme-blue font-extrabold text-center">
              {item.title}
            </h1>
            <p className="text-black text-center text-lg font-light mt-2">{item.type}</p>
          </Fade>

          <Fade bottom delay={300} triggerOnce>
            <div className="flex flex-col lg:flex-row items-center mt-6 gap-12">
              {/* Project Details on Left Side */}
              <div className="lg:w-1/2 px-6 lg:px-12">
                <h2 className="text-3xl text-theme-blue font-extrabold mb-6">Project Detail</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">{item.detail}</p>

                <div className="mt-10">
                  <h2 className="text-3xl text-theme-blue font-extrabold mb-6">Project Responsibilities</h2>
                  <ul className="list-disc pl-5 text-gray-600 font-light">
                    {item.responsibility.map((responsibility) => (
                      <li key={responsibility} className="mb-3">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-black-500 italic mt-10">
                  <span className="font-bold">{item.credit}</span>
                </p>

                <div className="mt-6">
                  <Fade cascade damping={0.2}>
                    <Button
                      onClick={() => handleNavigation('/contact us')}
                      className="px-6 py-3 bg-theme-blue text-white rounded-lg hover:bg-gray-900 transition-transform transform hover:scale-105"
                    >
                      Let&apos;s Talk
                    </Button>
                  </Fade>
                </div>
              </div>

              {/* Image on Right Side */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src={item.imageUrl}
                  alt="Project"
                  loading="lazy"
                  className="w-full max-w-4xl object-contain"
                />
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </section>
  );
}
