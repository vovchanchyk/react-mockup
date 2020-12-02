import React from "react";
import { Link } from "react-router-dom";

export default class VerifitySignup extends React.Component {
  render() {
    return (
      <div className="verifitysignup">
        <div className="verifitysignup__head">
          <h2 className="verifitysignup__title">SIGNUPr</h2>
          <img
            src="./img/signu[/user_(1).png"
            alt=""
            className="verifitysignup__img"
          />
        </div>
        <div className="verifitysignup__body">
          <h2 className="verifitysignup__description">
            1st step: Verify your Identity using Reddit
          </h2>
          <button className="verifitysignup__form-btn">
            <Link className="link-router" to="/verifity/signuptwo">
              {" "}
              Verifity now{" "}
            </Link>{" "}
          </button>
          <div className="verifitysignup__progress">
            <span className="verifitysignup__progress-rate"></span>
            <ul className="verifitysignup__progressbar">
              <li className="verifitysignup__step checked"></li>
              <li className="verifitysignup__step ac-info "></li>
              <li className="verifitysignup__step add-content"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
