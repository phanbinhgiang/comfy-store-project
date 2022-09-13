import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageHero } from '../components';
import HistoryContent from '../components/HistoryContent';
import { useHistoryOrder } from '../context/history_order_context';

const HistoryOrderPage = () => {
  const { orders } = useHistoryOrder();

  if (orders.length < 1) {
    return (
      <main className="page-padding-80px">
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your History order is empty</h2>
            <Link to="/products" className="btn">
              Continue Shopping
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }
  return (
    <main className="page-padding-80px">
      <PageHero title="history" />
      <Wrapper className="page">
        <HistoryContent />
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

export default HistoryOrderPage;
