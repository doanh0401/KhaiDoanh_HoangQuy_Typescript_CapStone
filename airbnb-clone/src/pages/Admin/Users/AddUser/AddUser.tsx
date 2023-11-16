import React, { useState, useEffect } from "react";
import { DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";
import { FormikProps, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser } from "../../../../interfaces/admin";
import moment from "moment";
import { adminService } from "../../../../services/admin";
import * as Yup from "yup";

type SizeType = Parameters<typeof Form>[0]["size"];

const AddUser: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const addUserValidate = Yup.object().shape({
    id: Yup.number()
      .required("Vui lòng nhập ID!")
      .min(1, "Vui lòng nhập ID!")
      .max(10000, "Vui lòng nhập đúng yêu cầu(1-10000)"),
    name: Yup.string().required("Tài khoản không được để trống!"),
    email: Yup.string()
      .required("Email không được để trống!")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Vui lòng nhập đúng định dạng!"
      ),
    password: Yup.string().required("Mật khẩu không được để trống!"),
    phone: Yup.string()
      .required("Số điện thoại không được để trống!")
      .matches(/^[0-9]+$/, "Vui lòng nhậ đúng định dạng!"),
    birthday: Yup.string().required("Ngày sinh không được để trống!"),
    role: Yup.string().required("Loại người dùng không được để trống!"),
  });
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const formik: FormikProps<addUser> = useFormik<addUser>({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: false,
      role: "",
    },
    validationSchema: addUserValidate,
    onSubmit: async (values: any) => {
      await dispatch(addUser(values));
    },
  });
  const addUser = async (formData: any) => {
    try {
      const result = await adminService.themUserApi(formData);
      alert("Thêm user thành công!");
      navigate("/admin/users");
    } catch (errors) {
      console.log(errors);
      alert("Email đã tồn tại!");
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
  const handleChangeDatePicker = (value: any) => {
    let birthday = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("birthday", birthday);
  };
  const handleChangeNguoiDung = async (value: any) => {
    formik.setFieldValue("role", value);
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
      <h3 style={{ marginBottom: "20px" }}>Thêm người dùng</h3>

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
      <Form.Item label="Tài khoản">
        <Input name="name" onChange={formik.handleChange} />
        {formik.errors.name && formik.touched.name && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.name}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Email">
        <Input name="email" onChange={formik.handleChange} />
        {formik.errors.email && formik.touched.email && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.email}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Password">
        <Input name="password" onChange={formik.handleChange} />
        {formik.errors.password && formik.touched.password && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.password}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Số ĐT">
        <Input name="phone" onChange={formik.handleChange} />
        {formik.errors.phone && formik.touched.phone && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.phone}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Ngày sinh">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        {formik.errors.birthday && formik.touched.birthday && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.birthday}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Giới tính" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("gender")} />
        {formik.errors.gender && formik.touched.gender && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.gender}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Loại người dùng">
        <Select
          style={{ width: 120 }}
          onChange={handleChangeNguoiDung}
          options={[
            { value: "ADMIN", label: "Quản trị" },
            { value: "USER", label: "Khách hàng" },
          ]}
        />
        {formik.errors.role && formik.touched.role && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.role}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="btn btn-primary">
          Thêm người dùng
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddUser;
