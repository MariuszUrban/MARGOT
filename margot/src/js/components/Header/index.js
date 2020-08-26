import React, { Component } from "react";
import Name from "./Name";
import Title from "./Title";
import Navigation from "./Navigation";
import "../../../sass/_header/_index.scss";
import "../../../sass/utils/_all.scss";

export default class index extends Component {
  render() {
    return (
      <div className="headerWrap col-lg-12">
        <div className=" NTwrap col-lg-6">
          <Name  className='col-lg-4' />
          <Title  className='col-lg-8' />
        </div>
        
        <div className="Nwrap col-lg-6">
          <Navigation />
        </div>
      </div>
    );
  }
}
