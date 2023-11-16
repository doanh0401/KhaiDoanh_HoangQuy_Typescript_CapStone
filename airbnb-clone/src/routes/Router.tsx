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
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Home from "../pages/Home/Home";
import RoomDetail from "../pages/RoomDetail/RoomDetail";
import Edit from "../pages/Admin/Edit/Edit";
import AddUser from "../pages/Admin/Users/AddUser/AddUser";
import EditUser from "../pages/Admin/Users/EditUser/EditUser";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/room-detail/:roomId",
          element: <RoomDetail />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Room />,
        },
        {
          path: "/admin/users",
          element: <Users />,
        },
        {
          path: "/admin/adduser",
          element: <AddUser />,
        },
        {
          path: "/admin/edituser/:id",
          element: <EditUser />,
        },
        {
          path: "/admin/rooms",
          element: <Room />,
        },
        {
          path: "/admin/place",
          element: <Place />,
        },
        {
          path: "/admin/addnew",
          element: <Addnew />,
        },
        {
          path: "/admin/edit/:id",
          element: <Edit />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return routing;
}
