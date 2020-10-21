import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import Post from './Post/Post';
import VerifityPostRequired from './VerifityPostRequired/VerifityPostRequired';
import VerifityLogin from './VerifityLogin/VerifityLogin';
import VerifitySignup from './VerifitySignup/VerifitySignup';
import VerifitySignupTwo from './VerifitySignupTwo/VerifitySignupTwo';



export default class MyContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verifity: false,
    }
  }
  render() {
    switch (this.state.verifity) {
      case true:
        return <MyContentPost />

        break;
      case false:
        return <Verifity store={this.props.store} rerender={this.props.rerender}/>

        break;

      default:
        break;
    }
  }
}


class Verifity extends React.Component {
  constructor(props){
  super(props)
    this.state = {
    wayofveritity: 'required'
    }
  }

  toLogin =()=>{
  
    this.setState({wayofveritity : 'login'})
  }
  toSignup =()=>{
  
    this.setState({wayofveritity : 'signup'})
  }

  toSignupForm =()=>{
    this.setState({ wayofveritity: 'signuptwo'})
  }

  render() {

    switch (this.state.wayofveritity) {
    
      case 'required': return <MyContentRequired  toLogin={this.toLogin}/>

        break;
      case 'login': return (<MyContentLogin store={this.props.store} toSignup={this.toSignup} rerender={this.props.rerender}/>)

        break;
      case 'signup':  return (<MyContentSignup toLogin={this.toLogin} toSignupForm={this.toSignupForm}/>)
        break;

      case 'signuptwo': return (<MyContentSignupTwo store={this.props.store} toSignup={this.toSignup}  toLogin={this.toLogin}/>)
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

class MyContentLogin extends React.Component {

  render() {
    return (

      <section className="section">
        <MyContentHeadLogin toSignup={this.props.toSignup}/>
        <MyContentBodyLogin store={this.props.store} rerender={this.props.rerender}/>
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

class MyContentSignupTwo extends React.Component {

  render() {
   
    return (

      <section className="section">
        <MyContentHeadSignupTwo />
        <MyContentBodySignupTwo store={this.props.store} toSignup={this.props.toSignup}  toLogin={this.props.toLogin}/>
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
        <VerifityLogin store={this.props.store} rerender={this.props.rerender}/>
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


class MyContentHeadSignupTwo extends React.Component {
  render() {
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">SIGNUP</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <a className="section__link" href="">Login</a>
            </li>
            <li className="section__route">
              <a className="section__link" href="">Signup</a>
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
        <VerifitySignupTwo store={this.props.store} toSignup={this.props.toSignup}  toLogin={this.props.toLogin}/>
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

