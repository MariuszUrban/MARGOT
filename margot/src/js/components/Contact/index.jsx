import "../../../sass/_contact/_index.scss";
import emailjs from "emailjs-com";

import React, { Component } from "react";

export default class index extends Component {

  sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "mail_service",
        "template_yngrepp",
        e.target,
        "user_TW6NNvRcLgA44h8jaLHXr"
      )
      .then(
        (result) => {
          console.log("result", result);
        },
        (error) => {
          console.log("error", error);
        }
      );   
  };

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
            />{" "}
          </div>
          <div className="contactFormMSG  col-lg-4">
            <form id="msg-form" className="msg-flex" onSubmit={this.sendMail}>
              <div className="inputs">
                <div className="single">
                  <div className="label">
                    <label>Imię</label>
                  </div>
                  <div className="input" >
                    <input name='name'/>
                  </div>
                </div>
                <div className="single">
                  <div className="label" >
                    <label>E-mail</label>
                  </div>
                  <div className="input">
                    <input type="email" name='email'/>
                  </div>
                </div>
              </div>
              <div className="message">
                <div className="messageTitle">
                  <label>Wiadomość</label>
                </div>
                <div className="messageInput">
                  
                  <textarea name='message'/>
                </div>
                <div className="messageBTN">
                  <button type='submit' form='msg-form'>Wyślij !</button>
                </div>
              </div>
            </form>
          </div>
          <div className="space col-lg-1"></div>
        </div>
      </div>
    );
  }
}
