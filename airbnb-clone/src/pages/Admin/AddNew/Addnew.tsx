import React, { useState } from "react";
import { Form, Input, InputNumber, Switch } from "antd";
import { FormikProps, useFormik } from "formik";
import { formDataRoom } from "../../../interfaces/admin";
import { adminService } from "../../../services/admin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

type SizeType = Parameters<typeof Form>[0]["size"];

const Addnew: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const addRoomValidate = Yup.object().shape({
    id: Yup.number()
      .required("Vui lòng nhập ID!")
      .min(1, "Vui lòng nhập ID!")
      .max(10000, "Vui lòng nhập đúng yêu cầu(1-10000)"),
    tenPhong: Yup.string()
      .required("Tên phòng không được để trống!")
      .matches(
        /^[ aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]+$/,
        "Vui lòng nhập đúng định dạng!"
      ),
    khach: Yup.number()
      .required("Vui lòng nhập số khách!")
      .min(1, "Vui lòng nhập số khách!")
      .max(10, "Vui lòng nhập đúng yêu cầu(1-10)"),
    phongNgu: Yup.number()
      .required("Vui lòng nhập số phòng ngủ!")
      .min(1, "Vui lòng nhập số phòng ngủ!")
      .max(10, "Vui lòng nhập đúng yêu cầu(1-10)"),
    giuong: Yup.number()
      .required("Vui lòng nhập số giường!")
      .min(1, "Vui lòng nhập số giường!")
      .max(10, "Vui lòng nhập đúng yêu cầu(1-10)"),
    phongTam: Yup.number()
      .required("Vui lòng nhập số phòng tắm!")
      .min(1, "Vui lòng nhập số phòng tắm!")
      .max(10, "Vui lòng nhập đúng yêu cầu(1-10)"),

    moTa: Yup.string().required("Mo tả không được để trống!"),
    giaTien: Yup.number()
      .required("Vui lòng nhập giá tiền!")
      .min(1, "Vui lòng nhập giá tiền!")
      .max(100, "Vui lòng nhập đúng yêu cầu(1-100)"),

    maViTri: Yup.number()
      .required("Vui lòng nhập mã vị trí!")
      .min(1, "Vui lòng nhập mã vị trí!")
      .max(100, "Vui lòng nhập đúng yêu cầu(1-100)"),
  });
  const formik: FormikProps<formDataRoom> = useFormik<formDataRoom>({
    initialValues: {
      id: 0,
      tenPhong: "",
      khach: 0,
      phongNgu: 0,
      giuong: 0,
      phongTam: 0,
      moTa: "",
      giaTien: 0,
      mayGiat: false,
      banLa: false,
      tivi: false,
      dieuHoa: false,
      wifi: false,
      bep: false,
      doXe: false,
      hoBoi: false,
      banUi: false,
      maViTri: 0,
      hinhAnh: "",
    },
    validationSchema: addRoomValidate,
    onSubmit: async (values: any) => {
      values.hinhAnh = "";
      console.log(values);
      await dispatch(addRoom(values));
    },
  });
  const addRoom = async (formData: any) => {
    try {
      const result = await adminService.addRoomApi(formData);
      alert("Thêm phòng thành công!");
      console.log(result);
      navigate("/admin/rooms");
    } catch (errors) {
      console.log(errors);
    }
  };
  const handleChangeSwitch = (name: string) => {
    return (value: boolean) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeInputNumber = (name: string) => {
    return (value: number | null) => {
      formik.setFieldValue(name, value);
    };
  };
  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 880 }}
    >
      <Form.Item label="ID">
        <InputNumber
          onChange={handleChangeInputNumber("id")}
          min={1}
          max={10000}
        />
        {formik.errors.id && formik.touched.id && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.id}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Tên phòng">
        <Input name="tenPhong" onChange={formik.handleChange} />
        {formik.errors.tenPhong && formik.touched.tenPhong && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.tenPhong}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Số khách">
        <InputNumber
          onChange={handleChangeInputNumber("khach")}
          min={1}
          max={10}
        />
        {formik.errors.khach && formik.touched.khach && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.khach}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Phòng ngủ">
        <InputNumber
          onChange={handleChangeInputNumber("phongNgu")}
          min={1}
          max={10}
        />
        {formik.errors.phongNgu && formik.touched.phongNgu && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.phongNgu}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Gường">
        <InputNumber
          onChange={handleChangeInputNumber("giuong")}
          min={1}
          max={10}
        />
        {formik.errors.giuong && formik.touched.giuong && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.giuong}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Phòng tắm">
        <InputNumber
          onChange={handleChangeInputNumber("phongTam")}
          min={1}
          max={10}
        />
        {formik.errors.phongTam && formik.touched.phongTam && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.phongTam}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} />
        {formik.errors.moTa && formik.touched.moTa && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.moTa}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Giá tiền">
        <InputNumber
          onChange={handleChangeInputNumber("giaTien")}
          min={1}
          max={1000}
        />
        {formik.errors.giaTien && formik.touched.giaTien && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.giaTien}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Máy giặt" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("mayGiat")} />
      </Form.Item>
      <Form.Item label="Bàn là" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("banLa")} />
      </Form.Item>
      <Form.Item label="Ti vi" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("tivi")} />
      </Form.Item>
      <Form.Item label="Điều hòa" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("dieuHoa")} />
      </Form.Item>
      <Form.Item label="Wifi" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("wifi")} />
      </Form.Item>
      <Form.Item label="Bếp" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("bep")} />
      </Form.Item>
      <Form.Item label="Bãi đỗ xe" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("doXe")} />
      </Form.Item>
      <Form.Item label="Hồ bơi" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("hoBoi")} />
      </Form.Item>
      <Form.Item label="Bàn ủi" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("banUi")} />
      </Form.Item>
      <Form.Item label="Mã vị trí">
        <InputNumber
          onChange={handleChangeInputNumber("maViTri")}
          min={1}
          max={100}
        />
        {formik.errors.maViTri && formik.touched.maViTri && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.maViTri}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="btn btn-primary">
          Thêm phòng
        </button>
      </Form.Item>
    </Form>
  );
};

export default Addnew;
