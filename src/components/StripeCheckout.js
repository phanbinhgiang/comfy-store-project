import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { useNavigate, Link } from 'react-router-dom';
import { useHistoryOrder } from '../context/history_order_context';

const StripeCheckout = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const { order, addNewOrder, updateHistoryOrder } = useHistoryOrder();

  const handleSubmitPayment = () => {
    setSucceeded(true);
    updateHistoryOrder(order);
    setTimeout(() => {
      navigate('/');
      clearCart();
    }, 5000);
  };
  return (
    <Wrapper>
      {succeeded ? (
        <article className="article-center">
          <div className="content-succeeded">
            <h4>Thank you</h4>
            <h4>Your payment was successful!</h4>
          </div>
          <Link to="/" className="btn" onClick={clearCart}>
            Back to Home
          </Link>
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>

          <form onSubmit={handleSubmitPayment}>
            <p>Card Number:</p>
            <input
              type="text"
              value={order.cardNumber}
              required
              placeholder="Card Number"
              onChange={addNewOrder}
              data-total={total_amount}
            />
            <input type="submit" className="submit-btn" value="PAY"></input>
          </form>
        </article>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .article-center {
    text-align: center;
    .content-succeeded {
      padding-bottom: 20px;
    }
  }
  form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
    .submit-btn {
      font-weight: 700;
      background: var(--clr-primary-5);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      cursor: pointer;
      transition: var(--transition);
      color: var(--clr-black);
    }
    .submit-btn:hover {
      font-weight: 700;
      color: var(--clr-white);
    }
  }
  input {
    border-radius: 6px;
    margin-bottom: 30px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

export default StripeCheckout;
