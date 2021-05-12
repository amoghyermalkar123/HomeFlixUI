import React, { Component, useState, useEffect } from "react";
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

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setFriendList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // const handleFriends = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       console.log(response);
  //       setFriendList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // handleFriends();
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
                    onChange={handleChange}
                    variant="fullWidth"
                  >
                    <Tab label="Friends" icon={<People />}>
                      <div className="friends">
                        List Of Friends
                        {friendList.map((data) => {
                          return (
                            <li
                              key={data.key}
                              style={{
                                listStyleType: "none",
                                paddingLeft: "5px",
                              }}
                            >
                              <p>{data.id}</p>
                            </li>
                          );
                        })}
                      </div>
                    </Tab>
                    <Tab label="Movie Info" icon={<Movie />}>
                      <div className="movieReview"></div>
                    </Tab>
                  </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                  <div className="friendsList">
                    {friendList.map((data) => {
                      return (
                        <li
                          key={data.key}
                          style={{
                            listStyleType: "none",
                            paddingLeft: "5px",
                          }}
                        >
                          <p>{data.id}</p>
                        </li>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Tab2
                </TabPanel>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
}
