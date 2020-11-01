import React from 'react';

import LoginIMG from './../../../img/popup/login@2x.png';
import AvatarIMG from './../../../img/login/avatar.png';
import EmailIMG from './../../../img/login/envelope.png';
import UnlockedIMG from './../../../img/login/unlocked.png';
import { ADDUSER } from '../../../store/registrationReduser';

export default class VerifitySignupTwo extends React.Component {
constructor(props){
 
  super(props)
  this.state = {
    formData:{
      name :'',
      email:'',
      password :'',
    },
    type:ADDUSER
   
  }
}
changeName=(event)=>{
  let text = event.target.value
  let otherState = {...this.state.formData }
  otherState.name = text
  this.setState( {formData : otherState})
} 
changeEmail=(event)=>{
  let text = event.target.value
  let otherState = {...this.state.formData }
  otherState.email = text
  this.setState( {formData : otherState})
} 
changePassword=(event)=>{
  let text = event.target.value
  let otherState = {...this.state.formData }
  otherState.password = text
  this.setState( {formData : otherState})
 } 
submit=(event)=>{

 event.preventDefault()
this.props.store.dispatch(this.state)
console.log(this.props.store.getState())
this.props.rerender()
 this.props.toLogin()
 let clean = {
  userName :'',
  userEmail:'',
  password :'',
}
this.setState({formData:clean}) 
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
                value={this.state.formData.name}
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
                value={this.state.formData.email}
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
                value={this.state.formData.password}
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
