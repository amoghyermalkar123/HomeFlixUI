import React, { Component } from "react";
import "./createRoom.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { IconButton } from "@material-ui/core";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import FriendsPhoto from "../assets/Friends.png";

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      friendsSelected: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const handleDelete = () => {
      console.info("You clicked the delete icon.");
    };

    const handleSelection = (e) => {
      this.state.friendsSelected.push(e.target.value);
    };

    const onSubmitClicked = () => {
      console.log(this.state.friendsSelected);
    };

    return (
      <div>
        <div className="container1">
          <div class="card">
            <div class="card-body">
              <div className="grid">
                <div className="row">
                  <div className="col">
                    <div className="contents">
                      <div className="header">
                        <h1 className="card-title">Create Room</h1>
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <SupervisedUserCircleIcon />
                        </IconButton>
                      </div>
                      <hr></hr>
                      <div className="roomForm">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                        <br />
                        <div className="friends">
                          <div className="test">
                            List Of Friends
                            {this.state.posts.map((data) => {
                              return (
                                <li
                                  key={data.key}
                                  style={{
                                    listStyleType: "none",
                                    paddingLeft: "5px",
                                  }}
                                >
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value={data.title}
                                      id="flexCheckDefault"
                                      onChange={(e) => handleSelection(e)}
                                    />
                                    <p>{data.title}</p>
                                  </div>
                                </li>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="buttonGroups">
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{ margin: "5px" }}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={onSubmitClicked}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src={FriendsPhoto}
                      style={{ width: "50vw", height: "500px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
