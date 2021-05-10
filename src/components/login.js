import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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

    var submitLoginDetails = () => {
      console.log(this.state.email);
      console.log(this.state.password);
    };

    return (
      <form>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onInput={(e) => handleEmail(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onInput={(e) => handlePassword(e)}
          />
        </div>
        <br />
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
          </div>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={submitLoginDetails}
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
