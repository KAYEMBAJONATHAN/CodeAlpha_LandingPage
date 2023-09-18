import React from 'react';
import '../Style/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Our Landing Page</h1>
      <p>Discover amazing features and benefits.</p>
      <a href="/features" className="cta-button">See More</a>
    </section>
  );
};

export default Hero;
