import React from 'react';
import styled from 'styled-components';

import { PageHero } from '../components';
import aboutImage from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main className="page-padding-80px">
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImage} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            First of all, Comfy Sloth Furniture would like to send greetings,
            best wishes for health, success and thanks to customers for
            supporting our products. More than 10 years of experience in
            production, sales, design and construction of interior products for
            spaces: living rooms, families, hotels, ... Comfy Sloth Furniture
            learns the needs and tastes of people We can always pay attention to
            important investment, design quality products to bring a
            comfortable, cozy and convenient living space for users.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    text-align: justify;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
