import React from 'react';
import {Route,Link,BrowserRouter} from 'react-router-dom';

import LoginIMG from './../../../img/popup/login@2x.png'
export default class VerifityPostRequired extends React.Component {
constructor(props){
  super(props)
}

  render() {

    return (
      <div className="verifitypost">
        <div className="verifitypost__head">
          <h2 className="verifitypost__title">LOGIN REQUIRED</h2>
          <img
            src={LoginIMG}
            alt=""
            className="verifitypost__img"
          />
        </div>
        <div className="verifitypost__body">
          <p className="verifitypost__description">
            "Please authenticate with Reddit to schedule a post."
        </p>
          <button className="verifitypost__btn" onClick={ this.props.toLogin}> Login Now </button>
          
        </div>
      </div>

    )
  }
}