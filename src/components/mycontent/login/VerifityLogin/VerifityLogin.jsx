import React from "react";
import LoginIMG from "./../../../../img/popup/login@2x.png";
import AvatarIMG from "./../../../../img/login/avatar.png";
import UnlockedIMG from "./../../../../img/login/unlocked.png";

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

export const VerifityLoginForm = (props) => {
  const verifity = false;
  const history = useHistory();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Required")
      .min(4, "Too short - should be 4 chars minimum."),
    password: yup
      .string()
      .required("Required")
      .min(4, "Too short - should be 4 chars minimum."),
  });

  const initialValues = {
    name: "",
    password: "",
  };
  const onSubmit = (values, { resetForm }) => {
    props.getAcces(values);
    console.log(values);
    resetForm({ name: "", password: "" });
    history.push("/");
  };

  return (
    <div className="verifitylogin">
      <div className="verifitylogin__head">
        <h2 className="verifitylogin__title">LOGIN</h2>
        <img src={LoginIMG} alt="" className="verifitylogin__img" />
      </div>
      <div className="verifitylogin__body">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form action="#" className="verifitylogin__form">
            <div className="verifitylogin__form-group ">
              <img
                src={AvatarIMG}
                alt=""
                className="verifitylogin__form-icon "
              />
              <Field
                className="verifitylogin__form-input"
                name="name"
                autoComplete="off"
                type="text"
              />
            </div>
            <ErrorMessage name="name" />
            <div className="verifitylogin__form-group ">
              <img
                src={UnlockedIMG}
                alt=""
                className="verifitylogin__form-icon"
              />
              <Field
                className="verifitylogin__form-input"
                name="password"
                type="password"
              />
            </div>
            <ErrorMessage name="password" />
            <input
              className="verifitylogin__form-btn"
              type="submit"
              value="login"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
