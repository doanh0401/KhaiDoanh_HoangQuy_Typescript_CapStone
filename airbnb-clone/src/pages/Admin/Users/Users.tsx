import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { EditOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { RootDispatch } from "../../../store/config";
import { useDispatch } from "react-redux";
import { UserType } from "../../../interfaces/admin";
import { adminService } from "../../../services/admin";
import { NavLink, useNavigate } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
const { Search } = Input;
const Users: React.FC = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const [usersList, setUsersList] = useState([]);
  console.log(usersList);

  useEffect(() => {
    getUsersListApi();
  }, []);
  const getUsersListApi = async () => {
    try {
      const result = await adminService.listUsers();
      const content = result.data.content;
      setUsersList(content);
    } catch (err) {
      console.log(err);
    }
  };
  const [imgSrc, setImgSrc] = useState<any | null>("");
  const formik: FormikProps<any> = useFormik<any>({
    initialValues: {
      maPhong: "",
      hinhAnh: {},
    },
    onSubmit: async (values: any) => {
      let formFile = new FormData();
      formFile.append("formFile", values.hinhAnh, values.hinhAnh.name);
      console.log(values.hinhAnh);
      console.log(values.maPhong);
      // await dispatch(uploadImg(values.maPhong, formFile));
    },
  });
  const fetchDelete = async (id: any) => {
    try {
      const result = await adminService.xoaUserApi(id);
      alert("Xoá thành công!");
      dispatch(getUsersListApi());
    } catch (errors: any) {
      console.log("errors", errors.response?.data);
    }
  };
  const handleChangeFile = (e: any) => {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/gif" ||
      e.target.files[0].type === "image/png"
    ) {
      let reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          setImgSrc(e.target?.result);
        };
      }
      const maPhong = e.target.getAttribute("data-room-id"); // Lấy mã phòng từ thuộc tính data-room-id
      console.log("Mã phòng:", maPhong);

      formik.setFieldValue("maPhong", maPhong);
      formik.setFieldValue("hinhAnh", e.target.files[0]);
    }
  };
  const onSearch = async (keyword: any) => {
    try {
      const result = await adminService.searchUserApi(keyword);
      const data = result.data.content.data
      // console.log(roomsList);
      console.log(data);
      setUsersList(data);
    } catch (errors) {
      console.log(errors);
    }
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
      dataIndex: "id",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              to={`/admin/edituser/${user.id}`}
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
              onClick={() => {
                if (window.confirm("Bạn có chắc muốn xóa người dùng này không?")) {
                  fetchDelete(user.id);
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      width: 200,
    },
  ];

  const data = usersList;
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
      <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>
        Quản lí người dùng
      </h1>
      <button
        type="button"
        onClick={() => navigate(`/admin/adduser`)}
        className="btn btn-outline-secondary "
        style={{ marginBottom: "20px" }}
      >
        Thêm người dùng
      </button>
      <Search
        style={{
          marginBottom: "20px",
          backgroundColor: "#4096ff",
          borderRadius: "5px",
          height: "40px",
        }}
        onSearch={onSearch}
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};
export default Users;
