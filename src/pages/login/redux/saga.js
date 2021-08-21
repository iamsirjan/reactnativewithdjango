import { get } from 'react-hook-form';
import { put, takeEvery, call,all,fork} from 'redux-saga/effects';
import {
  getToken,
  getAccessToken,
  getCurrentUser,
  logoutApi,
} from '../../../api/auth';
import actions from './actions';


function* getAccessTokenReq(token, email, password) {
  try {
    let { data, status } = yield call(getAccessToken, {
      code: token,
      email,
      password,
    });
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    yield put({
      type: actions.GET_ACCESS_SUC,
      message: 'Logged in successfully.',
      statusCode: status,
    });
    const currentUser = yield call(getCurrentUser);
    console.log(currentUser.data)
    yield put({
      type: actions.GET_CURRENT_USER_SUC,
      currentUser: currentUser.data,
    });
  } catch (error) {
    yield put({
      type: actions.GET_CURRENT_USER_FAIL,
      message: `Couldn't login.`,
    });
  }
}

function* getTokenReq(action) {
  try {
    let { email, password } = action.payload;

    let tokenResponse = yield call(getToken, action.payload);
    let { data, status } = tokenResponse;
    yield put({
      type: actions.GET_TOKEN_SUC,
      statusCode: status,
    });
    yield getAccessTokenReq(data.code, email, password);
  } catch (error) {
    if (error?.response?.status === 502) {
      if (error && error?.response?.data) {
        yield put({
          type: alertActions.SET_ALERT_REQ,
          payload: {
            errorName: error.response.data.error.statusText,
            status: error.response.data.status,
          },
        });
        yield put({
          type: actions.GET_TOKEN_FAIL,
          statusCode: error.response.data.status,
          message: error.response.data.error.statusText,
        });
      }
    }
    if (error?.response?.data) {
      yield put({
        type: alertActions.SET_ALERT_REQ,
        payload: {
          status: error.response.data.error.statusCode,
          errorName: error.response.data.error.name,
        },
      });
      return yield put({
        type: actions.GET_TOKEN_FAIL,
        statusCode: error.response.data.error.statusCode,
        message: error.response.data.error.name,
      });
    }
    yield put({
      type: actions.GET_TOKEN_FAIL,
      statusCode: error.status,
      message: error.message,
    });
  }
}

function* fetchCurrentUserReq(action) {
  try {
    const { data } = yield call(getCurrentUser, action.payload);
    yield put({
      type: actions.GET_CURRENT_USER_SUC,
      currentUser: data,
    });
  } catch (error) {
    if (error?.response?.data) {
      yield put({
        type: actions.GET_CURRENT_USER_FAIL,
        message: 'something went wrong.',
        status: error.response.status,
      });
    }
  }
}

function* logoutReq(action) {
  try {
    yield call(logoutApi);
    yield localStorage.removeItem('access');
    yield localStorage.removeItem('refresh');
    yield put({
      type: actions.LOGOUT_SUC,
    });
  } catch (error) {
    const message = `Network Error, Can't connect to server.`;
    const status = error?.response?.data?.error?.message || 502;
    yield put({
      type: actions.LOGOUT_FAIL,
      message,
      status,
    });
    ShowMessage(status, message);
  }
}

export function* logout() {
  yield takeEvery(actions.LOGOUT_REQ, logoutReq);
}
export function* login() {
  yield takeEvery(actions.GET_TOKEN_REQ, getTokenReq);
}

export function* getAccessTokenLogin() {
  yield takeEvery(actions.GET_ACCESS_REQ, getAccessTokenReq); 
}
export function* fetchCurrentUser() {
  yield takeEvery(actions.GET_CURRENT_USER_REQ, fetchCurrentUserReq);
}


export default function* authSaga() {
    return yield all ([
        fork(logout),
        fork(login),
        fork(getAccessTokenLogin),
        fork(fetchCurrentUser),
    ])
}