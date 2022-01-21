import axios from 'axios';

const apiConnect = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
  headers: {Authorization: localStorage.getItem('jwt')}
});

apiConnect.interceptors.request.use(function (config) {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    config.headers.Authorization = `${jwt}`;
  }
  return config;
});

export default apiConnect;
