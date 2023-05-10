import './style.css'

import { ExchangeRate } from './components/ExchangeRate'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { getInitialRates } from './store/rates'
import { store } from './store/store'

// start AJAX call before React initialized
store.dispatch(getInitialRates)

ReactDOM.render(
	<Provider store={store}>
		<ExchangeRate />
	</Provider>,
	document.getElementById('root')
)
