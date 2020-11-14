import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';

import Post from './Post/Post';
import VerifityPostRequired from './VerifityPostRequired/VerifityPostRequired';
import VerifitySignup from './VerifitySignup/VerifitySignup';
import { MyContentLogin } from './login/MyContentLogin';
import { MyContentSignupTwo } from './signup/MyContentSignupTwo';





export  class Verifity extends React.Component {


  render() {

    
    
     return(
     
     <Switch>
      <Route exact path="/verifity/" component={MyContentLogin} />
      <Route path="/verifity/signuptwo" component={MyContentSignupTwo} />
      <Route path="/verifity/signup" component={MyContentSignup} />
      </Switch>
    
     )
   
    

  }
}



export  class MyContentPost extends React.Component {
  constructor(props) {
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

export class MyContentRequired extends React.Component {

  render() {

    return (

      <section className="section">
        <MyContentHeadRequired />
        <MyContentBodyRequired />
      </section>
    )
  }
}


export  class MyContentSignup extends React.Component {

  render() {
    return (

      <section className="section">
        <MyContentHeadSignup/>
        <MyContentBodySignup />
      </section>
    )
  }
}



class MyContentHeadRequired extends React.Component {
  render() {
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
        <VerifityPostRequired />
      </div>
    )
  }
}


class MyContentHeadSignup extends React.Component {
  render() {
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">SIGNUP</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <Link className="section__link" to ="/verifity/">Login</Link>
            </li>
            <li className="section__route">
              <Link className="section__link"to="/verifity/signup" >Signup</Link>
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
        <VerifitySignup  />
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

