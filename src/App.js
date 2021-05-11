import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/SignUp";

import CreateRoom from "./pages/createRoom";
import videoPlayerPage from "./pages/videoPlayerPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/auth/sign-in"}>
              HomeFlix
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/auth/sign-in"}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/auth/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/createRoom"}>
                    Create Room
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <Route path="/createRoom" component={CreateRoom} />
          <Route path="/live/play/" component={videoPlayerPage} />
          <Route path="/auth">
            <div className="inner">
              <Switch>
                <Route path="/auth/sign-in" component={Login} />
                <Route path="/auth/sign-up" component={SignUp} />
              </Switch>
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
