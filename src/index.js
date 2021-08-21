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
import LogIn from "./pages/login/login";
import authActions from '../src/pages/login/redux/actions'
import { Home } from "./pages/home";
import { Home2 } from "./pages/home2";




const  Root = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkToken.current();
    
  }, []);

      const checkToken = useRef();
      checkToken.current = () => {
        if (localStorage.getItem('access')) {
        
          return dispatch(authActions.getCurrentUser());
        }
        return false;
      };
  const preLocationStatus = useSelector(state => state.router.location)

  function isAuthenticated() {
    if (
      localStorage.getItem("access") &&
      localStorage.getItem("refresh")
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
          path={"/login"}
          redirectTo={preLocationStatus?.pathname}
          component={LogIn}
        />

        {routes.map(({ path, Component, title }) => (
          <PrivateRoute
           isAuthenticated={isAuthenticated()}
            key={`title-${path}`}
            title={title}
            path={path}
            
            component={Component}
          />
        ))}
 <Route exact path="/" component={LogIn} />
 
      </Switch>
    </NativeRouter>
   
   
  );
}

export default Root;