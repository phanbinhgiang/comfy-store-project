import React from 'react';

import { useCartContext } from '../context/cart_context';
import Wrapper from '../assets/images/wrappers/CartPopupWrapper';

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
