import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import { DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";
import { FormikProps, useFormik } from "formik";
import { adminService } from "../../../../services/admin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { adminActions } from "../../../../store/reducers/adminReducer";
import { addPlace, addUser, editUser } from "../../../../interfaces/admin";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type SizeType = Parameters<typeof Form>[0]["size"];

const EditPlace: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const { id } = useParams<any>();
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { thongtinPlace } = useSelector((state: any) => state.adminReducer);
  const editPlaceValidate = Yup.object().shape({
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

  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    try {
      const result = await adminService.layThongTinViTriApi(id);
      dispatch(adminActions.setThongTinViTriAction(result.data.content));
    } catch (errors) {
      console.log("errors", errors);
    }
  };

  const formik: FormikProps<addPlace> = useFormik<addPlace>({
    enableReinitialize: true,
    initialValues: {
      id: thongtinPlace?.id,
      tenViTri: thongtinPlace?.tenViTri,
      tinhThanh: thongtinPlace?.tinhThanh,
      quocGia: thongtinPlace?.quocGia,
      hinhAnh: thongtinPlace?.hinhAnh,
    },
    validationSchema: editPlaceValidate,
    onSubmit: async (values: any) => {
      await dispatch(capNhatViTri(values));
    },
  });
  const capNhatViTri = async (formData: any) => {
    try {
      const result = await adminService.capNhatViTriApi(id, formData);
      alert("Cập nhật thành công!");
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
      <h3 style={{ marginBottom: "20px" }}>Cập nhật người dùng</h3>

      <Form.Item label="ID">
        <InputNumber
          onChange={handleChangeInputNumber("id")}
          min={1}
          max={10000}
          value={formik.values.id}
        />
        import * as Yup from "yup";
      </Form.Item>
      <Form.Item label="Tên vị trí">
        <Input
          name="tenViTri"
          onChange={formik.handleChange}
          value={formik.values.tenViTri}
        />
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
        <Input
          name="tinhThanh"
          onChange={formik.handleChange}
          value={formik.values.tinhThanh}
        />
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
        <Input
          name="quocGia"
          onChange={formik.handleChange}
          value={formik.values.quocGia}
        />
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
          Cập nhật vị trí
        </button>
      </Form.Item>
    </Form>
  );
};

export default EditPlace;
