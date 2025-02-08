/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <div className="flex flex-col items-center">
      <Button className="" type="link" href="/">
        <p className="text-theme-white text-3xl font-medium">
          ELPAN&nbsp;
          <span className="text-theme-white">SOLUTIONS</span>
        </p>
      </Button>
      {/* Tagline added below the company name */}
      <p className="text-sm font-light leading-6 mt-[-4px] text-center">
        Where Every Challenge Meets Solutions  
      </p>
    </div>
  );
}
