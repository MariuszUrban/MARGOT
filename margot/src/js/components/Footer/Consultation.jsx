import React from "react";
import "../../../sass/_footer/_contact.scss";

export default function Contact() {
  return (
    <div className="contactWrap">
      <div className="contactText col-lg-5">
        <div className="contactHeader">
          <h1>Masz pytania? </h1>
        </div>
        <div className="contactParagraph">
          <p>Umów kontakt mailowy lub telefoniczny.</p>
          <span>Odpowiem w ciągu 24 godzin.</span>
        </div>
      </div>
      <div className="contactForm col-lg-7">
        <form className="contactFlex" action="">
          <div className="formInputs col-lg-6">
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

          <div className="formButton col-lg-6">
            <button className="talkButton">
              <span>Porozmawiajmy</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
