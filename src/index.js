import "./style.css";

import { changeCurrencyCode, getCurrencyCode } from './store/rates';

import { ExchangeRate } from "./components/ExchangeRate";
import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";
import { store } from './store/store';

store.dispatch((dispatch, getState) => {
  const state = getState();
  const currencyCode = getCurrencyCode(state);

  dispatch(changeCurrencyCode(currencyCode));
})

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
  );
