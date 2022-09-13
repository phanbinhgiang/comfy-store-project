import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageHero } from '../components';

const HistoryOrderPage = () => {
  return (
    <main className="page-padding-80px">
      <PageHero title="history" />
      <Wrapper className="page">
        <h4>History Order</h4>
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
