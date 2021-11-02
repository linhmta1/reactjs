import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from './auth/reducer'
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import categoryReducer from './category/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
    userInfo : userReducer,
    Auth : authReducer,
    Post : postReducer,
    Category : categoryReducer,

})
const store= createStore(rootReducer, applyMiddleware(thunk))
export default store;