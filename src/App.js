import React, {Component} from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./pages/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/boad-admin.component";
import ReadStory from "./container/ReadStory/readstory.component";
import FinishStory from "./stories/finishestory.component";
import WriteStory from "./stories/writestory.component";
import AddStory from "./components/addstory.component";
import Story from "./components/editstory.component"
import StoriesList from "./components/storylist.component";
import About from "./pages/about"
import Post from "./components/StoryPost"

import FileUpload from "./components/Fileupload";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
      showBoardUser:undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();


    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showUserBoard:user.roles.includes("ROLE_USER"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard, showUserBoard } = this.state;

    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Owie
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
              </div>
              {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/addstory"} className="nav-link">
                      Add Story
                    </Link>
                  </li>
              )}
              {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/storieslist"} className="nav-link">
                      Stories List
                    </Link>
                  </li>
              )}
              {showUserBoard && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
              )}
            </div>
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/readstory" component={ReadStory}/>
              <Route path="/finishstory" component={FinishStory} />
              <Route path="/writestory" component={WriteStory} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path="/AddStory" component={AddStory} />
              <Route exact path={["/","/storieslist"]} component={StoriesList} />
              <Route path="/story/:id" component={Story} />
              <Route path="/about/" component={About} />
              <Route path='/post/:id' component={Post}/>
              <Route path='/fileupload' component={FileUpload}/>
              <Route path='/post/:id' component ={Post}/>
            </Switch>
          </div>
        </div>
    );
  }
}
export default App;
