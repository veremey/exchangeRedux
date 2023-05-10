import { applyMiddleware, combineReducers, createStore } from 'redux'

import { ratesReducer } from './rates'
import thunk from 'redux-thunk'
import { userReducer } from './user'

export const store = createStore(
	combineReducers({
		user: userReducer,
		rates: ratesReducer,
	}),
	applyMiddleware(thunk)
)
