import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services/user";
import dayjs from "dayjs";
import * as Yup from "yup";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikProps,
  useFormik,
} from "formik";
import { DatePicker } from "antd";

export default function UserInfo() {
  const dispatch: any = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("(*) Họ tên không được để trống"),
    birthday: Yup.string().required("(*) Ngày sinh không được để trống"),
    email: Yup.string()
      .email("(*) Email không hợp lệ")
      .required("(*) Email không được để trống"),
    phone: Yup.string()
      .required("(*) Số điện thoại không được để trống")
      .min(10, "Số điện thoại phải có ít nhất 10 ký tự"),
    gender: Yup.string().required("(*) Giới tính không được để trống"),
  });

  const uploadAvatar = async (formFile: any) => {
    try {
      const result = await userService.uploadAvatarApi(formFile);
      alert("Upload thành công!");
      window.location.reload();
    } catch (errors) {
      console.log(errors);
    }
  };
  const formik: FormikProps<any> = useFormik<any>({
    initialValues: {
      hinhAnh: {},
    },
    onSubmit: async (values: any) => {
      let formFile = new FormData();
      formFile.append("formFile", values.hinhAnh, values.hinhAnh.name);
      console.log(values.hinhAnh);
      await dispatch(uploadAvatar(formFile));
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
      formik.setFieldValue("hinhAnh", e.target.files[0]);
    }
  };
  const stateUser = useSelector((state: any) => state.userReducer);
  const [userInfo, setUserInfo] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
    gender: "",
    avatar: "",
  });
  const handleSubmit = () => {
    formik.handleSubmit();
  };
  const [fieldErrors, setFieldErrors] = useState("");

  const getUserInfo = async () => {
    const result = await userService.userInfoApi(stateUser.userInfo.user.id);
    console.log(result.data.content.avatar);
    setUserInfo({
      ...result.data.content,
      birthday: result.data.content.birthday
        ? dayjs(result.data.content.birthday)
        : "",
      avatar: result.data.content.avatar,
    });
  };
  const handleChangeUserInfo = async (values: any, { resetForm }: any) => {
    const formattedValues = {
      ...values,
      birthday: values.birthday
        ? dayjs(values.birthday).format("MM-DD-YYYY")
        : null,
    };
    formattedValues.gender === "Nam"
      ? (formattedValues.gender = true)
      : (formattedValues.gender = false);
    try {
      await userService.updateUserInfoApi(
        stateUser.userInfo.user.id,
        formattedValues
      );
      getUserInfo();
      setFieldErrors("");
      resetForm();
    } catch (error: any) {
      setFieldErrors(error.response.data.content);
      resetForm();
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="container mx-auto px-10">
      <div className="h-28"></div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <div className="w-full sticky top-32 border rounded-lg p-5">
            <div>
              <img
                className="mx-auto rounded-full"
                src={userInfo.avatar}
                style={{ width: 129, height: 129 }}
              />
              <button
                className="text-center text-sm text-gray-600 underline hover:text-black duration-150 block mx-auto"
                type="button"
                onClick={handleSubmit}
              >
                Cập nhật ảnh
              </button>
              <input
                type="file"
                onChange={handleChangeFile}
                accept="image/jpeg, image/jpg, image/gif, image/png"
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center">
                <img
                  src="data:image/png;base64,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"
                  width="30px"
                  className="text-green-600"
                />
                <span className="ml-2 font-semibold text-lg">
                  Xác minh danh tính
                </span>
              </div>
              <div>
                <p className="text-gray-600 py-1 text-base">
                  Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
                </p>
                <button className="border px-5 py-2.5 rounded-lg hover:bg-gray-200 duration-200 font-semibold text-gray-800 my-1">
                  Nhận huy hiệu
                </button>
              </div>
            </div>
            <div className="mt-2 border-t py-2">
              <div className="font-semibold text-lg text-gray-800">
                Đã xác nhận
              </div>
              <div className="mt-2">
                <i className="fa-solid fa-check" />
                <span className="ml-2 text-sm italic">Địa chỉ email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-3/5">
          <div className="px-10">
            <Formik
              enableReinitialize
              initialValues={userInfo}
              validationSchema={validationSchema}
              onSubmit={handleChangeUserInfo}
            >
              <Form>
                <div className="md:grid md:grid-cols-1 gap-x-4 gap-y-1">
                  <div className="form-group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <span className="text-red-600">*</span> Họ Tên
                    </label>
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="name"
                      type="text"
                      placeholder="Họ Tên"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="form-label text-red-600"
                    />
                  </div>

                  <div className="form-group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <span className="text-red-600">*</span> Ngày sinh
                    </label>
                    <Field name="birthday">
                      {({ field, form }: any) => (
                        <DatePicker
                          {...field}
                          format="DD/MM/YYYY"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={(value) =>
                            form.setFieldValue("birthday", value)
                          }
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="birthday"
                      component="div"
                      className="form-label text-red-600"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <span className="text-red-600">*</span> Email
                    </label>
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="form-label text-red-600"
                    />
                    {fieldErrors && (
                      <div className="text-red-600">(*) {fieldErrors}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <span className="text-red-600">*</span> Số Điện Thoại
                    </label>
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="phone"
                      type="text"
                      placeholder="Số điện thoại"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="form-label text-red-600"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300r">
                      <span className="text-red-600">*</span> Giới tính
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value={"Nam"}>Nam</option>
                      <option value={"Nu"}>Nữ</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="form-label text-red-600"
                    />
                  </div>
                </div>
                <div className="col-span-2 text-center mt-2">
                  <button
                    type="submit"
                    className="text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-red-500 hover:bg-red-800 duration-300 w-1/2"
                  >
                    CẬP NHẬT
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
