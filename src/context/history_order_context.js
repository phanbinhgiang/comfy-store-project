import React, { useContext, useReducer, useEffect } from 'react';

import {
  UPDATE_HISTORY_ORDER,
  REMOVE_HISTORY_ORDER,
  CLEAR_HISTORY_ORDER,
} from '../actions';
import reducer from '../reducers/history_order_reducer';
import { useHistory } from 'react-router-dom';

const HistoryOrderContext = React.createContext();

const initialState = {
  orders: [],
};

export const HistoryOrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const today = new Date();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateOrder =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const dateTimeOrder = dateOrder + ' ' + time;
    console.log(dateTimeOrder);
    dispatch({ state: UPDATE_HISTORY_ORDER });
  }, [state.orders]);
  return (
    <HistoryOrderContext.Provider value="HistoryOrderProvider">
      {children}
    </HistoryOrderContext.Provider>
  );
};

export const useHistoryOrder = () => {
  return useContext(HistoryOrderContext);
};
