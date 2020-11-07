import React from 'react';
import { Route, Link, BrowserRouter, Redirect, Router } from 'react-router-dom';
import './App.scss';
import {store} from './store/storeFromRedux';
import { ADDUSER, GETACCES } from './store/registrationReduser';

import {connect, Provider} from 'react-redux'


import AccountSettings from './components/accountsettings/accountsettings';

import Discover from './components/discover/Didcover'

import MyContent from './components/mycontent/MyContent'

import AddContent from './components/addcontent/addcontent'

import Footer from './components/footer/Footer'


import Time from './components/time/Time'
import avatarIMG from './img/login/avatar.png'

import { PrivateRoute } from './PrivateRoute'



//images for Sidebar
import SearchIMG from './img/sidebar/magnifying-glass.png';
import ChemistryIMG from './img/sidebar/chemistry.png';
import SettingsIMG from './img/sidebar/settings.png';
import PostIMG from './img/sidebar/post.png';
import PostSIMG from './img/sidebar/post-it.png';


// import store from './store/store';













class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      disabled: true
    }
  }
 
  toggleBurger = () => {
    if (this.state.visible === true) {

      this.setState({ visible: false })
      console.log(this.state.visible)
    } else {
      this.setState({ visible: true })
    }
  }
  render() {
   
    return (
      <BrowserRouter>
        <div className="App">

          <Sidebar visible={this.state.visible} />
        <Provider store={store}>

    
        <ContainerOfMain/>
        </Provider>
         
          
         

          <button className="sidebar__burger" onClick={this.toggleBurger}>
            <span className="sidebar__burger-img" ></span>
          </button>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;



class Sidebar extends React.Component {


  render() {

    return (
      <aside className={this.props.visible === true ? "sidebar" : "sidebar off"}>
        <div className="sidebar__brand">


          <img src="./img/logo/Upvoted.io@1x (1).png" alt="" className="sidebar__logo" />
        </div>
        <button className="sidebar__btn" disabled={this.props.disabled} >+NEW POST</button>
        <nav className="sidebar__navigation">



          <li className='sidebar__navigation-item'   >
            <img className="sidebar__icon" src={PostSIMG} alt="" /> <Link to="/" className="sidebar__route">MY CONTENT</Link>
          </li>



          <li className='sidebar__navigation-item'  >
            <img className="sidebar__icon" src={PostIMG} alt="" /><Link to="/addcontent" className="sidebar__route">POSTS</Link>
          </li>


          <li className='sidebar__navigation-item'  >
            <img className="sidebar__icon" src={SearchIMG} alt="" /><Link to="/discover" className="sidebar__route" >DISCOVER SUBREDDITS</Link>
          </li>

          <li className='sidebar__navigation-item'  >
            <img className="sidebar__icon" src={ChemistryIMG} alt="" /><Link to="/time" className="sidebar__route">Find the
          best time</Link>
          </li>

          <li className='sidebar__navigation-item'  >
            <img className="sidebar__icon" src={SettingsIMG} alt="" /><Link to="/accountsettings" className="sidebar__route">ACCOUNT
          SETTINGS</Link>
          </li>

        </nav>
      </aside>
    )
  }
}
class Header extends React.Component {

  render() {
debugger
    return (
      <header className="header">
        <div className="header__verifity">
          <LoginLink state={this.props.state} />
        </div>
      </header>
    )

  }
}
class LoginLink extends React.Component {
  constructor(props) {


    super(props)

  }
  render() {


    switch (this.props.state.verifity) {
      case false:
        return <Link to="/mycontent" className="heder__route">login|Singup</Link>
        break;
      case true:
        return (
          <div className="user">
           <img src={avatarIMG} alt="avatar" className="useravatar" /> 
           {this.props.isFetching?  <h4 className="username"> loading yet </h4>
           :<h4 className="username"> {this.props.state.yourAcces.name} </h4>
            }
          
           </div>
        )
        break;


      default:
        break;
    }

  }
}





class Main extends React.Component {

  render() {

  
          
          return (
            <div className="main">
              <Header state={this.props}/>
              <Route exact path="/" component={MyContent} store={this.props} state={this.props}/>
              <PrivateRoute path="/time" component={Time} store={this.props}/>
              <PrivateRoute path="/discover" component={Discover} store={this.props}/>
              <PrivateRoute path="/addcontent" component={AddContent} store={this.props}/>
              <PrivateRoute path="/accountsettings" component={AccountSettings} store={this.props}/>
              <Footer />
            </div>
          )

  }
}

let mapStateToProps =(state)=>{

  return state
}
let mapDispatchToProps =(dispatch)=>{

  return {
    addUser : (formData)=>{
      dispatch({type:ADDUSER, data: formData })
    }
  } 
    
  
}
const ContainerOfMain =connect(mapStateToProps,mapDispatchToProps)(Main)
































































