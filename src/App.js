import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Jutsu from "./jutsu/jutsu";
import IFrame from "./jutsu/iFrame";
import { ContextType } from "./context";

export default class App extends Component {
  static contextType = ContextType;

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Jutsu} />
        <Route path={`/${this.context.roomName}`} component={IFrame} />
      </BrowserRouter>
    );
  }
}
