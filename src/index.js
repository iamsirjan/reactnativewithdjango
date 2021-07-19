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

import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { routes } from "./route/index";
import PrivateRoute from "./utils/privateroute";
import ProtectedRoute from "./utils/protectedroute";
import SignIn from "./pages/signin/signin";

import { Home } from "./pages/home";




const  Root = (props) => {

    useEffect(() => {
        checkToken.current();
      }, []);

      const checkToken = useRef();
      checkToken.current = () => {
        if (localStorage.getItem('access_token')) {
          return dispatch(authActions.getCurrentUser());
        }
        return;
      };
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
          isAuthenticated={isAuthenticated()}

          title="Login"
          path={"/signin"}
          redirectTo={preLocationStatus?.pathname}
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

export default Root;