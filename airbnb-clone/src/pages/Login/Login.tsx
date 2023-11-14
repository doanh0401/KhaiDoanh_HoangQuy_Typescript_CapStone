import React from "react";
import "./Login.scss";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { UserLogin } from "../../interfaces/user";
import { userService } from "../../services/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/reducers/userReducer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("(*) Email không được để trống"),
    password: Yup.string().required("(*) Mật khẩu không được để trống"),
  });
  const handleSubmit = async (values: UserLogin, { resetForm }: any) => {
    try {
      const result = await userService.loginUser(values);

      navigate("/");

      dispatch(userActions.setUserInfo(result.data.content));
      
      localStorage.setItem("USER_INFO", JSON.stringify(result.data.content));

      resetForm();
    } catch (error) {
      resetForm();
    }
  };

  return (
    <div className="w-screen h-screen relative background">
      <div className="w-full p-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-1/2 md:w-2/5">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            <Form className="form-lg">
              <div className="relative mb-4">
                <div className="font-semibold text-3xl text-blue-800 text-center">
                  Đăng nhập
                </div>
              </div>
              <div>
                <div className="mb-2">
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
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Mật Khẩu
                  </label>
                  <Field
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="password"
                    type="password"
                    placeholder="Mật khẩu"
                  />
                  <span></span>
                  <ErrorMessage
                    name="password"
                    component="label"
                    className="form-label form-label-login text-danger"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-6">
                  <a
                    aria-current="page"
                    className="text-rose-700 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200 active"
                    href="/login"
                  >
                    Quên mật khẩu?
                  </a>
                  <button
                    type="submit"
                    className="text-white focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full bg-red-500 hover:bg-red-800 duration-300"
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Chưa có tài khoản
                    <a
                      className="ml-2 text-rose-700 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200"
                      href="/register"
                    >
                      Đăng ký ngay
                    </a>
                  </p>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
