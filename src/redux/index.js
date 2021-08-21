
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import RegisterUser from '../pages/signin/redux/reducer';
import AuthReducer from '../pages/login/redux/reducer';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    register : RegisterUser,
    auth : AuthReducer,

  });

export default reducers;