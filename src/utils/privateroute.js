import React, { Component } from "react";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";

const PrivateRoute = ({
  component: Component,
  path,
  exact,
  title,
  isAuthenticated,
  ...rest
}) => {
  if (title) {
    document.title = title;
  }
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
