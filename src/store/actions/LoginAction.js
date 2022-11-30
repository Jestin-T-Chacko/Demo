import * as URL from '../../config/APIInterfaces';
import axios_inst from '../../config/AxiosInstance';
import {
  LOGIN_SUCCESS,
} from '../constants/ActionType';

export const setLoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const postData = (data) => {
  return (dispatch) => {
    return axios_inst({
      method: 'POST',
      url: URL.POST,
      data: data,
    })
      .then((response) => {
        if (response.data.status === true) {
          dispatch(setLoginSuccess(response.data));
          console.log('api res:-success',response.data)
          return response.data;
        } else {
          dispatch(setLoginSuccess(response.data));
          console.log('api res:-faliled',response.data)
          return response.data;
        }
      })
      .catch((error) => {
        console.log('api res:-error',error)
      });
  };
};

export const getData = (data) => {
  return (dispatch) => {
    return axios_inst({
      method: 'GET',
      url: URL.POST,
      data: data,
    })
      .then((response) => {
        if (response.data.status === true) {
          dispatch(setLoginSuccess(response.data));
          console.log('api res:-success',response.data)
          return response.data;
        } else {
          console.log('api res:-faliled',response.data)
          return response.data;
        }
      })
      .catch((error) => {
        console.log('api res:-error',error)
      });
  };
};

