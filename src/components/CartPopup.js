import React from 'react';
import styled from 'styled-components';

import { useCartContext } from '../context/cart_context';

const CartPopup = () => {
  const { removeItem, cancelRemoveItem, idItemRemove } = useCartContext();
  return (
    <Wrapper className="">
      <div>
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
      </div>
    </Wrapper>
  );
};

export default CartPopup;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 5;
  top: 0;
  opacity: 0.6;
  align-items: center;
  justify-content: center;
  h4 {
    color: white;
    padding-bottom: 1.5rem;
  }
  .btn-confirm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    margin: 0 3rem 0 3rem;
    .remove {
      background: #8b0000;
    }
    .remove:hover {
      background: #ff0000;
    }
  }
`;
