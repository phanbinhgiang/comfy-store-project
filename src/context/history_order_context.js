import React, { useContext, useReducer, useEffect } from 'react';

import {
  ADD_NEW_ORDER,
  UPDATE_HISTORY_ORDER,
  REMOVE_HISTORY_ORDER,
  CLEAR_HISTORY_ORDER,
} from '../actions';
import reducer from '../reducers/history_order_reducer';

const HistoryOrderContext = React.createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem('orders');
  if (cart) {
    return JSON.parse(localStorage.getItem('orders'));
  } else {
    return [];
  }
};

const initialState = {
  orders: getLocalStorage(),
  order: {},
};

export const HistoryOrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addNewOrder = (e) => {
    const cardNumber = e.target.value;
    const total = e.target.dataset.total;
    dispatch({ type: ADD_NEW_ORDER, payload: { cardNumber, total } });
  };

  const updateHistoryOrder = (item) => {
    dispatch({ type: UPDATE_HISTORY_ORDER, payload: item });
  };

  const removeOrderItem = (item) => {
    dispatch({ type: REMOVE_HISTORY_ORDER, payload: item });
  };

  const clearHistoryOrder = () => {
    dispatch({ type: CLEAR_HISTORY_ORDER });
  };

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(state.orders));
  });
  return (
    <HistoryOrderContext.Provider
      value={{
        ...state,
        addNewOrder,
        updateHistoryOrder,
        removeOrderItem,
        clearHistoryOrder,
      }}
    >
      {children}
    </HistoryOrderContext.Provider>
  );
};

export const useHistoryOrder = () => {
  return useContext(HistoryOrderContext);
};
