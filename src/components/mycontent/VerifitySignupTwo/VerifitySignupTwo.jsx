import React from 'react';

import LoginIMG from './../../../img/popup/login@2x.png';
import AvatarIMG from './../../../img/login/avatar.png';
import EmailIMG from './../../../img/login/envelope.png';
import UnlockedIMG from './../../../img/login/unlocked.png';

export default class VerifitySignupTwo extends React.Component {
constructor(props){
  super(props)
  this.state = {
    userName :'',
    userEmail:'',
    password :'',
  }
}
changeName=(event)=>{
 let text = event.target.value
 this.setState({userName: text })
} 
changeEmail=(event)=>{
 let text = event.target.value
 this.setState({userEmail: text })
} 
changePassword=(event)=>{
  let text = event.target.value
  this.setState({password: text })
 } 
submit=(event)=>{
 event.preventDefault()
 this.props.store.addUser(this.state)
 this.props.toLogin()
 let clean = {
  userName :'',
  userEmail:'',
  password :'',
}
this.setState(clean) 
}
  render() {
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
          <form action="" className="verifitysignuptwo__form" onSubmit={this.submit}>
            <div className="verifitysignuptwo__form-group">
              <img
                src={AvatarIMG}
                alt=""
                className="verifitysignuptwo__form-icon"
              />
              <input
                className="verifitysignuptwo__form-input"
                type="text"
                placeholder="Username"
                value={this.state.userName}
                onChange={this.changeName}
              />
            </div>
            <div className="verifitysignuptwo__form-group">
              <img
                src={EmailIMG}
                alt=""
                className="verifitysignuptwo__form-icon"
              />
              <input
                className="verifitysignuptwo__form-input"
                type="email"
                placeholder="Email"
                value={this.state.userEmail}
                onChange={this.changeEmail}
              />
            </div>
            <div className="verifitysignuptwo__form-group">
              <img
                src={UnlockedIMG}
                alt=""
                className="verifitysignuptwo__form-icon"
              />
              <input
                className="verifitysignuptwo__form-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.changePassword}
              />
            </div>
            <button className="verifitysignuptwo__form-btn">Login now</button>
          </form>

          <div className="verifitysignuptwo__progress">
            <span className="verifitysignuptwo__progress-rate step-two"></span>
            <ul className="verifitysignuptwo__progressbar">
              <li className="verifitysignuptwo__step checked" onClick={this.props.toSignup} ></li>
              <li className="verifitysignuptwo__step checked ac-info"></li>
              <li className="verifitysignuptwo__step message"></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}
