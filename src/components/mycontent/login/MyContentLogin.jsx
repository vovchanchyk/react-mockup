import React from 'react';
import VerifityLogin, { VerifityLoginContainer } from './VerifityLogin/VerifityLogin';
export class MyContentLogin extends React.Component {

    render() {
      return (
  
        <section className="section">
          <MyContentHeadLogin toSignup={this.props.toSignup}/>
          <MyContentBodyLogin />
        </section>
      )
    }
  }

  
class MyContentHeadLogin extends React.Component {

    toSignup=()=>{
      this.props.toSignup()
    }
    
      render() {
      
        return (
          <div className="section__header">
            <div className="section__left">
              <h1 className="section__title">Login</h1>
              <h4 className="section__subtitle">Sort by</h4>
              <nav className="section__routers">
                <li className="section__route">
                  <a className="section__link" href="">Login</a>
                </li>
                <li className="section__route">
                  <a className="section__link" onClick={this.toSignup}>Signup</a>
                </li>
              </nav>
            </div>
    
          </div>
        )
    
      }
    }
    
    class MyContentBodyLogin extends React.Component {
      render() {
        return (
          <div className="section__body">     
             <VerifityLoginContainer />
          </div>
        )
      }
    }