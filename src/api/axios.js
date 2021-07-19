import axios from 'axios';

import { clearToken, getBearerToken } from '../helper/helper';

const baseUrl = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
                                                                                                                                                                  
 
});


axiosInstance.interceptors.request.use((req) => {
  if (!req.headers['Authorization']) {
    if (getBearerToken()) {
      req.headers['Authorization'] = getBearerToken();
    }
  }
  return req;
});

axiosInstance.interceptors.response.use(
  undefined,
  function axiosRetryInterceptor(err) {
    if (err.response.status === 401) {
      clearToken();
      window.location.assign('/login');
    }
  },
);
export default axiosInstance;