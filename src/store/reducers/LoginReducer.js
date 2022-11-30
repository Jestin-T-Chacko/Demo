import {
  LOGIN_SUCCESS,
} from '../constants/ActionType';

const initialState = {
  loginData:null
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      var loginData = action.payload;
      return {
        ...state,
        loginData:loginData
      };
    default:
      return state;
  }
};

export default LoginReducer;
