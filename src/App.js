import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./App.scss";
import { store } from "./store/storeFromRedux";
import { connect, Provider } from "react-redux";
import AccountSettings from "./components/accountsettings/accountsettings";
import Discover from "./components/discover/Didcover";
import AddContent from "./components/addcontent/addcontent";
import Footer from "./components/footer/Footer";
import Time from "./components/time/Time";
import avatarIMG from "./img/login/avatar.png";
import { PrivateRoute } from "./PrivateRoute";

//images for Sidebar
import SearchIMG from "./img/sidebar/magnifying-glass.png";
import ChemistryIMG from "./img/sidebar/chemistry.png";
import SettingsIMG from "./img/sidebar/settings.png";
import PostIMG from "./img/sidebar/post.png";
import PostSIMG from "./img/sidebar/post-it.png";
import { GOOUT } from "./store/registrationReduser";
import {
  MyContentPost,
  MyContentRequired,
  Verifity,
} from "./components/mycontent/MyContent";
import { MyContentCreatePost } from "./components/mycontent/Post/CreatePost";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      disabled: true,
    };
  }

  toggleBurger = () => {
    if (this.state.visible === true) {
      this.setState({ visible: false });
      console.log(this.state.visible);
    } else {
      this.setState({ visible: true });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar visible={this.state.visible} />
          <Provider store={store}>
            <ContainerOfMain
              toggleBurger={this.toggleBurger}
              visible={this.state.visible}
            />
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

class Sidebar extends React.Component {
  render() {
    return (
      <aside
        className={this.props.visible === true ? "sidebar" : "sidebar off"}
      >
        <div className="sidebar__brand">
          <img
            src="./img/logo/Upvoted.io@1x (1).png"
            alt=""
            className="sidebar__logo"
          />
        </div>
        <button className="sidebar__btn" disabled={this.props.disabled}>
          +NEW POST
        </button>
        <nav className="sidebar__navigation">
          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={PostSIMG} alt="" />{" "}
            <Link to="/" className="sidebar__route">
              MY CONTENT
            </Link>
          </li>

          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={SettingsIMG} alt="" />
            <Link to="/myposts" className="sidebar__route">
              MY POSTS
            </Link>
          </li>

          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={SettingsIMG} alt="" />
            <Link to="/createposts" className="sidebar__route">
              CREATE POSTS
            </Link>
          </li>

          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={PostIMG} alt="" />
            <Link to="/addcontent" className="sidebar__route">
              POSTS
            </Link>
          </li>

          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={SearchIMG} alt="" />
            <Link to="/discover" className="sidebar__route">
              DISCOVER SUBREDDITS
            </Link>
          </li>

          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={ChemistryIMG} alt="" />
            <Link to="/time" className="sidebar__route">
              Find the best time
            </Link>
          </li>

          <li className="sidebar__navigation-item">
            <img className="sidebar__icon" src={SettingsIMG} alt="" />
            <Link to="/accountsettings" className="sidebar__route">
              ACCOUNT SETTINGS
            </Link>
          </li>
        </nav>
      </aside>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <button className="sidebar__burger" onClick={this.props.toggleBurger}>
          <span className="sidebar__burger-img"></span>
        </button>
        <div className="header__verifity">
          <ContainHeader />
        </div>
      </header>
    );
  }
}

class LoginLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: GOOUT,
    };
  }
  onClick = () => {
    this.props.dispatch(this.state);
  };

  render() {
    switch (this.props.verifity) {
      case false:
        return (
          <div className="heder__route">
            <Link to="/verifity/">login</Link> |{" "}
            <Link to="/verifity/signup">Signup </Link>{" "}
          </div>
        );
        break;
      case true:
        return (
          <div className="user">
            <img src={avatarIMG} alt="avatar" className="useravatar" />
            <h4 className="username"> {this.props.yourAcces.name} </h4>
            <button className="goout " onClick={this.onClick}>
              go out{" "}
            </button>
          </div>
        );
        break;

      default:
        break;
    }
  }
}

let mapStateToPropsHead = (state) => {
  return state;
};
let mapDispatchToPropsHead = (dispatch) => {
  return { dispatch: dispatch };
};
const ContainHeader = connect(
  mapStateToPropsHead,
  mapDispatchToPropsHead
)(LoginLink);

class InnerBlock extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={MyContentRequired} />
        <Route path="/verifity" component={Verifity} />
        <PrivateRoute path="/time" component={Time} store={this.props.store} />
        <PrivateRoute
          path="/discover"
          component={Discover}
          store={this.props.store}
        />
        <PrivateRoute
          path="/addcontent"
          component={AddContent}
          store={this.props.store}
        />
        <PrivateRoute
          path="/accountsettings"
          component={AccountSettings}
          store={this.props.store}
        />
        <PrivateRoute
          path="/myposts"
          component={MyContentPost}
          store={this.props.store}
        />
        <PrivateRoute
          path="/createposts"
          component={MyContentCreatePost}
          store={this.props.store}
        />
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header state={this.props} toggleBurger={this.props.toggleBurger} />
        <InnerBlock store={this.props} />

        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return state;
};

const ContainerOfMain = connect(mapStateToProps, null)(Main);
