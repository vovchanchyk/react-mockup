import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GETACCES } from "../../../store/registrationReduser";
import { VerifityLoginForm } from "./VerifityLogin/VerifityLogin";

export class MyContentLogin extends React.Component {
  render() {
    return (
      <section className="section">
        <MyContentHeadLogin />
        <MyContentBodyLogin />
      </section>
    );
  }
}

class MyContentHeadLogin extends React.Component {
  render() {
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">Login</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <Link className="section__link" to="/verifity/">
                Login
              </Link>
            </li>
            <li className="section__route">
              <Link className="section__link" to="/verifity/signup">
                Signup
              </Link>
            </li>
          </nav>
        </div>
      </div>
    );
  }
}

const MyContentBodyLogin = (props) => {
  return (
    <div className="section__body">
      <VerifityLoginContainer />
    </div>
  );
};

let mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAcces: (formData) => {
      let user = {
        type: GETACCES,
        data: {},
      };
      let val = formData.name;
      let pass = formData.password;
      let request = `http://localhost:3000/users/?name=${val}&password=${pass}`;
      axios.get(request).then((response) => {
        if (response.data.length > 0) {
          user.data = response.data[0];
          dispatch(user);
        } else {
          alert("you have not pass registration yet");
        }
      });
    },
  };
};

export const VerifityLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifityLoginForm);
