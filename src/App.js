/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import SolutionsPage from 'pages/SolutionsPage';
import NotFoundPage from 'pages/NotFoundPage';
import AboutPage from 'pages/AboutPage';
import CareersPage from 'pages/CareersPage';

import { SolutionDetailPage } from 'pages/SolutionDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';

function App() {
  useEffect(() => {
    // Update meta tags dynamically
    const updateMetaTags = () => {
      document.title = 'Elpan Solutions | AI & Digital Transformation Experts';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Elpan Solutions offers cutting-edge AI services, website development, and digital transformation solutions to help businesses innovate and grow.');
      }
    };

    updateMetaTags();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route exact path="/solution/:id" element={<SolutionDetailPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact us" element={<DiscussProjectPage />} />
        <Route exact path="/Careers" element={<CareersPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
