import React, { Component } from "react";
import { ContextType } from "../context";

export default class IFrame extends Component {
  static contextType = ContextType;

  componentDidMount() {
    if (window.JitsiMeetExternalAPI && this.context.onCall) {
      try {
        const domain = "localhost:8080";
        const options = {
          roomName: this.context.roomName,
          width: "100%",
          height: "100%",
          parentNode: document.getElementById("jitsi-container"),
          onLoad: <div>loading...</div>,
          noSSL: true,
          configOverwrite: {
            isTelAuthEnabled: false,
          },
          interfaceConfigOverwrite: {
            WATERMARK_IMAGE_PATH: "https://aznaqcre18.github.io/logo192.png",
            DEFAULT_REMOTE_DISPLAY_NAME: "Unset",
            // DEFAULT_LOGO_URL:
            //   "https://w7.pngwing.com/pngs/291/52/png-transparent-honkai-impact-3-%E5%B4%A9%E5%9D%8F3rd-mihoyo-anime-game-honkai-impact-game-manga-magenta.png",
            APP_NAME: "Aziz Nur",
            JITSI_WATERMARK_LINK: "http://aznaqcre18.github.io/",
            ETHERPAD_CONTROL : false
            // TOOLBAR_BUTTONS: ["microphone", "hangup", "setting", "etherpad"],
          },
        };

        const api = new window.JitsiMeetExternalAPI(domain, options);

        const videoConfJoined = () => {
          console.log("Local User Joined");
          api.executeCommand("displayName", this.context.name);
          api.executeCommand("email", this.context.email);
        }; // akan merubah display name pada saat masuk ke room

        const readyClose = () => {
          window.location.href = "http://localhost:3000";
          api.dispose();
        }; // akan di redirect ke localhost:3000 ketika meng end call

        // const emailChange = () => {
        //   alert("anda telah merubah email");
        // }; // akan muncul alert ketika partisipan mengubah emailnya

        const participantJoined = (event) => {
          console.log("SINI BROOOO", event.formattedDisplayName);
        }; //akan muncul laert ketika ada orang baru masuk ke room

        // const videoConferenceLeft = (roomName) => {
        //   // alert("ada orang kleuar nih dari", roomName);
        //   window.location.href = "http://localhost:3000";
        // }; // akan muncul alert ketika kita akan kluar room

        const participantLeft = (id) => {
          const participantId = id.id;
          console.log("IDNYA NIIH", participantId);

          // alert("keluar aja");
          window.location.href = "http://localhost:3000";
        }; //akan muncul alert jika ada seseorang yg keluar room

        const audioMuteStatusChanged = (muted) => {
          if (muted.muted) {
            alert("iya dimute");
          } // akan muncul alert ketika mic di mute oleh user
        };

        const participantRoleChanged = (event) => {
          if (event.role === "moderator") {
            api.executeCommand("toggleLobby", true);
          }
        };

        api.addEventListeners({
          videoConferenceJoined: videoConfJoined,
          readyToClose: readyClose,
          // emailChange: emailChange,
          participantJoined: participantJoined,
          // videoConferenceLeft: videoConferenceLeft,
          participantLeft: participantLeft,
          audioMuteStatusChanged: audioMuteStatusChanged,
          participantRoleChanged: participantRoleChanged,
        });
      } catch (error) {
        console.error("Failed to load Jitsi API", error);
      }
    }
  }

  render() {
    return this.context.onCall ? (
      <>
        <div style={{ width: "100vw", height: "100vh" }} id="jitsi-container" />
      </>
    ) : null;
  }
}
