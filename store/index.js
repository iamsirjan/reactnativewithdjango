import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../src/redux';
import rootSagas from '../src/sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    window.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : function (f) {
          return f;
        },
  ),
);  
sagaMiddleware.run(rootSagas);

export default store;