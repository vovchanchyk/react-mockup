import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Post from './Post/Post';
import VerifityPostRequired from './VerifityPostRequired/VerifityPostRequired';
import VerifitySignup from './VerifitySignup/VerifitySignup';
import { MyContentLogin } from './login/MyContentLogin';
import { MyContentSignupTwo } from './signup/MyContentSignupTwo';


export default class MyContent extends React.Component {
  
  constructor(props) {

    super(props)
    this.state = {
      verifity: false,
    }
  }
  render() {
  
    switch (this.props.store.verifity) {
    
      case true:
        return <MyContentPost />

        break;
      case false:
        return <Verifity wayofveritity={this.props.wayofveritity} toLogin={this.props.toLogin} toSignup={this.props.toSignup} toSignupForm={this.props.toSignupForm}/>

        break;

      default:
        break;
    }
  }
}


class Verifity extends React.Component {


  render() {
  

    switch (this.props.wayofveritity) {
    
      case 'required': return <MyContentRequired  toLogin={this.props.toLogin}/>

        break;
      case 'login': return (<MyContentLogin  toSignup={this.props.toSignup} />)

        break;
      case 'signup':  return (<MyContentSignup toLogin={this.props.toLogin} toSignupForm={this.props.toSignupForm}/>)
        break;

      case 'signuptwo': return (<MyContentSignupTwo toSignup={this.props.toSignup}  toLogin={this.props.toLogin}/>)
        break;
        default:  
          break  
    }
  }
}



class MyContentPost extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section className="section">
        <MyContentHeadPost />
        <MyContentBodyPost />
      </section>
    )
  }
}

class MyContentRequired extends React.Component {
 
  render() {
    return (

      <section className="section">
        <MyContentHeadRequired />
        <MyContentBodyRequired toLogin={this.props.toLogin}/>
      </section>
    )
  }
}


class MyContentSignup extends React.Component {

  render() {
    return (

      <section className="section">
        <MyContentHeadSignup toLogin={this.props.toLogin}/>
        <MyContentBodySignup toSignupForm={this.props.toSignupForm}/>
      </section>
    )
  }
}



class  MyContentHeadRequired extends React.Component {
  render(){
    return (
      <div className="section__header">
        <h1 className="section__title">MY CONTENT</h1>
        <h4 className="section__subtitle">Sorry, you need to login before using this feature</h4>
      </div>
    )
  }
}


class MyContentBodyRequired extends React.Component {
  render() {
    return (
      <div className="section__body">
        <VerifityPostRequired toLogin={this.props.toLogin}/>
      </div>
    )
  }
}


class MyContentHeadSignup extends React.Component {
  render() {
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">SIGNUPt</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <a className="section__link" onClick={this.props.toLogin}>Login</a>
            </li>
            <li className="section__route">
              <a className="section__link">Signup</a>
            </li>
          </nav>
        </div>
      </div>
    )
  }
}
class MyContentBodySignup extends React.Component {

  render() {

    return (

      <div className="section__body">
        <VerifitySignup toSignupForm={this.props.toSignupForm}/>
      </div>
    )
  }
}




class MyContentHeadPost extends React.Component {

  render() {
  
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">MY CONTENT</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <a className="section__link" href="">Recent</a>
            </li>
            <li className="section__route">
              <a className="section__link" href="">Oldest</a>
            </li>
          </nav>
        </div>
        <button className="section__btn">+ADD CONTENT</button>
      </div>
    )

  }
}

class MyContentBodyPost extends React.Component {

  render() {
    return (

      <div className="section__body">
        <Post />
      </div>
    )
  }
}

