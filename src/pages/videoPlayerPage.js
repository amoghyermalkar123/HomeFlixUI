import React, { Component } from "react";
import VideoPlayer from "./VideoPlayer";
import "./videoPlayerPage.css";

import SampleImg from "../assets/avatar.png";
import SampleImg2 from "../assets/avatar2.jpg";
import SampleImg3 from "../assets/avatar3.jpg";
import { Card, CardContent, Avatar } from "@material-ui/core";

export class videoPlayerPage extends Component {
  render() {
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
                  <h1>Participants</h1> <hr /> <br></br>
                  <Card id="usersLobbyCards">
                    <Avatar alt="Remy Sharp" src={SampleImg} />
                    <h2>Amogh Yermalkar</h2>
                  </Card>
                  <Card id="usersLobbyCards">
                    <Avatar alt="Remy Sharp" src={SampleImg} />
                    <h2>Keyur Bilgi</h2>
                  </Card>
                  <Card id="usersLobbyCards">
                    <Avatar alt="Remy Sharp" src={SampleImg} />
                    <h2>Samarth Dambalkar</h2>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default videoPlayerPage;
