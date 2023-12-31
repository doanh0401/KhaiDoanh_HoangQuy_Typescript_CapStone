import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import { DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";
import { FormikProps, useFormik } from "formik";
import { adminService } from "../../../../services/admin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adminActions } from "../../../../store/reducers/adminReducer";
import { editUser } from "../../../../interfaces/admin";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type SizeType = Parameters<typeof Form>[0]["size"];

const EditUser: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const editUserValidate = Yup.object().shape({
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
    phone: Yup.string()
      .required("Số điện thoại không được để trống!")
      .matches(/^[0-9]+$/, "Vui lòng nhậ đúng định dạng!"),
    birthday: Yup.string().required("Ngày sinh không được để trống!"),
    role: Yup.string().required("Loại người dùng không được để trống!"),
  });
  const { id } = useParams<any>();
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { thongtinUser } = useSelector((state: any) => state.adminReducer);

  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    try {
      const result = await adminService.layThongTinUser(id);
      dispatch(adminActions.setThongTinUserAction(result.data.content));
    } catch (errors) {
      console.log("errors", errors);
    }
  };

  const formik: FormikProps<editUser> = useFormik<editUser>({
    enableReinitialize: true,
    initialValues: {
      id: thongtinUser?.id,
      name: thongtinUser?.name,
      email: thongtinUser?.email,
      phone: thongtinUser?.phone,
      birthday: thongtinUser?.birthday,
      gender: thongtinUser?.gender,
      role: thongtinUser?.role,
    },
    validationSchema: editUserValidate,
    onSubmit: async (values: any) => {
      console.log(values);
      await dispatch(capNhatUser(values));
    },
  });
  const capNhatUser = async (formData: any) => {
    try {
      const result = await adminService.capNhatUserApi(id, formData);
      alert("Cập nhật thành công!");
      navigate(`/admin/users`);
    } catch (errors) {
      console.log(errors);
    }
  };
  const handleChangeSwitch = (name: string) => {
    return (value: boolean) => {
      formik.setFieldValue(name, value);
    };
  };
  const isBirthdayFormatValid = /^(\d{4})-(\d{2})-(\d{2})$/.test(
    formik.values.birthday
  );
  const handleChangeInputNumber = (name: string) => {
    return (value: number | null) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeDatePicker = (value: any) => {
    let birthday = dayjs(value);
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
      <h3 style={{ marginBottom: "20px" }}>Cập nhật người dùng</h3>

      <Form.Item label="ID">
        <InputNumber
          onChange={handleChangeInputNumber("id")}
          min={1}
          max={10000}
          value={formik.values.id}
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
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.name}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Email">
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.email}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Số ĐT">
        <Input
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />{" "}
        {formik.errors.phone && formik.touched.phone && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.phone}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Ngày sinh">
        <DatePicker
          format="DD/MM/YYYY"
          onChange={handleChangeDatePicker}
          value={
            !isBirthdayFormatValid
              ? dayjs(formik.values.birthday, "DD/MM/YYYY")
              : dayjs(formik.values.birthday)
          }
        />{" "}
        {formik.errors.birthday && formik.touched.birthday && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.birthday}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Giới tính" valuePropName="checked">
        <Switch
          onChange={handleChangeSwitch("gender")}
          checked={formik.values.gender}
        />
        {formik.errors.gender && formik.touched.gender && (
          <span className="form-label text-danger" style={{ display: "block" }}>
            {formik.errors.gender}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Loại người dùng">
        <Select
          value={formik.values.role}
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
          Cập nhật User
        </button>
      </Form.Item>
    </Form>
  );
};

export default EditUser;
