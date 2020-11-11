import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { GETACCES } from '../../../store/registrationReduser';
import { store } from '../../../store/storeFromRedux';
import  { VerifityLoginForm, VerifityLoginFormContainer } from './VerifityLogin/VerifityLogin';



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
  constructor(props){

    super(props)
  }

      render() {
       
        return (
          <div className="section__body">     
             <VerifityLoginContainer/>
          </div>
        )
      }
    }

    
let mapStateToProps = (state) => {
  
  return state
}

const mapDispatchToProps = (dispatch) => {

  return {
    getAcces: (formData) => {
      let user = {
        type: GETACCES,
        data: {}
      }
      let val = formData.name
      let pass = formData.password
      let request = `http://localhost:3000/users/?name=${val}&password=${pass}`;
      axios.get(request)
        .then((response) => {
          debugger
          if (response.data.length > 0) {
            user.data = response.data[0]
            dispatch(user)
          } else {
            alert('you have not pass registration yet')
          }
        })
    }
  }


}

export const VerifityLoginContainer = connect(mapStateToProps, mapDispatchToProps)(VerifityLoginForm)
