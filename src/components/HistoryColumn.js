import React from 'react';
import styled from 'styled-components';

const HistoryColumn = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Card Number</h5>
        <h5>Bill</h5>
        <h5>Date</h5>
        <h5>Remove</h5>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export default HistoryColumn;
