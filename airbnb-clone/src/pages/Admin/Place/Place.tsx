import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useDispatch } from "react-redux";
import { adminService } from "../../../services/admin";
import { PlaceType } from "../../../interfaces/admin";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
const { Search } = Input;

const Place: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [placesList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlacesListApi();
  }, []);
  const getPlacesListApi = async () => {
    try {
      const result = await adminService.listPlaces();
      const content = result.data.content;
      setPlaceList(content);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchDelete = async (id: any) => {
    try {
      const result = adminService.xoaViTriApi(id);
      alert("Xóa thành công!");
      dispatch(getPlacesListApi());
    } catch (errors: any) {
      console.log("errors", errors.response?.data);
    }
  };
  const uploadImg = async (maViTri: any, formFile: any) => {
    try {
      const result = await adminService.uploadImgViTriApi(maViTri, formFile);
      alert("Upload thành công!");
      window.location.reload();
    } catch (errors) {
      console.log(errors);
    }
  };
  const formik: FormikProps<any> = useFormik<any>({
    initialValues: {
      maViTri: "",
      hinhAnh: {},
    },
    onSubmit: async (values: any) => {
      let formFile = new FormData();
      formFile.append("formFile", values.hinhAnh, values.hinhAnh.name);
      console.log(values.hinhAnh);
      console.log(values.maViTri);
      await dispatch(uploadImg(values.maViTri, formFile));
    },
  });
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
      const maViTri = e.target.getAttribute("data-place-id"); // Lấy mã phòng từ thuộc tính data-room-id
      console.log("Mã VT:", maViTri);

      formik.setFieldValue("maViTri", maViTri);
      formik.setFieldValue("hinhAnh", e.target.files[0]);
    }
  };
  const [imgSrc, setImgSrc] = useState<any | null>("");
  const handleSubmit = () => {
    formik.handleSubmit();
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
              to={`/admin/editplace/${place.id}`}
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
                if (window.confirm("Bạn có chắc muốn xóa vị trí này không?")) {
                  fetchDelete(place.id);
                }
              }}
            >
              <DeleteOutlined />
            </span>
            <input
              type="file"
              onChange={handleChangeFile}
              data-place-id={place.id}
              accept="image/jpeg, image/jpg, image/gif, image/png"
            />
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
        onClick={() => navigate(`/admin/addplace`)}
        className="btn btn-outline-secondary "
        style={{ marginBottom: "20px" }}
      >
        Thêm vị trí
      </button>
      <br />
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
        placeholder="input search text"
        enterButton="Search"
        size="large"
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Place;
