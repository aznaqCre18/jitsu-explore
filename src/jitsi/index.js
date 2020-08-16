import React, { useState, useEffect } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function JitsiMeetComponent() {
  // const [loading, setLoading] = useState(false);
  // const [roomName, setRoomName] = useState("");
  // const [displayName, setDisplayName] = useState("");
  // const [onCall, setOnCall] = useState(false);

  return (
    <Consumer>
      {({ changeName, changeRoomName, handleOnCall, roomName }) => (
        <>
          <h1>Crate a Meeting</h1>
          <input
            type="text"
            placeholder="Room name"
            // value={roomName}
            onChange={changeRoomName}
          />
          <input
            type="text"
            placeholder="Your name"
            // value={displayName}
            onChange={changeName}
          />
          <Link to={`/${roomName}`}>
            <button onClick={handleOnCall}> Let&apos;s start!</button>
          </Link>
        </>
      )}
    </Consumer>
  );
}

export default JitsiMeetComponent;
