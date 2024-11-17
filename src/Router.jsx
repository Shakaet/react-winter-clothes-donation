import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>Not Error</h2>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router;