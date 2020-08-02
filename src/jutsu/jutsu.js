import React, { useState } from "react";

import Input from "./component/Input/input";
import "./style.scss";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Consumer>
      {({
        changeName,
        changeRoomName,
        changePassword,
        handleOnCall,
        roomName,
      }) => (
        <div className="container-meet">
          <div className="title">
            <h2>
              Welcome To Our <br />{" "}
              <b style={{ color: "#7C00FF" }}>Online Meet Web</b> Application
            </h2>
          </div>
          <div className="forms">
            <h2>
              Start your <b style={{ color: "#7C00FF" }}>meeting</b> now
            </h2>
            <form>
              <Input
                label="room"
                type="text"
                placeholder="Room"
                onChange={changeRoomName}
              />
              <Input
                label="name"
                type="text"
                placeholder="Name"
                onChange={changeName}
              />
              <Input
                label="password"
                type="text"
                placeholder="Password (optional)"
                onChange={changePassword}
              />
              <Link to={`/${roomName}`}>
                <button type="submit" onClick={handleOnCall} className="button">
                  Start / Join
                </button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default App;
