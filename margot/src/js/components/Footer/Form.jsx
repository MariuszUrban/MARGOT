import React from "react";
import "../../../sass/_footer/_consultation/_form.scss";


export default function Form(props) {
  console.log('form props', props)
  return (
    <div className="contactFormWrap">
    <div className='spaceForm' ></div>
      <div className="contactParagraph">
        <p>Umów kontakt mailowy lub telefoniczny.</p>
        <span>Odpowiem w ciągu 24 godzin.</span>
      </div>
      <div className='spaceForm'></div>
      <div className="contactForm">
        <form className="contactFlex" action="">
          <div className="formInputs">
            <div>
              <input type="text" placeholder='name'/>
            </div>
            <div>
              <input type="text" placeholder="E-Mail" />
            </div>
            <div>
              <input type="tel" placeholder="Telefon" />
            </div>
          </div>
          <div className="formButton">
            <button className="talkButton">
              <span>Porozmawiajmy !</span>
            </button>
          </div>
        </form>
      </div>
      <div className='spaceForm'></div>
      <div className='contactCloseText'>
      <div className='buttonWrap'>
      <button className='btnClose'><span>ZAMKNIJ</span></button>

      </div>
      </div>
      <div className='spaceForm'></div>
    </div>
  );
}
