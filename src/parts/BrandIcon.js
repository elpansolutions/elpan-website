/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-theme-white text-4xl font-medium">
        ELPAN&nbsp;
        <span className="text-theme-white">Solutions</span>
      </p>
    </Button>
  );
}
