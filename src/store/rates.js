const initialState = {
  amount: "1.00",
  currencyCode: "USD",
}

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "amountChanged":
      return {
        ...state,
        amount: action.payload
      }
    case "currencyCodeChanged": 
      return {
        ...state,
        currencyCode: action.payload
      }
  
    default:
      return state;
  }
}
