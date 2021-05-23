import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, {Component, Redirect} from 'react'
import history from "../history";
import './lobby.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function info() {
    cogoToast.info (
        <div>
            <p>your friends have joined, you will be directed to a room!</p>
        </div>
    )
}


var local = "http://localhost:4000/join_room/"
var ngrok = "http://daecea95f19e.ngrok.io/join_room/"


export class lobby extends Component {
    // this component gets props in this hierarchy
    /*    Room creator flow
        - video page :: passes video id to createRoom page
            - createRoom :: passes video id, auto-generated roomid to lobby 
                - lobby (current component) gets video, rooom id and current users email and the room creators id from local storage
                - final response is then sent to homeFlixServer.joinRoom endpoint
                - response is received with a url to a live stream once all the invited friends have joined
    */
    /*
        Friend flow 
        - get video id, room id, creator id from the invite notification 
        - get email id from the local storage that was set once login was 
        - succesfull
    */

    constructor(props) {
        super(props);

        this.state = {
            // haveFriendsJoined is set if all the friends the creator invited have joined
            // this response is received from the homeFlixServer.joinRoom endpoint
            haveFriendsJoined: false
        };
    }

    componentDidMount() { // call to homeFlixServer.joinRoom endpoint
        axios.post(ngrok, {
            creator: "roomCreatorID", // from invite notification
            email: "renuka@gmail.com", // from the local storage cookie
            video: "1278", // from invite notification
            room: "123" // from invite notification
        }).then((res) => {
            info()
            this.setState({haveFriendsJoined: true})
        }).catch((err) => {
            console.log("homeFlixServer.joinRoom", err)
            cogoToast.warn("failed to join room")
        })
    }

    render() {
        return (
            <div> {
                this.state.haveFriendsJoined ? (history.replace("/live/play")) : (
                    <div className="d-flex justify-content-center">
                        <div class="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p className = "typography" style={{marginTop:"26px", marginLeft:"20px"}}><b>Almost there</b>, waiting for your friends to join the room.</p>

                    </div>
                )
            } </div>
        )
    }
}

export default lobby
