import { getExchangeRates } from '../api'

const initialState = {
	amount: '1.00',
	currencyCode: 'USD',
	currencyData: { USD: 1.0 },
	supportedCurrencies: ['USD', 'EUR', 'JPY', 'CAD', 'GBP', 'MXN'],
}

export const ratesReducer = (state = initialState, action) => {
	switch (action.type) {
		case AMOUNT_CHANGED:
			return {
				...state,
				amount: action.payload,
			}
		case CURRENCY_CODE_CHANGED:
			return {
				...state,
				currencyCode: action.payload,
			}
		case RATES_RECEIVED: {
			const codes = Object.keys(action.payload).concat(state.currencyCode)
			return {
				...state,
				currencyData: action.payload,
				supportedCurrencies: codes,
			}
		}
		default:
			return state
	}
}

// selectors
export const getAmount = (state) => state.rates.amount
export const getCurrencyCode = (state) => state.rates.currencyCode
export const getCurrencyData = (state) => state.rates.currencyData
export const getSupportedCurrencies = (state) => state.rates.supportedCurrencies

// action constants
export const AMOUNT_CHANGED = 'rates/amountChanged'
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged'
export const RATES_RECEIVED = 'rates/ratesReceived'

// action creators
export const changeAmount = (amount) => ({
	type: AMOUNT_CHANGED,
	payload: amount,
})

export const changeCurrencyCode = (currencyCode) => (dispatch, getState) => {
	const state = getState()

	dispatch({
		type: CURRENCY_CODE_CHANGED,
		payload: currencyCode,
	})
	getExchangeRates(currencyCode, getSupportedCurrencies(state)).then((rates) => {
		dispatch({
			type: RATES_RECEIVED,
			payload: rates,
		})
	})
}

// thunks
export const getInitialRates = (dispatch, getState) => {
	const state = getState()
	const currencyCode = getCurrencyCode(state)

	dispatch(changeCurrencyCode(currencyCode))
}
