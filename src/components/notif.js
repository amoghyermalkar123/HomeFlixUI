import React, {Component} from 'react'
import cogoToast from 'cogo-toast';

export class Ws extends Component {
    ws = new WebSocket('ws://localhost:8080/echo')

    componentDidMount() {
        this.ws.onopen = () => { // on connecting, do nothing but log it to the console
            console.log('connected')
            this.ws.send('ayermalkar99@gmail.com')

        }

        this.ws.onmessage = evt => { // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            cogoToast.success (
                <div>
                    <b>Room Creation Successfull</b>
                    <p>your friends have been successfully invited</p>
                </div>
            );
            console.log(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    render() {
        return (
            <div>
                Websocket comms
            </div>
        )
    }
}

export default Ws
