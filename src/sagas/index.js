import { all } from 'redux-saga/effects';
import userRegister from '../pages/signin/redux/saga';


export default function* rootSagas() {
  yield all([
   userRegister(),
  
  ]);
}