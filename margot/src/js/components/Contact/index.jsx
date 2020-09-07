import "../../../sass/_contact/_index.scss";
// import MailForm from './MailForm';
import MessageForm from './MessageForm'
import React, { Component } from "react";

export default class index extends Component {

  render() {
    return (
      <div className="contactWrap">
        <div className="contactWrapHeader">
          <h1>Masz pytania? Szukasz pracownika?</h1>
          <span> Napisz do mnie wiadomość! </span>
        </div>

        <div className="contactWrapForm">
          <div className="space col-lg-1"></div>
          <div className="contactIMG col-lg-4">
            <img
              src="https://i.ibb.co/M6gYt60/question-small.png"
              alt="question-small"
            />
          </div>
           <MessageForm /> 
          <div className="space col-lg-1"></div>
        </div>
      </div>
    );
  }
}
