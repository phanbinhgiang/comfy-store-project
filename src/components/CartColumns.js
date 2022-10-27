import React from 'react';

import Wrapper from '../assets/images/wrappers/CartColumnsWrapper';

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

export default CartColumns;
