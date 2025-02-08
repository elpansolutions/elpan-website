import React, { Component } from 'react';
import {
  Solutions, Advantages,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Portfolio from 'parts/Solutions';
import Advantage from 'parts/Why Us';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Portfolio data={Solutions} />
        <Advantage data={Advantages} />
        <Footer />
      </>
    );
  }
}
