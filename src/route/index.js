import React from 'react'

const SignUp = React.lazy(() => import('../pages/signin/signin'));
const Home = React.lazy(() => import('../pages/home') );





export const routes = [
    {path:'/signin', Component:SignUp, title:'Signup'},
    {path:'/home', Component:Home, title:"Home"}
];