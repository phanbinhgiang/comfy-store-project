import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { useHistoryOrder } from '../context/history_order_context';
import Wrapper from '../assets/images/wrappers/StripeCheckoutWrapper';

const StripeCheckout = () => {
  const { total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);

  const { order, addNewOrder, updateHistoryOrder } = useHistoryOrder();
  let timerID = useRef();

  const navigateHomePage = () => {
    timerID.current = setTimeout(() => {
      navigate('/');
      clearCart();
    }, 5000);
  };

  const handleSubmitPayment = () => {
    setSucceeded(true);
    updateHistoryOrder(order);
    navigateHomePage();
  };
  return (
    <Wrapper>
      {succeeded ? (
        <article className="article-center">
          <div className="content-succeeded">
            <h4>Thank you</h4>
            <h4>Your payment was successful!</h4>
          </div>
          <Link
            to="/"
            className="btn"
            onClick={() => {
              clearCart();
              clearTimeout(timerID.current);
            }}
          >
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
              data-total={total_amount + shipping_fee}
            />
            <input
              type="submit"
              className="submit-btn btn-pay"
              value="PAY"
            ></input>
          </form>
        </article>
      )}
    </Wrapper>
  );
};

export default StripeCheckout;
