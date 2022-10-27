import React from 'react';

import Wrapper from '../assets/images/wrappers/HistoryColumnWrapper';

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

export default HistoryColumn;
