import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 5;
  top: 0;
  opacity: 0.6;
  align-items: center;
  justify-content: center;
  h4 {
    color: white;
    padding-bottom: 1.5rem;
    text-align: center;
  }
  .btn-confirm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    margin: 0 3rem 0 3rem;
    .remove {
      background: #8b0000;
    }
    .remove:hover {
      background: #ff0000;
    }
  }
  @media screen and (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }

    .btn-cart {
      font-size: 10px;
    }
  }
`;

export default Wrapper;
