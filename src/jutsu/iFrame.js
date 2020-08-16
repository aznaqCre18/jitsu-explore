import React, { Component } from "react";
import { ContextType } from "../context";
import { Jutsu, useJitsi } from "react-jutsu";

export default class IFrame extends Component {
  static contextType = ContextType;

  render() {
    return this.context.onCall ? (
      <>
        <Jutsu
          domain="conf.umeetme.id"
          roomName={this.context.roomName}
          displayName={this.context.name}
          password={this.context.password}
          onMeetingEnd={() => (window.location.href = "http://localhost:3000")}
          loadingComponent={<p>loading ...</p>}
          containerStyles={{ height: "100vh", width: "100vw" }}
          userInfo={{
            displayName: this.context.name,
          }}
        />
      </>
    ) : null;
  }
}
