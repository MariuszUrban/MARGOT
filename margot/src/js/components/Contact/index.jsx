import React from "react";
import "../../../sass/_contact/_index.scss";

export default function index() {
  return (
    <div className="contactWrap">
      <div className="contactWrapHeader">
        <h1>
          Masz pytania? Szukasz pracownika?
        </h1>
        <span> Napisz do mnie wiadomość! </span>
      </div>

      <div className="contactWrapForm">
      <div className='space col-lg-1'></div>
        <div className="contactIMG col-lg-4">
          <img src="https://i.ibb.co/NZV0L7w/question.png" alt="question" />
        </div>
        <div  className='space col-lg-2'></div>
        <div className="contactFormMSG  col-lg-4">
          <form>
            <div className='inputs'>
              <label>Imię</label>
              <input />
              <label>E-Mail</label>
              <input />
            </div>
            <div className='message'>
              <label>Wiadomość</label>
              <input />
              <button>Wyślij</button>
            </div>
          </form>
        </div>
      <div  className='space col-lg-1'></div>
      </div>
    </div>
  );
}
