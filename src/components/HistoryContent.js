import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HistoryColumn from './HistoryColumn';
import { useHistoryOrder } from '../context/history_order_context';
import OrderItem from './OrderItem';

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

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default HistoryContent;
