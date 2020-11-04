import React from 'react';


import LoginIMG from './../../../../img/popup/login@2x.png';
import AvatarIMG from './../../../../img/login/avatar.png'
import UnlockedIMG from './../../../../img/login/unlocked.png'
import { GETACCES } from '../../../../store/registrationReduser';
import { connect } from 'react-redux';


export default class VerifityLogin extends React.Component {
 constructor(props){ 
   super(props)
   this.state = {
     
      name :'',
      password :''
   
 }
}
 changeName=(event)=>{
let text = event.target.value

this.setState( {name : text})

} 
changePassword=(event)=>{

  let text = event.target.value

  this.setState( {password : text})

} 

 submit=(event)=>{
   debugger
  event.preventDefault()
  this.props.getAcces(this.state)
  console.log(this.props)
 
  let clean =  { 
    name :'',
    password :''
  }
  this.setState( clean)
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
                value={this.state.name}
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
                value={this.state.password}
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
let mapStateToProps =(state)=>{
  return state
 }
 
 
 let mapDispatchToProps =(dispatch)=>{
 
   return {getAcces : (formData)=>{
       dispatch({type:GETACCES, data: formData })
     }}
    
     
   
 }
 
 export const VerifityLoginContainer = connect(mapStateToProps,mapDispatchToProps)(VerifityLogin)
