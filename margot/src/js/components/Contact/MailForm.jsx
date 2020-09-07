import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import "../../../sass/_contact/_mailForm.scss";

export default class MailForm extends Component {
  render() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
      await sleep(300);
      window.alert(JSON.stringify(values, 0, 2));
    };

    return (
      <div className="contactFormMSG  col-lg-4">
        <Form
          id="msg-form"
          className="msg-flex"
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Pole wymagane";
            }
            if (!values.email) {
              errors.email = "Pole wymagane";
            }
            if (!values.message) {
              errors.message = "Pole wymagane";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form id="msg-form" className="msg-flex" onSubmit={handleSubmit}>
              <div className="inputs">
                <Field name="name">
                  {({ input, meta }) => (
                    <div className="single">
                      <div className="label">
                        <label>Imię</label>
                      </div>

                      <div className="input">
                        <input {...input} type="text" />
                      </div>

                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="email">
                  {({ input, meta }) => (
                    <div className="single">
                      <div className="label">
                        <label>E-mail</label>
                      </div>
                      <div className="input">
                        <input {...input} type="email" />
                      </div>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>

              <Field name="message">
                {({ input, meta }) => (
                  <div className="message">
                    <div className="messageTitle">
                      <label>Wiadomość</label>
                    </div>
                    <div className="messageInput">
                      <textarea {...input} type="text" />
                    </div>

                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="messageBTN">
                <button type="submit" disabled={submitting} form="msg-form">
                  Wyślij !
                </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}
