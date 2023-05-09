import "./style.css";

import { ExchangeRate } from "./components/ExchangeRate";
import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
  );
