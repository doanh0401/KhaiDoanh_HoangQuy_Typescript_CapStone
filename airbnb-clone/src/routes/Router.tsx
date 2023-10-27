import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export default function Router() {
    const routing = useRoutes([{
        path: "/",
        element: <HomeLayout />,
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
]);

  return routing;
}
