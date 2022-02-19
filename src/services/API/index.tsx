import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//const API = process.env.REACT_APP_API;
const API = 'https://noar-basf-api.azurewebsites.net';
// const API = 'https://noar-puig-api.azurewebsites.net/';

const api = axios.create({
  baseURL: API,
});

api.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('@RNAuth:token');
    console.log('Token', token);
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }

    return config;
  },
  function (error) {
    //alert(JSON.stringify(error));
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401) {
      //alert(JSON.stringify(error));
      AsyncStorage.clear().then(() => {
        console.log('logout');
      });
    }
    return Promise.reject(error);
  },
);

export default api;
