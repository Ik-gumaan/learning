import reducer from './reducers';
import {createStore ,applyMiddleware} from 'redux';
//applyMiddleware is to perform additional functions which is also need redux-thunk
import thunk from 'redux-thunk';

const store=createStore(reducer,applyMiddleware(thunk));

export default store;