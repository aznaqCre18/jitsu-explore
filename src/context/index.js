import React, { Component } from "react";

let ContextType;
const { Provider, Consumer } = (ContextType = React.createContext());

class ContextProvider extends Component {
  state = {
    roomName: "",
    name: "",
    password: "",
    onCall: false,
    email: "",
  };

  changeRoomName = (event) => {
    this.setState({
      roomName: event.target.value,
    });
  };

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleOnCall = () => {
    this.setState({
      onCall: !this.state.onCall,
    });
  };

  render() {
    return (
      <div>
        <Provider
          value={{
            ...this.state,
            changeRoomName: this.changeRoomName,
            changeName: this.changeName,
            changeEmail: this.changeEmail,
            changePassword: this.changePassword,
            handleOnCall: this.handleOnCall,
          }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export { ContextProvider, ContextType, Consumer };
