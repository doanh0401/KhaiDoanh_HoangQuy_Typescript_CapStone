import React, { useState } from "react";
import { Form, Input, InputNumber, Switch } from "antd";
import { FormikProps, useFormik } from "formik";
import { formDataRoom } from "../../../interfaces/admin";
import { adminService } from "../../../services/admin";
import { useDispatch } from "react-redux";

type SizeType = Parameters<typeof Form>[0]["size"];

const Addnew: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  // const [imgSrc, setImgSrc] = useState<any | null>("");

  const dispatch: any = useDispatch();
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
      hinhAnh : ""
    },
    onSubmit: async (values: any) => {
      // let formData: any;
      values.hinhAnh = "";
      // for (let key in values) {
      //   if (key === "hinhAnh") {
      //     formData.append("File", values[key], values[key].name);
      //   } else {
      //   formData.append(key, values[key]);
      // }
      // }
      console.log(values);
      
      await dispatch(addRoom(values));
    },
  });
  const addRoom = async (formData: any) => {
    try {
      const result = await adminService.addRoomApi(formData);
      alert("Thêm phòng thành công!");
      console.log(result);
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
  // const handleChangeFile = (e: any) => {
  //   if (
  //     e.target.files[0].type === "image/jpeg" ||
  //     e.target.files[0].type === "image/jpg" ||
  //     e.target.files[0].type === "image/gif" ||
  //     e.target.files[0].type === "image/png"
  //   ) {
  //     let reader = new FileReader();
  //     if (e.target.files[0]) {
  //       reader.readAsDataURL(e.target.files[0]);
  //       reader.onload = (e) => {
  //         setImgSrc(e.target?.result);
  //       };
  //     }
  //     formik.setFieldValue("hinhAnh", e.target.files[0]);
  //   }
  // };

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
      </Form.Item>
      <Form.Item label="Tên phòng">
        <Input name="tenPhong" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Số khách">
        <InputNumber
          onChange={handleChangeInputNumber("khach")}
          min={1}
          max={10}
        />
      </Form.Item>
      <Form.Item label="Phòng ngủ">
        <InputNumber
          onChange={handleChangeInputNumber("phongNgu")}
          min={1}
          max={10}
        />
      </Form.Item>
      <Form.Item label="Gường">
        <InputNumber
          onChange={handleChangeInputNumber("giuong")}
          min={1}
          max={10}
        />
      </Form.Item>
      <Form.Item label="Phòng tắm">
        <InputNumber
          onChange={handleChangeInputNumber("phongTam")}
          min={1}
          max={10}
        />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Giá tiền">
        <InputNumber
          onChange={handleChangeInputNumber("giaTien")}
          min={1}
          max={100}
        />
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
      </Form.Item>
      {/* <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/jpeg, image/jpg, image/gif, image/png"
        />
        <br />
        <img width={200} height={150} src={imgSrc} alt="" />
      </Form.Item> */}
      <Form.Item label="Tác vụ">
        <button type="submit" className="btn btn-primary">
          Thêm phòng
        </button>
      </Form.Item>
    </Form>
  );
};

export default Addnew;
