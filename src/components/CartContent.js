import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/cart_context';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import Wrapper from '../assets/images/wrappers/CartContentWrapper';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Clear Shopping Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;
