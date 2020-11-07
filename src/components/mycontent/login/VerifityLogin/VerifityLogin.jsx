import React from 'react';
import axios from 'axios'

import LoginIMG from './../../../../img/popup/login@2x.png';
import AvatarIMG from './../../../../img/login/avatar.png'
import UnlockedIMG from './../../../../img/login/unlocked.png'
import { GETACCES, ISFETCHING } from '../../../../store/registrationReduser';
import { connect } from 'react-redux';


export default class VerifityLogin extends React.Component {
  constructor(props) {
    debugger
    super(props)
    this.state = {

      name: '',
      password: ''

    }
  }
  changeName = (event) => {
    let text = event.target.value

    this.setState({ name: text })

  }
  changePassword = (event) => {

    let text = event.target.value

    this.setState({ password: text })

  }

  submit = (event) => {
    debugger
    event.preventDefault()

    this.props.getAcces(this.state)
    let clean ={
      name: '',
        password: ''
    }
    this.setState(clean)
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
let mapStateToProps = (state) => {
  return state
}




const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    getAcces: (formData) =>{
      let user = {
        type: GETACCES,
        data:{}
      }
      let val = formData.name
      let pass = formData.password
      let request = `http://localhost:3000/users/?name=${val}&password=${pass}`;
      axios.get(request)
      .then((response) => {
        debugger
        user.data = response.data[0]
        dispatch(user)

      }) 
    }
  }


}





export const VerifityLoginContainer = connect(mapStateToProps, mapDispatchToProps)(VerifityLogin)
