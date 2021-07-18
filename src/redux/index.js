
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import RegisterUser from '../pages/signin/redux/reducer';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    register : RegisterUser,

  });

export default reducers;