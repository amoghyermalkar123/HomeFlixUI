import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import history from "../history";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    var handleEmail = (event) => {
      this.setState({ email: event.target.value });
    };

    var handlePassword = (event) => {
      this.setState({ password: event.target.value });
    };

    var submitLoginDetails = (e) => {
      e.preventDefault();
      axios
        .post("http://03f4832eef56.ngrok.io/login/", {
          email: this.state.email,
          password: this.state.password,
        })
        .then(
          (response) => {
            console.log(response);
            localStorage.setItem("id", response.data.id);
            console.log(localStorage.getItem("id"));
            if (response.status == 200) {
              history.replace("/live/play/");
            }
          },
          (error) => {
            console.log(error);
          }
        );
    };

    return (
      <form>
        <h3>Log in</h3>
        <div className="form-group">
          <label>Email</label> <br />
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => handleEmail(e)}
          />
        </div>{" "}
        <br />
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => handlePassword(e)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={(e) => submitLoginDetails(e)}
        >
          Sign in
        </button>
        <p className="forgot-password text-right">
          Forgot
          <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
