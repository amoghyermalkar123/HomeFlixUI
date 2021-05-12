import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import history from "../history";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  render() {
    var handleName = (event) => {
      this.setState({ name: event.target.value });
    };

    var handleEmail = (event) => {
      this.setState({ email: event.target.value });
    };

    var handlePassword = (event) => {
      this.setState({ password: event.target.value });
    };

    var submitRegistrationDetails = (e) => {
      e.preventDefault();
      axios
        .post("http://c5cb9ec61ae5.ngrok.io/registration/", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        })
        .then(
          (response) => {
            console.log(response);
            history.replace("/live/play/");
          },
          (error) => {
            console.log(error);
          }
        );
    };

    return (
      <form>
        <h3>Register</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => handleName(e)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => handleEmail(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => handlePassword(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={submitRegistrationDetails}
        >
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to={"/auth/sign-in"}>log in?</Link>
        </p>
      </form>
    );
  }
}
