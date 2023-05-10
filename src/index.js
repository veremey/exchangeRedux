import './style.css'

import { ExchangeRate } from './components/ExchangeRate'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { getInitialRates } from './store/rates'
import { store } from './store/store'

// start AJAX call before React initialized
store.dispatch(getInitialRates)

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ExchangeRate />
	</Provider>
)
