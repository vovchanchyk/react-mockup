import React from "react";
import LoginIMG from "./../../../../img/popup/login@2x.png";
import AvatarIMG from "./../../../../img/login/avatar.png";
import UnlockedIMG from "./../../../../img/login/unlocked.png";
import { render } from "react-dom";
import { Formik, useFormik, validateYupSchema } from "formik";
import * as yup from "yup";

export const VerifityLoginForm = (props) => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Required")
      .min(4, "name is too short - should be 4 chars minimum."),
    password: yup
      .string()
      .required("Please provide a valid password")
      .min(4, "Password is too short - should be 4 chars minimum."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      props.getAcces(values);
      resetForm({ name: "", password: "" });
    },
    validationSchema,
    // validate: values =>{
    //   let errors = {}
    //   if(!values.name ){
    //     errors.name = "Required"
    //   }
    //   if(!values.password){
    //     errors.password = "Required"
    //   }
    //   return errors
    // }
  });

  return (
    <div className="verifitylogin">
      <div className="verifitylogin__head">
        <h2 className="verifitylogin__title">LOGIN</h2>
        <img src={LoginIMG} alt="" className="verifitylogin__img" />
      </div>
      <div className="verifitylogin__body">
        <form
          action="#"
          className="verifitylogin__form"
          onSubmit={formik.handleSubmit}
        >
          <div
            className={
              formik.touched.name && formik.errors.name
                ? "verifitylogin__form-group error-input"
                : "verifitylogin__form-group "
            }
          >
            <img src={AvatarIMG} alt="" className="verifitylogin__form-icon " />
            <input
              className="verifitylogin__form-input"
              name="name"
              autoComplete="off"
              type="text"
              onBlur={formik.handleBlur}
              placeholder={formik.errors.name}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div
            className={
              formik.touched.password && formik.errors.password
                ? "verifitylogin__form-group error-input"
                : "verifitylogin__form-group "
            }
          >
            <img
              src={UnlockedIMG}
              alt=""
              className="verifitylogin__form-icon"
            />
            <input
              className="verifitylogin__form-input"
              name="password"
              type="password"
              onBlur={formik.handleBlur}
              placeholder={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <input
            className="verifitylogin__form-btn"
            type="submit"
            value="login"
          />
        </form>
      </div>
    </div>
  );
};
