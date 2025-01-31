/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

import Header from 'parts/Header';
import { useParams } from 'react-router-dom';
import SolutionDetail from 'parts/SolutionDetail';
import Footer from 'parts/Footer';

import { Solutions } from 'json/landingPageData';

export const SolutionDetailPage = () => {
  const { id } = useParams();
  const detailData = Solutions.filter((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen pb-12">
      <SolutionDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      </div>
      <Footer />
    </>
  );
};
