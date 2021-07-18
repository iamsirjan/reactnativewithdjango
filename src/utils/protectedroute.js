import React, { Component } from "react";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";

const ProtectedRoute = ({
  component: Component,
  exact,
  path,
  title,
  isAuthenticated,
  redirectTo,
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
        !isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{ pathname: redirectTo || "/home" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
