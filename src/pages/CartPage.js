import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageHero } from '../components';
import { useCartContext } from '../context/cart_context';
import CartContent from '../components/CartContent';
import CartPopup from '../components/CartPopup';

const CartPage = () => {
  const { cart, isOpenCartPopup } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="page-padding-80px">
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }
  return (
    <main className="page-padding-80px">
      <PageHero title="cart" />
      <Wrapper className="page">
        {isOpenCartPopup ? <CartPopup /> : <CartContent />}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
