import {combineReducers} from 'redux';
import LoginReducer from '../reducers/LoginReducer';
const appReducer = combineReducers({
  login: LoginReducer,
});

export default appReducer;
