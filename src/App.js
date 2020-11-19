import React, {Component} from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AuthService from "./services/auth.service";
import Login from "./components/Register/login/login.component";
import Register from "./components/Register/register.component";
import Home from "./Pages/Home/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/boad-admin.component";
import ReadStory from "./ReadStory/index";
import FinishStory from "./FinishStory";
import FinishStoryPost from './FinishStory/FinishStoryPost/FinishStoryPost'
import WriteStory from "./container/WritePost";
import AddStory from "./components/AddStory/addstory.component";
import StoriesList from "./components/StoryList/storylist.component";
import About from "./Pages/About/about";
import EditStory from "./components/EditStory/editstory.component";
import ReadStoryPost from "./ReadStory/ReadStoryPost/index"

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
              <Route exact path={["/","/storieslist"]} component={StoriesList} />
              <Route exact path="/addStory" component={AddStory} />
              <Route path="/readstory" component={ReadStory}/>
              <Route path="/readstorypost/:storyId" component={ReadStoryPost}/>
              <Route path="/finishstory" component={FinishStory} />
              <Route path="/finishstorypost/:storyId" component={FinishStoryPost}/>
              <Route path="/writestory" component={WriteStory} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path="/editstory/:id" component={EditStory}/>
              <Route path="/about/" component={About} />
            </Switch>
          </div>
        </div>


    );
  }
}
export default App;
