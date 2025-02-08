import React, { Component } from 'react';
import Header from 'parts/Header';
import About from 'parts/About';
import Footer from 'parts/Footer';

import WhyUs from 'parts/Why Us';  // Import Advantage component

import { Advantages } from 'json/landingPageData';

export default class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <About />
        <WhyUs data={Advantages} />
        <Footer />
      </>
    );
  }
}
