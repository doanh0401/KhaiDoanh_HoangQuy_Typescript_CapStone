import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import {
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { RootDispatch } from "../../../store/config";
import { useDispatch } from "react-redux";
import { UserType } from "../../../interfaces/admin";
import { adminService } from "../../../services/admin";
import { NavLink } from "react-router-dom";
const { Search } = Input;
const Users: React.FC = () => {
  const dispatch: RootDispatch = useDispatch();
  const getUserList = () => {
    const usersList = getUsersListApi();
    dispatch(usersList);
  };
  const [usersList, setUsersList] = useState([]);
  console.log(usersList);

  useEffect(() => {
    getUserList();
  }, []);
  const getUsersListApi = () => {
    return async (dispatch: RootDispatch) => {
      try {
        const result = await adminService.listUsers();
        const content = result.data.content;
        setUsersList(content);
      } catch (err) {
        console.log(err);
      }
    };
  };
  const columns: ColumnsType<UserType> = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
      width: 100,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (text, user) => {
        return (
          <Fragment>
            <img src={user.avatar} width={50} height={50} />
          </Fragment>
        );
      },
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      width: 100,
    },

    {
      title: "Email",
      dataIndex: "email",
      width: 150,
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      width: 150,
    },

    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      width: 150,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      width: 150,
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              to={``}
              style={{ marginRight: "20px", fontSize: "30px", color: "blue" }}
            >
              <EditOutlined />
            </NavLink>
            <span
              key={2}
              style={{
                marginRight: "20px",
                fontSize: "30px",
                color: "red",
                cursor: "pointer",
              }}
              // onClick={() => {
              //   if (window.confirm("Bạn có chắc muốn xóa phim này không?")) {
              //     dispatch(fetchDelete(film.maPhim));
              //   }
              // }}
            >
              <DeleteOutlined />
            </span>
            <NavLink
              key={3}
              to={``}
              style={{ marginRight: "20px", fontSize: "30px", color: "green" }}
              // onClick={() => {
              //   localStorage.setItem("filmParams", JSON.stringify(user));
              // }}
            >
              <UserOutlined />
            </NavLink>
          </Fragment>
        );
      },
      width: 200,
    },
  ];

  const data = usersList;
  const onSearch = () => {};
  const onChange: TableProps<UserType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>Quản lí người dùng</h1>
      <Button
        // onClick={() => navigate(`/admin/film/addnew`)}
        style={{ marginBottom: "20px" }}
      >
        Thêm người dùng
      </Button>
      <Search
        style={{ marginBottom: "20px", backgroundColor: "#4096ff", borderRadius:"5px" }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />; ;
    </div>
  );
};
export default Users;
