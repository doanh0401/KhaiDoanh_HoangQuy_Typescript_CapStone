import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { EditOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { RootDispatch } from "../../../store/config";
import { useDispatch } from "react-redux";
import { RoomType } from "../../../interfaces/admin";
import { adminService } from "../../../services/admin";
import { NavLink } from "react-router-dom";
const { Search } = Input;

const Room: React.FC = () => {
  const dispatch: RootDispatch = useDispatch();
  const getRoomList = () => {
    const roomList = getRoomListApi();
    dispatch(roomList);
  };
  const [roomsList, setRoomsList] = useState([]);

  useEffect(() => {
    getRoomList();
  }, []);
  const getRoomListApi = () => {
    return async (dispatch: RootDispatch) => {
      try {
        const result = await adminService.listRooms();
        const content = result.data.content;
        setRoomsList(content);
      } catch (err) {
        console.log(err);
      }
    };
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
          </Fragment>
        );
      },
      width: 200,
    },
  ];

  const data = roomsList;

  const onChange: TableProps<RoomType>["onChange"] = (
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
        Quản lí phòng thuê
      </h1>
      <Button
        // onClick={() => navigate(`/admin/film/addnew`)}
        style={{ marginBottom: "20px" }}
      >
        Thêm phòng
      </Button>
      <Search
        style={{
          marginBottom: "20px",
          backgroundColor: "#4096ff",
          borderRadius: "5px",
        }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />; ;
    </div>
  );
};

export default Room;
