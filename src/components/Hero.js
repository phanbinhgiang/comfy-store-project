import React from 'react';
import { Link } from 'react-router-dom';

import heroBcg from '../assets/images/hero-bcg.jpeg';
import heroBcg2 from '../assets/images/hero-bcg-2.jpeg';
import Wrapper from './../assets/images/wrappers/HeroWrapper';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Design Your
          <br />
          Comfort Zone
        </h1>
        <p>
          We provide products with modern designs, diverse in colors and
          designs. You are completely assured to choose for yourself the most
          suitable furniture set, fully and harmoniously combining elements of
          color, style, and size to make your home's space impressive by We
          always listen and answer all questions and concerns of customers.
        </p>
        <Link to="/products" className="btn hero-btn">
          SHOP NOW
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;
