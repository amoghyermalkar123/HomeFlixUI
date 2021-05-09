import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/SignUp";
import VideoPlayer from "./pages/VideoPlayer";

import SampleImg from "./assets/avatar.png";
import SampleImg2 from "./assets/avatar2.jpg";
import SampleImg3 from "./assets/avatar3.jpg";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
                    <div className="container">
                        <Link className="navbar-brand"
                            to={"/auth/sign-in"}>HomeFlix</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link"
                                        to={"/auth/sign-in"}>Sign in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                        to={"/auth/sign-up"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="outer">
                    <Route path="/auth">
                        <div className="inner">
                            <Switch>
                                <Route path="/auth/sign-in"
                                    component={Login}/>
                                <Route path="/auth/sign-up"
                                    component={SignUp}/>
                            </Switch>
                        </div>
                    </Route>

                    <Route path="/live">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <Route path='/live/play/'
                                        component={VideoPlayer}/>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row">
                                        <h6>Participants:</h6>

                                        <div class="card mb-3"
                                            style={
                                                {
                                                    maxWidth: "300px",
                                                    margin: "10px"
                                                }
                                        }>
                                            <div class="row no-gutters">
                                                <div class="col-md-2">
                                                    <img src={SampleImg}
                                                        class="avatar"/>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="card-body">
                                                        <h6 class="card-title">Amogh Yermalkar</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="card mb-3"
                                            style={
                                                {
                                                    maxWidth: "300px",
                                                    margin: "10px"
                                                }
                                        }>
                                            <div class="row no-gutters">
                                                <div class="col-md-2">
                                                    <img src={SampleImg2}
                                                        class="avatar"
                                                        style={
                                                            {
                                                                width: "48px",
                                                                height: "48px",
                                                                margin: "2px"
                                                            }
                                                        }/>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="card-body">
                                                        <h6 class="card-title">Keyur Belgi</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="card mb-3"
                                            style={
                                                {
                                                    maxWidth: "300px",
                                                    margin: "10px"
                                                }
                                        }>
                                            <div class="row no-gutters">
                                                <div class="col-md-2">
                                                    <img src={SampleImg3}
                                                        class="avatar"/>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="card-body">
                                                        <h6 class="card-title">Samarth Dambalkar</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Route>

                </div>

            </div>
        </Router>
    );
}

export default App;
