import React from "react";
import './joinRoom.css';
import joinRoomImg from'../assets/joinRoom.svg'
export default function JoinRoom() {

  
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                

      <div class="inner " style={{ borderStyle: "" }}>
      <img class="svg1" src={joinRoomImg}></img>
        {/* <div class="card"> */}
          <div style={{ textAlign: "center", paddingLeft:"10px", display:"flex", flexDirection:"column" }}>
            
            <h2 >Hello There! </h2>
            <p>Enter Room ID:</p>


            <form action="/live/play" method="get" id="form1">

            <input type="text" id="txt1" required></input>
            <br />
           <button type="submit" class="btn btn-outline-primary" id="goBtn" style={{marginTop:"15px", marginRight:"5px", width:"100px",}}>Go</button>
          </form>
          </div>
        </div>
      </div>
    // </div>
  );
}
