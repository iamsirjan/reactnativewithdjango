import { useLayoutEffect, useState } from 'react';

let localStorage;

localStorage = window.localStorage;
export function clearToken() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}

function getTokenFromStorage(token = 'access') {
  return localStorage.getItem(token);
}

export function getToken(token = 'access') {
  try {
    return getTokenFromStorage(token);
  } catch (err) {
    clearToken();
    return {};
  }
}

export function getBearerToken() {
  if (getToken()) {
    return 'Bearer ' + getToken();
  }
  return false;
}

export const delay = (ms, value) =>
  new Promise((res) => setTimeout(res(value), ms));

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

