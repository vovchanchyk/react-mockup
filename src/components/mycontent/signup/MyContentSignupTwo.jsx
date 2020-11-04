
import React from 'react';
import { connect } from 'react-redux';
import VerifitySignupTwo, { VerifitySignupContainer } from './VerifitySignupTwo/VerifitySignupTwo';

export class MyContentSignupTwo extends React.Component {

    render() {
     
      return (
  
        <section className="section">
          <MyContentHeadSignupTwo toLogin={this.props.toLogin}/>
          <MyContentBodySignupTwo  toSignup={this.props.toSignup} toLogin={this.props.toLogin} />
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
    render() {
      return (
  
        <div className="section__body">
          
              return   (  
              <VerifitySignupContainer
                toLogin={this.props.toLogin}
                toSignup={this.props.toSignup} />
               ) 
          
        </div>
      )
    }
  }



