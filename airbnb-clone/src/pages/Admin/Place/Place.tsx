import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { RootDispatch } from "../../../store/config";
import { useDispatch } from "react-redux";
import { adminService } from "../../../services/admin";
import { PlaceType } from "../../../interfaces/admin";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Search } = Input;

const Place: React.FC = () => {
  const dispatch: RootDispatch = useDispatch();
  const getPlacesList = () => {
    const placesList = getPlacesListApi();
    dispatch(placesList);
  };
  const [placesList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlacesList();
  }, []);
  const getPlacesListApi = () => {
    return async (dispatch: RootDispatch) => {
      try {
        const result = await adminService.listPlaces();
        const content = result.data.content;
        setPlaceList(content);
      } catch (err) {
        console.log(err);
      }
    };
  };
  const columns: ColumnsType<PlaceType> = [
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
      title: "Tên vị trí",
      dataIndex: "tenViTri",
      sorter: (a, b) => {
        let tenViTriA = a.tenViTri.toLowerCase().trim();
        let tenViTriB = b.tenViTri.toLowerCase().trim();
        if (tenViTriA > tenViTriB) {
          return 1;
        }
        return -1;
      },
      width: 150,
    },
    {
      title: "Tỉnh thành",
      dataIndex: "tinhThanh",
      width: 150,
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
      width: 150,
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, place) => {
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

  const data = placesList;

  const onChange: TableProps<PlaceType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>Quản lí vị trí</h1>
      <button
        type="button"
        // onClick={() => navigate(`/admin/addnew`)}
        className="btn btn-outline-secondary "
        style={{ marginBottom: "20px" }}
      >
        Thêm vị trí
      </button>
      <Search
        style={{
          marginBottom: "20px",
          backgroundColor: "#4096ff",
          borderRadius: "5px",
          height:"40px"
        }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Place;
