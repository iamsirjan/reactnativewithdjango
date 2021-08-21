import { all } from 'redux-saga/effects';
import authSaga from '../pages/login/redux/saga';
import userRegister from '../pages/signin/redux/saga';


export default function* rootSagas() {
  yield all([
   userRegister(),
   authSaga(),
  
  ]);
}