import React from 'react';
import styled from 'styled-components';

import { useCartContext } from '../context/cart_context';

const CartPopup = () => {
  const { removeItem, cancelRemoveItem, idItemRemove } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <h4>Do you want to remove the item from the cart?</h4>
      <div className="btn-confirm">
        <button
          className="btn btn-cart remove"
          onClick={() => removeItem(idItemRemove)}
        >
          Remove Item
        </button>
        <button className="btn btn-cart" onClick={cancelRemoveItem}>
          Cancel
        </button>
      </div>
    </Wrapper>
  );
};

export default CartPopup;

const Wrapper = styled.div`
  width: 45vw;
  padding: 50px 100px;
  margin-top: 100px;
  text-align: center;
  border: 2px solid var(--clr-black);
  border-radius: var(--radius);
  h4 {
    padding-bottom: 50px;
  }
  .btn-confirm {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .btn-cart {
    min-width: 150px;
  }

  button.btn.btn-cart.remove {
    background: var(--clr-red-dark);
    :hover {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 1440px) and (min-width: 992px) {
    width: 60vw;
  }
  @media screen and (max-width: 992px) {
    width: 90vw;
    padding: 100px 50px;
  }
`;
