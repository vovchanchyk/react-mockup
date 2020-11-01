import React from 'react';


import LoginIMG from './../../../img/popup/login@2x.png';
import AvatarIMG from './../../../img/login/avatar.png'
import UnlockedIMG from './../../../img/login/unlocked.png'
import { GETACCES } from '../../../store/registrationReduser';

export default class VerifityLogin extends React.Component {
 constructor(props){ 
   super(props)
   this.state = {
     formData:{
      name :'',
      password :''
     },
    type:GETACCES    
 }
}
 changeName=(event)=>{
let text = event.target.value
let otherState = {...this.state.formData }
otherState.name = text
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
  let clean =  { 
    name :'',
    password :''
  }
  this.setState({formData : clean})
 }


 
  render() {

    return (
      <div className="verifitylogin">
        <div className="verifitylogin__head">
          <h2 className="verifitylogin__title">LOGIN</h2>
          <img
            src={LoginIMG}
            alt=""
            className="verifitylogin__img"
          />
        </div>
        <div className="verifitylogin__body">
          <form action="#" className="verifitylogin__form" onSubmit={this.submit}>
            <div className="verifitylogin__form-group">
              <img
                src={AvatarIMG}
                alt=""
                className="verifitylogin__form-icon"
              />
              <input
                className="verifitylogin__form-input"
                type="text"
                placeholder="Username or Email"
                onChange={this.changeName}
                value={this.state.formData.name}
              />
            </div>
            <div className="verifitylogin__form-group">
              <img
                src={UnlockedIMG}
                alt=""
                className="verifitylogin__form-icon"
              />
              <input
                className="verifitylogin__form-input"
                type="text"
                placeholder="Password"
                value={this.state.formData.password}
                onChange={this.changePassword}
              />
            </div>
            <input
              className="verifitylogin__form-btn"
              type="submit"
              value='login'
            />
          </form>
        </div>
      </div>






    )
  }
}

