import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import Quotes from '../components/sections/Quotes';
import Clients from '../components/sections/Clients';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Quotes />
      <Clients />
    </>
  );
};

export default Home;