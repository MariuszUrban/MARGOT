import '../../../sass/_footer/_form.scss';
import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class Form extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.hideForm();
  };

  sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "template_tmlvs4ZI",
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
      <div className="contactFormWrap">
        <div className="spaceForm"></div>
        <div className="contactParagraph col-lg-3">
          <p>Umów kontakt mailowy lub telefoniczny.</p>
          <span>Odpowiem w ciągu 24 godzin.</span>
        </div>
        <div className="spaceForm"></div>
        <div className="contactForm col-lg-5">
          <form
            id="contact-form"
            className="contactFlex"
            onSubmit={this.sendMail}
          >
            <div className="formInputs">
              <div className="inputWrap">
                <label>Imię</label>
                <input type="text" name="name" />
              </div>
              <div className="inputWrap">
                <label>E-Mail</label>
                <input type="text" name="mail" />
              </div>
              <div className="inputWrap">
                <label>Telefon</label>
                <input type="tel" name="phone" />
              </div>
            </div>
            <div className="spaceForm"></div>
            <div className="formButton">
              <input
                className="talkButton"
                type="submit"
                value="Porozmawiajmy !"
              />
            </div>
          </form>
        </div>
        <div className="spaceForm"></div>
        <div className="contactCloseText col-lg-2">
          <div className="buttonWrap">
            <button onClick={this.handleClick} className="btnClose">
              <span>ZAMKNIJ</span>
            </button>
          </div>
        </div>
        <div className="spaceForm"></div>
      </div>
    );
  }
}
