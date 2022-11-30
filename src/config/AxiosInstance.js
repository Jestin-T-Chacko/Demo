import * as axios from 'axios';
import store from '../store/configureStore';

let axios_inst = axios.create();
let tokenType = 'Bearer';
axios_inst.interceptors.request.use((config) => {
  //  console.warn('axios_inff', store.getState().login.token);
  //const token = store.getState().login.token;
 // config.headers.Authorization = `${tokenType} ${token}`;
  config.headers['Content-Type'] = 'application/json';
 // config.headers['currency'] = 'INR';
  //*console.log('axios_inst Headers', config);
  return config;
});

export default axios_inst;
 