import React from 'react';

import Wrapper from './../assets/images/wrappers/ContactWrapper';

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <p>Sign up to receive the discount</p>
        <form
          className="contact-form"
          action="https://formspree.io/f/xknegdvw"
          method="POST"
        >
          <input
            type="email"
            className="form-input"
            placeholder="enter email"
            name="_replyto"
          />
          <button type="submit" className="submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
