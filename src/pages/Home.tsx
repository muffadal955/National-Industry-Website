import React from 'react';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default Home;
