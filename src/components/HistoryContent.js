import React from 'react';
import { Link } from 'react-router-dom';

import HistoryColumn from './HistoryColumn';
import { useHistoryOrder } from '../context/history_order_context';
import OrderItem from './OrderItem';
import Wrapper from '../assets/images/wrappers/HistoryContentWrapper';

const HistoryContent = () => {
  const { orders, clearHistoryOrder } = useHistoryOrder();
  return (
    <Wrapper className="section section-center">
      <HistoryColumn />
      {orders.map((order, index) => {
        return <OrderItem key={index} {...order} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearHistoryOrder}
        >
          Clear History Order
        </button>
      </div>
    </Wrapper>
  );
};

export default HistoryContent;
