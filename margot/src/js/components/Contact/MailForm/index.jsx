import React, { Component } from "react";
import Name from "./Name";

export default class index extends Component {
  componentWillMount() {
    console.log("this is called before render!");
  }

  componentDidMount() {
    this.service.getData().then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Name />
      </div>
    );
  }
}
