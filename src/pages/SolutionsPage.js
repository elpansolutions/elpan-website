/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Portfolio from 'parts/Solutions';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

import { Solutions } from 'json/landingPageData';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <div className="pt-24 min-h-screen pb-12 bg-gray-50">
        <Portfolio data={Solutions} />
        </div>
        <Discuss />
        <Footer />
      </>
    );
  }
}
