import axios from 'axios';

const localhost = 'http://10.0.0.108:3333';

const api = axios.create({
  baseURL:localhost
});

export default api;