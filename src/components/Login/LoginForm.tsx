import sms from "../../assets/icons/sms.png";
import lock from "../../assets/icons/lock.png";
import { useFormik } from "formik";
import * as yup from "yup";
import useAPI from "../../hooks/useAPI";
import Loader from "../Loader";
import type { LoginResponse } from "../../data/response";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const {POST,loading} = useAPI();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values: typeof initialValues) => {
    // console.log(values);
    const response:LoginResponse = await POST("/yeshtery/token", {...values,isEmployee:true});
    console.log("Login response:", response);
    Cookies.set("token", response.token.trim(),{ secure: true });
    navigate("/");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: yup.object({
      email: yup.string().required("Email is required").email("Invalid email format"),
      password: yup.string().required("Password is required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      {loading && <Loader />}
      <div className="w-full space-y-5">
        <div className="w-full flex flex-col gap-1">
          <div className="relative flex-1 w-full rounded-2xl p-4 focus-within:ring-0 outline-none border border-white bg-white/40">
            <img
              src={sms}
              className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="pl-9 w-full focus-within:ring-0 border-0 outline-none"
            />
          </div>
          <div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1 ml-2">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="relative w-full rounded-2xl p-4 focus-within:ring-0 outline-none border border-white bg-white/40">
            <img
              src={lock}
              className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="pl-9 w-full focus-within:ring-0 border-0 outline-none"
            />
          </div>
          <div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1 ml-2">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={!formik.values.email || !formik.values.password || Object.keys(formik.errors).length > 0}
        className="leading-[100%] tracking-[0%] bg-(--color-primary) text-white rounded-lg py-3 px-5 w-full mt-9 disabled:opacity-50 disabled:cursor-not-allowed!"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
