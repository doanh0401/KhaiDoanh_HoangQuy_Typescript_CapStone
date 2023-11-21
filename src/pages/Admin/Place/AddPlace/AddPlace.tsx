import React, { useState } from "react";
import { Form, Input, InputNumber } from "antd";
import { FormikProps, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlace } from "../../../../interfaces/admin";
import { adminService } from "../../../../services/admin";
import * as Yup from "yup";

type SizeType = Parameters<typeof Form>[0]["size"];

const AddPlace: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const addPlaceValidate = Yup.object().shape({
    id: Yup.number()
      .required("Vui lòng nhập ID!")
      .min(1, "Vui lòng nhập ID!")
      .max(10000, "Vui lòng nhập đúng yêu cầu(1-10000)"),
    tenViTri: Yup.string()
      .required("Tên vị trí không được để trống!")
      .matches(
        /^[ aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]+$/,
        "Vui lòng nhập đúng định dạng!"
      ),
    tinhThanh: Yup.string()
      .required("Tỉnh thành không được để trống!")
      .matches(
        /^[ aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]+$/,
        "Vui lòng nhập đúng định dạng!"
      ),
    quocGia: Yup.string()
      .required("Quốc gia không được để trống!")
      .matches(
        /^[ aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]+$/,
        "Vui lòng nhập đúng định dạng!"
      ),
  });
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const formik: FormikProps<addPlace> = useFormik<addPlace>({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: "",
    },
    validationSchema: addPlaceValidate,
    onSubmit: async (values: any) => {
      await dispatch(themViTri(values));
    },
  });
  const themViTri = async (formData: any) => {
    try {
      const result = await adminService.themViTriApi(formData);
      alert("Thêm vị trí thành công!");
      navigate(`/admin/place`);
    } catch (errors) {
      console.log(errors);
    }
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
      <h3 style={{ marginBottom: "20px" }}>Thêm vị trí</h3>
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
      <Form.Item label="Tên vị trí">
        <Input name="tenViTri" onChange={formik.handleChange} />
        {formik.errors.tenViTri && formik.touched.tenViTri && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.tenViTri}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Tỉnh thành">
        <Input name="tinhThanh" onChange={formik.handleChange} />
        {formik.errors.tinhThanh && formik.touched.tinhThanh && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.tinhThanh}
          </span>
        )}
      </Form.Item>
      <Form.Item label="Quốc gia">
        <Input name="quocGia" onChange={formik.handleChange} />
        {formik.errors.quocGia && formik.touched.quocGia && (
          <span
            className="form-label text-danger"
            style={{ marginLeft: "10px" }}
          >
            {formik.errors.quocGia}
          </span>
        )}
      </Form.Item>

      <Form.Item label="Tác vụ">
        <button type="submit" className="btn btn-primary">
          Thêm vị trí
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddPlace;
