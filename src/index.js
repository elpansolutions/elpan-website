/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add canonical URL for SEO
const canonicalUrl = document.createElement('link');
canonicalUrl.rel = 'canonical';
canonicalUrl.href = window.location.href;
document.head.appendChild(canonicalUrl);

// Add structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elpan Solutions',
  url: 'https://www.elpan.in',
  logo: 'https://www.elpan.in/ELPAN%20Logo.png',
  description: 'Leading provider of AI services and digital transformation solutions',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-89039-59099',
    contactType: 'customer service',
  },
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
