import React, { Component } from 'react';
import Header from 'parts/Header';
import Careers from 'parts/Careers';
import Footer from 'parts/Footer';

export default class CareersPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Careers />
        <Footer />
      </>
    );
  }
}
