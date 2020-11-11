
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { ADDUSER } from '../../../store/registrationReduser';


import {VerifitySignupTwo} from './VerifitySignupTwo/VerifitySignupTwo';

export class MyContentSignupTwo extends React.Component {

  render() {

    return (

      <section className="section">
        <MyContentHeadSignupTwo toLogin={this.props.toLogin} />
        <MyContentBodySignupTwo toSignup={this.props.toSignup} toLogin={this.props.toLogin} />
      </section>
    )
  }
}



class MyContentHeadSignupTwo extends React.Component {
  render() {
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">SIGNUP</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <a className="section__link" href="#" onClick={this.props.toLogin}>Login</a>
            </li>
            <li className="section__route">
              <a className="section__link" href="#">Signup</a>
            </li>
          </nav>
        </div>
      </div>
    )
  }
}
class MyContentBodySignupTwo extends React.Component {
  constructor(props) {

    super(props)
  }
 

  render() {
 
    return (

      <div className="section__body">


        <MyContentSignupTwoContainer 
          toLogin={this.props.toLogin}
          toSignup={this.props.toSignup}
          
        />


      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return state
}

let mapDispatchToProps = (dispatch) => {

  return {
    AddUser: (formData) => {
   debugger
      let user = {
        type: ADDUSER,
        data: {}
      }
      axios.post('http://localhost:3000/users/', formData).then(response => {
        user.data = response.data
        dispatch(user)
      })
    }
  }
}
export const MyContentSignupTwoContainer = connect(mapStateToProps, mapDispatchToProps,)(VerifitySignupTwo)