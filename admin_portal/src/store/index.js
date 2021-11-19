import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import authReducer from './auth/reducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    Auth : authReducer,
})
const store= createStore(rootReducer, applyMiddleware(thunk, logger))
export default store;