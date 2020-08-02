import React, { useState } from "react";
import Jitsi from "react-jitsi";
// import Loader from "@material-ui/core/CircularProgress";

const JitsiEx = () => {
  const [displayName, setDisplayName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [onCall, setOnCall] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (roomName && displayName) {
      setOnCall(true);
    }
  };

  return onCall ? (
    <Jitsi
      domain="meet.jit.si"
      roomName={roomName}
      displayName={displayName}
      password={password}
      // loadingComponent={Loader}
      // onAPILoad={(JitsiMeetAPI) => console.log("Good Morning everyone!")}
      containerStyle={{ height: "100vh", width: "100vw" }}
    />
  ) : (
    <>
      <h1>Crate a Meeting</h1>
      <input
        type="text"
        placeholder="Room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <button onClick={handleClick}> Let&apos;s start!</button>
    </>
  );
};

export default JitsiEx;
