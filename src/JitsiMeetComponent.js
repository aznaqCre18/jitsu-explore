import React, { useState, useEffect } from "react";
import ProgressComponent from "@material-ui/core/CircularProgress";
// import JitsiMeetExternalAPI from './component/'

function JitsiMeetComponent() {
  const [loading, setLoading] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [onCall, setOnCall] = useState(false);

  // function startConference() {
  //   try {
  //     const domain = "meet.jit.si";
  //     const options = {
  //       roomName: roomName,
  //       height: "100vh",
  //       width: "100vw",
  //       parentNode: document.getElementById("jitsi-container"),
  //     };

  //     const api = new window.JitsiMeetExternalAPI(domain, options);
  //     api.addEventListener("videoConferenceJoined", () => {
  //       console.log("Local User Joined");
  //       setLoading(false);
  //       api.executeCommand("displayName", displayName);
  //     });
  //   } catch (error) {
  //     console.error("Failed to load Jitsi API", error);
  //   }
  // }

  // useEffect(() => {
  //   // verify the JitsiMeetExternalAPI constructor is added to the global..
  //   if (window.JitsiMeetExternalAPI) startConference();
  //   else alert("Jitsi Meet API script not loaded");
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (roomName && displayName) {
      setOnCall(true);
    }
  };

  if (window.JitsiMeetExternalAPI && onCall) {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: roomName,
        height: "100vh",
        width: "100vw",
        parentNode: document.getElementById("jitsi-container"),
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand("displayName", displayName);
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  return onCall ? (
    <div id="container">
      <div style={{ height: "100vh" }} id="jitsi-container" />
    </div>
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
}

export default JitsiMeetComponent;
