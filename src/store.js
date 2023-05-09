import { createStore } from 'redux'

const initialState = {
  amount: "1",
  currencyCode: "USD",
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case action:
      return {
        ...store
      }
  
    default:
      return state;
  }
}

export const store = createStore(reducer)
