const initialState = {
  name: "Serhii", 
  loggedIn: false
}

export const userReducer = (state = initialState, action) => {
  return state;
}

// selectors

export const getName = (state) => state.user.name
export const isLoginedIn = (state) => state.user.loggedIn
