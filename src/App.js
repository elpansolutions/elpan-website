/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import SolutionsPage from 'pages/SolutionsPage';
import NotFoundPage from 'pages/NotFoundPage';
import AboutPage from 'pages/AboutPage';

import { SolutionDetailPage } from 'pages/SolutionDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route exact path="/solution/:id" element={<SolutionDetailPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact us" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
