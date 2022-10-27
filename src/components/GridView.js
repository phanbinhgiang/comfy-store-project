import React from 'react';

import Product from './Product';
import Wrapper from '../assets/images/wrappers/GridViewWrapper';

const GridView = ({ products = [] }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;
