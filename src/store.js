import { createStore } from 'redux'

const initialState = {
  amount: "1.00",
  currencyCode: "EUR",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "amountChanged":
      return {
        ...store,
        amount: action.payload
      }
    case "currencyCodeChanged": 
      return {
        ...store,
        currencyCode: action.payload
      }
  
    default:
      return state;
  }
}

export const store = createStore(reducer)
