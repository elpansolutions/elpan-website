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
  constructor(props) {
    super(props);
    this.state = {
      showScrollButton: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // Adding scroll event listener to toggle button visibility
    window.addEventListener('scroll', this.toggleScrollButton);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleScrollButton);
  }

  // Toggle visibility of the scroll-to-top button
  toggleScrollButton = () => {
    if (window.scrollY > 100) {
      this.setState({ showScrollButton: true });
    } else {
      this.setState({ showScrollButton: false });
    }
  };

  // Scroll to top function
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    // Destructure state to use showScrollButton directly
    const { showScrollButton } = this.state;

    return (
      <>
        <Header />
        <Hero />
        <Portfolio data={Solutions} />
        <Advantage data={Advantages} />
        {/* <Discuss /> */}
        <Footer />

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <button
            onClick={this.scrollToTop}
            type="button" // Explicit type for button
            className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
          >
            ^
          </button>
        )}
      </>
    );
  }
}
