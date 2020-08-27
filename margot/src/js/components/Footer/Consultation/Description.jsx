import React from "react";
import "../../../../sass/_footer/_consultation/_description.scss";

export default function Contact() {
  return (
      <div className="contactText">
        <div className="contactHeader">
          <h1>Masz pytania? </h1>
        </div>
        <div className="contactParagraph">
          <p>Umów kontakt mailowy lub telefoniczny.</p>
          <span>Odpowiem w ciągu 24 godzin.</span>
        </div>
      </div>
  );
}
