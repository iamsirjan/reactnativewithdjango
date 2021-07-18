import React,{useEffect, useState} from 'react';
import { Button, TextInput, View,Text } from 'react-native';
import { Formik } from 'formik';
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
  Link    
} from "react-router-native";
export const Home = props => (
  
      <View>
        <Link to="/">
        <Text>hello</Text>
        </Link>
      </View>
    
);