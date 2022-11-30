import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../store/reducers/rootReducer';

const middlewares = [thunk, logger];
const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
