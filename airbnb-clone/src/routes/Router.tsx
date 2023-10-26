import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout/HomeLayout';

export default function Router() {
    const routing = useRoutes([{
        path: "/",
        element: <HomeLayout />,
        }
]);

  return routing;
}
