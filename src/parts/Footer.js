/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-theme-blue text-white py-8 border-t border-gray-200">
      <div className="container mx-auto">
        {/* Flex container for Brand and Other Sections */}
        <div className="flex flex-col sm:flex-row justify-between gap-32 sm:gap-32">
          
          {/* Brand Icon and Description */}
          <div className="w-full sm:w-1/3">
            <div className="flex items-center gap-4 sm:gap-8">
              <BrandIcon />
            </div>
            <p className="text-sm font-light mt-2">
              Where Every Challenge <br />
              Meets Solutions
            </p>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-1/3">
            <h1 className="text-lg font-semibold mb-2">Company</h1>
            <ul className="space-y-1">
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">About</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Contact Us</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Careers</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Articles</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Report a Bug</Button></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="w-full sm:w-1/3">
            <h1 className="text-lg font-semibold mb-2">Solutions</h1>
            <ul className="space-y-1">
              <li><Button type="link" href="http://localhost:3000/solution/AI_Services" className="text-sm text-white hover:underline">AI</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">ERP</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Web App Development</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">WhatsApp Automation</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Chat Bot</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Mobile App Development</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Digital Marketing</Button></li>
              <li><Button type="link" href="#" className="text-sm text-white hover:underline">Tech Consultation</Button></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="w-full sm:w-1/3">
            <h1 className="text-lg font-semibold mb-2">Social</h1>
            <ul className="space-y-1">
              <li><Button href="#" type="link" className="text-sm text-white hover:underline">Twitter</Button></li>
              <li><Button href="#" type="link" className="text-sm text-white hover:underline">Instagram</Button></li>
              <li><Button href="#" type="link" className="text-sm text-white hover:underline">LinkedIn</Button></li>
              <li><Button href="#" type="link" className="text-sm text-white hover:underline">GitHub</Button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
