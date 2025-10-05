import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Roots/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import Navbar from '../Components/Navbar/Navbar';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPages></ErrorPages>,

    children:[
        {
            index:true,
            path:'/',
            Component:Home,
        
            

        }
    ]
  },
]);