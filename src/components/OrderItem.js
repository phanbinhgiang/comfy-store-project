import React from 'react';

import { formatPrice } from '../utils/helpers';
import { FaTrash } from 'react-icons/fa';
import { useHistoryOrder } from '../context/history_order_context';
import Wrapper from '../assets/images/wrappers/OrderItemWrapper';

const OrderItem = ({ cardNumber, total, dateTime }) => {
  const { removeOrderItem } = useHistoryOrder();
  return (
    <Wrapper>
      <h5 className="name">{cardNumber}</h5>
      <h5 className="price">{formatPrice(total)}</h5>
      <h5 className="subtotal">{dateTime}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => {
          removeOrderItem(dateTime);
        }}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

export default OrderItem;
