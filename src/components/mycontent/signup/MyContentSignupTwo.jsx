
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ADDUSER } from '../../../store/registrationReduser';


import {VerifitySignupTwo} from './VerifitySignupTwo/VerifitySignupTwo';

export class MyContentSignupTwo extends React.Component {

  render() {

    return (

      <section className="section">
        <MyContentHeadSignupTwo />
        <MyContentBodySignupTwo  />
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
              <Link className="section__link" to="/verifity/" >Login</Link>
            
            </li>
            <li className="section__route">
              <Link className="section__link" to="/verifity/signup">Signup</Link>
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


        <MyContentSignupTwoContainer />


      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return state
}

let mapDispatchToProps = (dispatch) => {

  return {
    addUser: (formData) => {
 
      let user = {
        type: ADDUSER,
        data: {}
      }
      axios.post('http://localhost:3000/users/', formData).then(response => {
        debugger
        user.data = response.data
        dispatch(user)
      })
    }
  }
}
export const MyContentSignupTwoContainer = connect(mapStateToProps, mapDispatchToProps,)(VerifitySignupTwo)