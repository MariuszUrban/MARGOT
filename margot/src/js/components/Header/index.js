import React, { Component } from "react";
import Name from "./Name";
import Title from "./Title";
import Navigation from "./Navigation";
import LangSwitchContainer from '../../components/LangSwitch/LangSwitchContainer'
import "../../../sass/_header/_index.scss";
import "../../../sass/utils/_all.scss";

export default class index extends Component {
  render() {
    return (
      <div className="headerWrap col-lg-12">
        <div className="row col-lg-1"></div>
        <div className=" NTwrap col-lg-4">
          <Name className="col-lg-4" />
          <Title className="col-lg-8" />
        </div>
        <div  className="row col-lg-1"></div>
        <div className="Nwrap col-lg-4">
          <Navigation />
        </div>
        <div className="Lwrap col-lg-2"><LangSwitchContainer /></div>
      </div>
    );
  }
}
