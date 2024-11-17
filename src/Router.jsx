import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Home from './Components/Home';
import Campaigns from './Components/Campaigns';
import DetailsPages from './Components/DetailsPages';

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>Not Error</h2>,
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
            element:<DetailsPages></DetailsPages>,
            loader:()=>fetch("/data.json")
            
        }
      ]
    },
  ]);

export default router;