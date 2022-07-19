import React, { Component } from "react";

export default class Container extends Component {
  render() {
    console.log("this.props", this.props);
    return <div className="main__container">{this.props.children}</div>;
  }
}
