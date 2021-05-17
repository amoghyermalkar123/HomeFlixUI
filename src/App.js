import React, { Component, useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/SignUp";

import CreateRoom from "./pages/createRoom";
import videoPlayerPage from "./pages/videoPlayerPage";
import Ws from "./components/notif";

import axios from "axios";

import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function App() {
  const [open, setOpen] = React.useState(false);

  const [submitEmail, setSubmitEmail] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (e) => {
    setSubmitEmail(e.target.value);
  };

  const setFriendList = () => {
    console.log(localStorage.getItem("id"));
    console.log(submitEmail);
    axios
      .post("http://03f4832eef56.ngrok.io/addFriend/", {
        id: localStorage.getItem("id"),
        friendMail: submitEmail,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/auth/sign-in"}>
              HomeFlix
            </Link>
            <div className="d-flex flex-row-reverse" id="navbarTogglerDemo02">
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
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleClickOpen}>
                    Add Friends
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Friend</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter email address and refresh the page to get the updated
              list. Only one friend can be added at a time.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              onChange={(e) => handleEmail(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={setFriendList} color="primary">
              Add Friend
            </Button>
          </DialogActions>
        </Dialog>

        <div className="outer">
          {/* <Redirect from="/" to={"/auth/sign-in"} /> */}
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
          <Route path="/com">
                        <Ws/>
                    </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
