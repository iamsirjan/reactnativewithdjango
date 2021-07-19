import { StatusBar } from "expo-status-bar";
import React, { Fragment, useEffect, useRef, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  NativeRouter,
  Switch,
  Route,
  Router,
  Redirect,
  useHistory,
  useLocation,
  browserHistory,
  StaticRouter,
  Link,
} from "react-router-native";
import * as serviceWorker from "./serviceWorker";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { routes } from "./src/route/index";
import PrivateRoute from "./src/utils/privateroute";
import ProtectedRoute from "./src/utils/protectedroute";
import SignIn from "./src/pages/signin/signin";
import store from "./store";
import { Home } from "./src/pages/home";
import RootStack from './src/index'
import { createBrowserHistory } from "history";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = (props) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
