import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './users/reducer';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
console.log(store)
export default store;