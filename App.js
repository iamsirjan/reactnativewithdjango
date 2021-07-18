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
import { createBrowserHistory } from "history";



const App = (props) => {
 

  const preLocationStatus = useSelector(state => state.router.location)

  function isAuthenticated() {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("refresh_token")
    ) {
      return true;
    } else return false;
  }

  return (
    <NativeRouter>
      <Switch>
        <ProtectedRoute
          // isAuthenticated={isAuthenticated()}

          title="Login"
          path={"/signin"}
          // redirectTo={preLocationStatus?.pathname}
          component={SignIn}
        />

        {routes.map(({ path, Component, title }) => (
          <PrivateRoute
            key={`title-${path}`}
            title={title}
            path={path}
            isAuthenticated={isAuthenticated()}
            component={Component}
          />
        ))}

        <Home />
      </Switch>
    </NativeRouter>
  );
}

export default App;