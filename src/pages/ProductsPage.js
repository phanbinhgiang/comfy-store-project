import React from 'react';
import styled from 'styled-components';

import PageHero from './../components/PageHero';
import products_reducer from './../reducers/products_reducer';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="padding-page"></div>
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 3rem auto 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
    .padding-page {
      width: 100%;
      height: 1rem;
      background-color: var(--clr-white);
      position: sticky;
      top: 0;
      z-index: 10;
    }
  }
`;
export default ProductsPage;
