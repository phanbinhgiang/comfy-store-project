import React from 'react';

import { services } from '../utils/constants';
import Wrapper from './../assets/images/wrappers/ServicesWrapper';
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Custom Furniture
            <br />
            Built Only For You
          </h3>
          <p>Comfy Sloth is a great choice for you</p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
