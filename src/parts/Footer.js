/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaPhone, 
  FaEnvelope,
} from 'react-icons/fa';
import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Go to Top Section */}
      <div className="w-full text-center py-4 bg-theme-darkblue shadow-md">
        <Button
          onClick={scrollToTop}
          className="px-6 py-3 bg-theme-blue text-white font-semibold text-lg rounded-full shadow-lg 
            hover:bg-theme-lightblue hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          ⬆ Go To Top
        </Button>
      </div>

      {/* Footer Section */}
      <div className="bg-theme-blue text-white py-16 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-32">
        <div className="container mx-auto flex flex-col gap-12">
          {/* Main Content */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-12">
            {/* Left Section - Brand Icon & Tagline */}
            <div className="w-full sm:w-1/3 space-y-6">
              <div className="flex flex-col items-center gap-6">
                <BrandIcon className="w-20 h-20 sm:w-24 sm:h-24" />
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition">
                    <FaTwitter className="text-white hover:text-gray-400" size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition">
                    <FaInstagram className="text-white hover:text-gray-400" size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition">
                    <FaLinkedin className="text-white hover:text-gray-400" size={24} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition">
                    <FaGithub className="text-white hover:text-gray-400" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="w-full sm:w-2/3 flex flex-wrap sm:flex-nowrap justify-between gap-8">
              {/* Useful Links */}
              <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                <h1 className="text-xl font-bold mb-4">Company</h1>
                <ul className="space-y-2">
                  <li>
                    <Button
                      type="link"
                      href={`${window.location.origin}/about`}
                      className="text-base text-gray-300 hover:text-white transition"
                    >
                      About
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      href={`${window.location.origin}/contact%20us`}
                      className="text-base text-gray-300 hover:text-white transition"
                    >
                      Contact Us
                    </Button>
                  </li>
                  <li>
                    <Button
                      type="link"
                      href={`${window.location.origin}/careers`}
                      className="text-base text-gray-300 hover:text-white transition"
                    >
                      Careers
                    </Button>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                <h1 className="text-xl font-bold mb-4">Solutions</h1>
                <ul className="space-y-2">
                  {['AI_Services', 'ERP_Solutions', 'Website_Development', 'WhatsApp_Automation', 'ChatBot_Development', 'Mobile_App_Development', 'Digital_Marketing', 'Tech_Consulting'].map((solution) => (
                    <li key={solution}>
                      <Button
                        type="link"
                        href={`${window.location.origin}/solution/${solution}`}
                        className="text-base text-gray-300 hover:text-white transition"
                      >
                        {solution.replace(/_/g, ' ')}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="w-full sm:w-1/3">
                <h1 className="text-xl font-bold mb-4">Contact Us</h1>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaPhone className="mr-2 text-lg" />
                    <Button type="link" href="tel:+918903959099" className="text-base text-gray-300 hover:text-white transition">
                      +91 89039 59099
                    </Button>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="mr-2 text-lg" />
                    <Button type="link" href="mailto:enquiry@elpan.in" className="text-base text-gray-300 hover:text-white transition">
                      enquiry@elpan.in
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="border-t border-gray-400 pt-6 flex flex-col sm:flex-row justify-center text-center">
            <p className="text-base text-gray-300">&copy; 2025 Elpan Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
