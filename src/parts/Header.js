/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/ELPAN SOLUTIONS.png";
import Button from "../elements/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to track the current route

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Solutions", path: "/solutions" },
    { label: "Contact Us", path: "/contact us" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-4 lg:px-8 py-2 h-16">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Elpan Solutions Logo" className="h-10 sm:h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map(({ label, path }) => (
            <Button
              key={label}
              onClick={() => handleNavigation(path)}
              className={`font-medium text-sm sm:text-base px-4 text-theme-blue hover:text-blue-600 focus:outline-none ${location.pathname === path ? 'text-blue-600' : ''}`}
            >
              {label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="block lg:hidden text-theme-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map(({ label, path }) => (
              <li key={label} className="w-full text-center">
                <Button
                  onClick={() => handleNavigation(path)}
                  className={`block w-full py-2 text-theme-blue text-lg font-medium hover:text-blue-600 focus:outline-none ${location.pathname === path ? 'text-blue-600' : ''}`}
                >
                  {label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </header>
  );
}
