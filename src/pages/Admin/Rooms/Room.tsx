import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { RootDispatch } from "../../../store/config";
import { useDispatch } from "react-redux";
import { RoomType } from "../../../interfaces/admin";
import { adminService } from "../../../services/admin";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import { current } from "@reduxjs/toolkit";
const { Search } = Input;

const Room: React.FC = () => {
  const dispatch: any = useDispatch();

  const [roomsList, setRoomsList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getRoomListApi();
  }, []);
  const getRoomListApi = async () => {
    try {
      const result = await adminService.listRooms();
      const content = result.data.content;
      console.log(result);
      setRoomsList(content);
    } catch (err) {
      console.log(err);
    }
  };
  const uploadImg = async (maPhong: any, formFile: any) => {
    try {
      const result = await adminService.uploadImgApi(maPhong, formFile);
      alert("Upload thành công!");
      window.location.reload();
    } catch (errors) {
      console.log(errors);
    }
  };
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
      await dispatch(uploadImg(values.maPhong, formFile));
    },
  });
  const [imgSrc, setImgSrc] = useState<any | null>("");

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
  const fetchDelete = async (id: any) => {
    try {
      const result = await adminService.xoaPhongApi(id);
      alert("Xoá thành công!");
      dispatch(getRoomListApi());
    } catch (errors: any) {
      console.log("errors", errors.response?.data);
    }
  };
  const onSearch = async (keyword: any) => {
    try {
      const result = await adminService.searchRoomApi(keyword);
      const data = result.data.content.data
      // console.log(roomsList);
      console.log(data);
      setRoomsList(data);
    } catch (errors) {
      console.log(errors);
    }
  };
  const columns: ColumnsType<RoomType> = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
      width: 100,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, rooms) => {
        return (
          <Fragment>
            <img src={rooms.hinhAnh} width={50} height={50} />
          </Fragment>
        );
      },
      width: 100,
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      sorter: (a, b) => {
        let tenPhongA = a.tenPhong.toLowerCase().trim();
        let tenPhongB = b.tenPhong.toLowerCase().trim();
        if (tenPhongA > tenPhongB) {
          return 1;
        }
        return -1;
      },
      width: 200,
    },
    {
      title: "Số khách",
      dataIndex: "khach",
      width: 50,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      width: 800,
    },

    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      sorter: (a, b) => a.giaTien - b.giaTien,
      sortDirections: ["descend"],
      width: 150,
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, room) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              to={`/admin/edit/${room.id}`}
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
                if (window.confirm("Bạn có chắc muốn xóa phòng này không?")) {
                  fetchDelete(room.id);
                }
              }}
            >
              <DeleteOutlined />
            </span>
            <input
              type="file"
              onChange={handleChangeFile}
              data-room-id={room.id}
              accept="image/jpeg, image/jpg, image/gif, image/png"
            />
          </Fragment>
        );
      },
      width: 200,
    },
  ];
  const handleSubmit = () => {
    formik.handleSubmit();
  };

  const data = roomsList;

  const onChange: TableProps<RoomType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log(pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>
        Quản lí phòng thuê
      </h1>
      <button
        type="button"
        onClick={() => navigate(`/admin/addnew`)}
        className="btn btn-outline-secondary "
        style={{ marginBottom: "20px" }}
      >
        Thêm phòng
      </button>
      <br></br>
      <button
        type="button"
        onClick={handleSubmit}
        className="btn btn-primary"
        style={{ marginBottom: "20px" }}
      >
        Upload hình ảnh
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

export default Room;
