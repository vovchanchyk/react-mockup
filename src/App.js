import React from 'react';
import {Route,Link,BrowserRouter} from 'react-router-dom';
import './App.scss';


import AccountSettings from './components/accountsettings/accountsettings';

import Discover from './components/discover/Didcover'

import MyContent from './components/mycontent/MyContent'

import AddContent from './components/addcontent/addcontent'

import Footer from './components/footer/Footer'


import Time from './components/time/Time'
import avatarIMG from './img/login/avatar.png'





//images for Sidebar
import SearchIMG from './img/sidebar/magnifying-glass.png';
import ChemistryIMG from './img/sidebar/chemistry.png';
import SettingsIMG from './img/sidebar/settings.png';
import PostIMG from './img/sidebar/post.png';
import PostSIMG from './img/sidebar/post-it.png';


import store from './store/store';
class  App extends React.Component {
  constructor(props){
    super(props)  
    this.state ={
      visible : true,
      disabled: true
    }
  }
 rerenderAllThree=()=>{
   store.verifity ?  this.setState({disabled : false}) : this.setState({disabled : true})  
 }
  toggleBurger=()=>{
    if(this.state.visible === true){

      this.setState({ visible: false })
      console.log(this.state.visible)
  }else{
      this.setState({ visible: true })
  }
  }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
  
        <Sidebar visible={this.state.visible} disabled={this.state.disabled}/>
        <Main store={store} rerender={this.rerenderAllThree}/>
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
        <nav className= "sidebar__navigation">



          <li className={this.props.disabled ? 'sidebar__navigation-item sidebar__navigation-item--disabled':'sidebar__navigation-item'}  >
            <img className="sidebar__icon" src={PostSIMG} alt="" /> <Link to={this.props.disabled ? "/#" : "/mycontent"} className="sidebar__route">MY CONTENT</Link>
          </li>



          <li className={this.props.disabled ? 'sidebar__navigation-item sidebar__navigation-item--disabled':'sidebar__navigation-item'}  >
            <img className="sidebar__icon" src={PostIMG} alt="" /><Link to= {this.props.disabled ? "/#" : "/addcontent"} className="sidebar__route">POSTS</Link>
          </li>


          <li className={this.props.disabled ? 'sidebar__navigation-item sidebar__navigation-item--disabled':'sidebar__navigation-item'}  >
            <img className="sidebar__icon" src={SearchIMG} alt="" /><Link to={this.props.disabled ? "/#" : "/discover"}
              className="sidebar__route" >DISCOVER SUBREDDITS</Link>
          </li>
          
          <li className={this.props.disabled ? 'sidebar__navigation-item sidebar__navigation-item--disabled':'sidebar__navigation-item'}  >
            <img className="sidebar__icon" src={ChemistryIMG} alt="" /><Link to={this.props.disabled ? "/#" : "/time" }  className="sidebar__route">Find the
          best time</Link>
          </li>
          
          <li className={this.props.disabled ? 'sidebar__navigation-item sidebar__navigation-item--disabled':'sidebar__navigation-item'}  >
            <img className="sidebar__icon" src={SettingsIMG} alt="" /><Link to={this.props.disabled ? "/#" : "/accountsettings"}  className="sidebar__route">ACCOUNT
          SETTINGS</Link>
          </li>
       
        </nav>
      </aside>
    )
  }
}



class Header extends React.Component {

  render() {

    return (
      <header className="header">
        <div className="header__verifity">
         <LoginLink store={this.props.store}/>
        </div>
      </header>
    )

  }
}
class LoginLink extends React.Component{
  constructor(props){
    
    super(props)
  
  }
  render(){

    switch (this.props.store.verifity) {
      case false:
        return  <Link to="/mycontent" className="heder__route">login|Singup</Link>
        break;
      case true:
    return   <div className="user"> <img src={avatarIMG} alt="avatar" className="useravatar"/> <h4 className="username">{this.props.store.yourAссess.name}</h4></div>
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
        <Header store={this.props.store}/>
        <Route exact path="/"  render={()=> <MyContent store={this.props.store} rerender={this.props.rerender}/>} />
         <Route exact path="/mycontent"  render={()=> <MyContent store={this.props.store} rerender={this.props.rerender}/>} />
         <Route path="/accountsettings"  render={()=> <AccountSettings/>} />
         <Route path="/time"  render={()=> <Time/>} /> 
         <Route path="/discover"  render={()=> <Discover/>} /> 
         <Route path="/addcontent"  render={()=> <AddContent/>} /> 
         <Footer/>
      </div>
    )

  }
}






























































