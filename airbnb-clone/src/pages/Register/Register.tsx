import React, { useState } from "react";
import "../Login/Login.scss";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { UserRegister } from "../../interfaces/user";
import { userService } from "../../services/user";
import { redirect } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Register() {
  const dispatch = useDispatch();

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
  });

  const registerSchema = Yup.object({
    name: Yup.string().required("(*) Tên Người Dùng là bắt buộc"),
    email: Yup.string()
      .email("(*) Email không hợp lệ")
      .required("(*) Email là bắt buộc"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "(*) Số Điện Thoại không hợp lệ")
      .required("(*) Số Điện Thoại là bắt buộc"),
    password: Yup.string()
      .min(6, "(*) Mật khẩu phải có ít nhất 6 ký tự")
      .required("(*) Mật khẩu là bắt buộc"),
    address: Yup.string().required("(*) Địa Chỉ là bắt buộc"),
    birthday: Yup.date().required("(*) Ngày Sinh là bắt buộc"),
    gender: Yup.string().required("(*) Giới Tính là bắt buộc"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    birthday: "",
    gender: "true",
  };

  const handleSubmit = async (values: UserRegister, { resetForm }: any) => {
    try {
      await userService.signUpUser(values);

      redirect("/login");

      resetForm();
    } catch (error) {
      resetForm();
    }
  };

  return (
    <div className="w-screen h-screen relative background">
      <div className="w-full p-5">
        <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-2/3 mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4 relative">
                <div className="text-center font-semibold text-3xl text-blue-800">
                  <h1>Đăng ký tài khoản</h1>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 gap-x-4 gap-y-1">
                <div className="mb-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tên Người Dùng
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    type="text"
                    placeholder="Ho Ten"
                  />
                  <span></span>
                  <ErrorMessage
                    name="name"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <span></span>
                  <ErrorMessage
                    name="email"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Số Điện Thoại
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="phone"
                    type="text"
                  />
                  <span></span>
                  <ErrorMessage
                    name="phone"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Mật khẩu
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="password"
                    type="text"
                  />
                  <span></span>
                  <ErrorMessage
                    name="password"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Địa Chỉ
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="address"
                    type="text"
                    placeholder="Dia Chi"
                  />
                  <span></span>
                  <ErrorMessage
                    name="address"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="birthday"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ngày Sinh
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="birthday"
                    type="date"
                    placeholder="Ngay sinh"
                  />
                  <span></span>
                  <ErrorMessage
                    name="birthday"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Giới tính
                  </label>
                  <Field
                    as="select"
                    id="gender"
                    name="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="col-span-2 text-center mt-4">
                  <button
                    type="submit"
                    className="text-white focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-red-500 hover:bg-red-800 duration-300 w-1/2"
                  >
                    Đăng ký
                  </button>
                </div>
                <a
                  className="col-span-2 text-center text-rose-600 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200"
                  href="/login"
                >
                  Đăng nhập ngay
                </a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
