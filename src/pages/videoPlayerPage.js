import React, {Component, useState, useEffect} from "react";
import VideoPlayer from "./VideoPlayer";
import "./videoPlayerPage.css";
import axios from "axios";
import cogoToast from 'cogo-toast';

import People from "@material-ui/icons/People";
import Movie from "@material-ui/icons/Movie";

import {
    Card,
    CardContent,
    Avatar,
    AppBar,
    Paper,
    Tabs,
    Tab
} from "@material-ui/core";

function info() {
    cogoToast.success (
        <div>
            <h6>Welcome to your room</h6>
            <p>Your friends list can be seen on the right pane</p>
            <p>you can also watch the movie full screen</p>
        </div>
    )
}

export default function VideoPlayerPage({props}) {
    const [value, setValue] = React.useState(0);

    const [friendList, setFriendList] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // handleFriends();
    };

    useEffect(() => {
        info()
    })
    return (
        <div>
            <div className="cardPlayer">
                <Card style={
                    {
                        width: "100%",
                        height: "80vh"
                    }
                }>
                    <CardContent>
                        <div className="row">
                            <div className="col">
                                <div className="player">
                                    <VideoPlayer/>
                                </div>
                            </div>
                            <div className="col">
                                <Paper square>
                                    <Tabs value={value}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={handleChange}
                                        variant="fullWidth">
                                        <Tab label="Friends"
                                            icon={<People/>}>
                                            <div className="friends">
                                                List Of Friends {
                                                friendList.map((data) => {
                                                    return (
                                                        <li key={
                                                                data.key
                                                            }
                                                            style={
                                                                {
                                                                    listStyleType: "none",
                                                                    paddingLeft: "5px"
                                                                }
                                                        }>
                                                            <p>{
                                                                data.id
                                                            }</p>
                                                        </li>
                                                    );
                                                })
                                            } </div>
                                        </Tab>
                                        <Tab label="Movie Info"
                                            icon={<Movie/>}>
                                            <div className="movieReview"></div>
                                        </Tab>
                                    </Tabs>
                                </Paper>
                                <TabPanel value={value}
                                    index={0}>
                                    <div className="friendsList">
                                        {
                                        friendList.map((data) => {
                                            return (
                                                <li key={
                                                        data.key
                                                    }
                                                    style={
                                                        {
                                                            listStyleType: "none",
                                                            paddingLeft: "5px"
                                                        }
                                                }>
                                                    <p>{
                                                        data.id
                                                    }</p>
                                                </li>
                                            );
                                        })
                                    } </div>
                                </TabPanel>
                                <TabPanel value={value}
                                    index={1}>
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
    const {children, value, index} = props;
    return <div>{
        value === index && <p>{children}</p>
    }</div>;
}
