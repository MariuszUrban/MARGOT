import React from "react";
import "../../../../sass/_footer/_consultation/_form.scss";

export default function Form() {
  return (
    <div className="contactFormWrap">
      <div className="contactForm">
        <form className="contactFlex" action="">
          <div className="formInputs col-lg-7">
            <div>
              <input type="text" placeholder="Imię" />
            </div>
            <div>
              <input type="text" placeholder="E-Mail" />
            </div>
            <div>
              <input type="tel" placeholder="Telefon" />
            </div>
          </div>

          <div className="formButton col-lg-4">
            <button className="talkButton">
              <span>Porozmawiajmy !</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
