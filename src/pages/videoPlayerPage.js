import React, { Component } from "react";
import VideoPlayer from "./VideoPlayer";
import "./videoPlayerPage.css";
import axios from "axios";

import SampleImg from "../assets/avatar.png";
import SampleImg2 from "../assets/avatar2.jpg";
import SampleImg3 from "../assets/avatar3.jpg";

import People from "@material-ui/icons/People";
import Movie from "@material-ui/icons/Movie";
import Message from "@material-ui/icons/Message";

import {
  Card,
  CardContent,
  Avatar,
  AppBar,
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";

export default function VideoPlayerPage() {
  const [value, setValue] = React.useState(0);

  const [friendList, setFriendList] = React.useState([]);

  const handleFriends = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setFriendList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="cardPlayer">
        <Card style={{ width: "100%", height: "80vh" }}>
          <CardContent>
            <div className="row">
              <div className="col">
                <div className="player">
                  <VideoPlayer />
                </div>
              </div>
              <div className="col">
                <Paper square>
                  <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(e) => handleChange(e)}
                  >
                    <Tab label="Friends" icon={<People />}>
                      <div className="friends"></div>
                    </Tab>
                    <Tab label="Movie Info" icon={<Movie />}>
                      <div className="movieReview"></div>
                    </Tab>
                    <Tab label="Messages(Coming Soon)" icon={<Message />}>
                      <div className="messages"></div>
                    </Tab>
                  </Tabs>
                </Paper>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
