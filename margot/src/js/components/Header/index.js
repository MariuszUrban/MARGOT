import React, { Component } from "react";
import Name from "./Name";
import Title from "./Title";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "../../../sass/_header/_index.scss";
import "../../../sass/utils/_all.scss";

export default class index extends Component {
  render() {
    return (
      <div className="headerWrap col-lg-12">
        <div className=" NTwrap col-lg-4">
          <Name />
          <Title />
        </div>
        <div className="Lwrap col-lg-3">
          <Logo />
        </div>
        <div className="Nwrap col-lg-5">
          <Navigation />
        </div>
      </div>
    );
  }
}
