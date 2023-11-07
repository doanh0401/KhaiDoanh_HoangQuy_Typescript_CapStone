import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Home from '../pages/Home/Home';
import RoomDetail from '../pages/RoomDetail/RoomDetail';


export default function Router() {
    const routing = useRoutes([{
        path: "/",
        element: <HomeLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/room-detail/:roomId",
            element: <RoomDetail />
          }
        ]
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
]);

  return routing;
}
