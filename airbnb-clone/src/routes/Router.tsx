import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Room from "../pages/Admin/Rooms/Room";
import Place from "../pages/Admin/Place/Place";
import Addnew from "../pages/Admin/AddNew/Addnew";
import Users from "../pages/Admin/Users/Users";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    { path: "/admin", 
      element: <AdminLayout />,
      children:[
        {
          path: "/admin/users",
          element: <Users />,
        },
        {
          path: "/admin/rooms",
          element: <Room />,
        },
        {
          path: "/admin/place",
          element: <Place />
        },
        {
          path: "/admin/addnew",
          element: <Addnew />
        },
      ]
    },
  ]);

  return routing;
}
