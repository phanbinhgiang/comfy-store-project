import React from 'react';
import { Hero, Contact, FeaturedProducts, Services } from '../components';

const HomePage = () => {
  return (
    <main className="page-padding-80px">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
