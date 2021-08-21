import React from 'react'


const SignUp = React.lazy(() => import('../pages/signin/signin'));
const SignIn = React.lazy(() => import('../pages/login/login'));

const Home = React.lazy(() => import('../pages/home') );
const Home2 = React.lazy(() => import('../pages/home2') );






export const routes = [
    {path:'/signup', Component:SignUp, title:'Signup'},
    {path:'/login', Component:SignIn, title:'Signin'},
    {path:'/home2', Component:Home2, title:'home2'},
    {path:'/home', Component:Home, title:"Home"}
];