import React from 'react';

import LoginIMG from './../../../../img/popup/login@2x.png';
import AvatarIMG from './../../../../img/login/avatar.png';
import EmailIMG from './../../../../img/login/envelope.png';
import UnlockedIMG from './../../../../img/login/unlocked.png';
import { useFormik } from 'formik';




export const VerifitySignupTwo = (props) => {


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    
    onSubmit: values => {
   
     props.addUser(values)
     
   
     
    },
    validate: values => {
      let errors = {}
      if (!values.name) {
        errors.name = "Required"
      }
      if (!values.email) {
        errors.email = "Required"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = "Required"
      }
      return errors
    }

  })







  return (
    <div className="verifitysignuptwo">
      <div className="verifitysignuptwo__head">
        <h2 className="verifitysignuptwo__title">SIGNUP</h2>
        <img
          src={LoginIMG}
          alt=""
          className="verifitysignuptwo__img"
        />
      </div>
      <div className="verifitysignuptwo__body">
        <h2 className="verifitysignuptwo__description">
          2nd step: <br />
        Enter you Account Information
      </h2>
        <form action="" className="verifitysignuptwo__form" onSubmit={formik.handleSubmit}>
          <div className={formik.touched.name
            && formik.errors.name ?
            "verifitysignuptwo__form-group error-input"
            : "verifitysignuptwo__form-group "}>
            <img
              src={AvatarIMG}
              alt=""
              className="verifitysignuptwo__form-icon"
            />
            <input name="name"
              className="verifitysignuptwo__form-input"
              type="text"
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder={formik.errors.name}
              onChange={formik.handleChange}
            />

          </div>
          <div className={formik.touched.email
            && formik.errors.email ?
            "verifitysignuptwo__form-group error-input"
            : "verifitysignuptwo__form-group "}>
            <img
              src={EmailIMG}
              alt=""
              className="verifitysignuptwo__form-icon"
            />
            <input name="email"
              className="verifitysignuptwo__form-input"
              type="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder={formik.errors.email}
              onChange={formik.handleChange}



            />
          </div>
          <div className={formik.touched.password
            && formik.errors.password ?
            "verifitysignuptwo__form-group error-input"
            : "verifitysignuptwo__form-group "}>
            <img
              src={UnlockedIMG}
              alt=""
              className="verifitysignuptwo__form-icon"
            />
            <input name="password"
              className="verifitysignuptwo__form-input"
              type="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder={formik.errors.password}
              onChange={formik.handleChange}
            />
          </div>
          <button className="verifitysignuptwo__form-btn">Login now</button>
        </form>

        <div className="verifitysignuptwo__progress">
          <span className="verifitysignuptwo__progress-rate step-two"></span>
          <ul className="verifitysignuptwo__progressbar">
            <li className="verifitysignuptwo__step checked" onClick={props.toSignup} ></li>
            <li className="verifitysignuptwo__step checked ac-info"></li>
            <li className="verifitysignuptwo__step message"></li>
          </ul>
        </div>
      </div>
    </div>


  )
}





