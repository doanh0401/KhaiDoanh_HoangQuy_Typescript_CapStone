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
import AddPlace from "../pages/Admin/Place/AddPlace/AddPlace";
import EditPlace from "../pages/Admin/Place/EditPlace/EditPlace";
import UserInfo from "../pages/UserInfo/UserInfo";
import RoomByUser from "../pages/RoomByUser/RoomByUser";
import RoomByMaViTri from "../pages/RoomByMaViTri/RoomByMaViTri";

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
        {
          path: "/personal-info",
          element: <UserInfo />,
        },
        {
          path: "/ticket-by-user",
          element: <RoomByUser />,
        },
        {
          path: "/room-by-city/:maViTri",
          element: <RoomByMaViTri />,
        },
        {
          path: "*",
          element: <PageNotFound />,
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
          path: "/admin/addplace",
          element: <AddPlace />,
        },
        {
          path:"/admin/editplace/:id",
          element: <EditPlace />
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
