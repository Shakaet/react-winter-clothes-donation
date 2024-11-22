import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import Campaigns from './Components/Campaigns';
import DetailsPages from './Components/DetailsPages';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import UpdateProfile from './Components/UpdateProfile';
import ForgetPass from './Components/ForgetPass';
import PrivateRoute from './Components/PrivateRoute';
import HowToHelp from './Components/HowToHelp';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/donateCampaign",
            element: <Campaigns></Campaigns>,
            loader:()=>fetch("/data.json")
        },
        {
            path:"/donation/:id",
            element:<PrivateRoute><DetailsPages></DetailsPages></PrivateRoute>,
            loader:()=>fetch("/data.json")
            
        },
        {
          path:"/HowToHelp",
          element:<HowToHelp></HowToHelp>,
          
          
      },

        {
          path:"/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path:"/update-profile",
          element:<UpdateProfile></UpdateProfile>

        },
        {
          path:"/login",
          element:<Login></Login>

        },
        {
          path:"/forget-password",
          element:<ForgetPass></ForgetPass>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        

      ]
    },
  ]);

export default router;