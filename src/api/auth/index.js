import Axios from "../axios";

export const registerUser = (options) => {
    return Axios.post('/account/register/', options)
}


export const getToken = (options) => {
  return Axios.post('/account/login/', { ...options });
};
export const getAccessToken = (options) => {
  return Axios.post('/account/login/', {
    ...options,
  });
};
export const getCurrentUser = (options) => {
  return Axios.get('account/currentuser/', options);
};

export const logoutApi = (options) => {
  return Axios.post('/account/login/', options);
};