import React, { Component } from "react";
import { Form, Field } from "react-final-form";

export default class MailForm extends Component {
  render() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
      await sleep(300);
      window.alert(JSON.stringify(values, 0, 2));
    };

    return (
      <div>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
            } 
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name">
                {({ input, meta }) => (
                  <div>
                    <label>Imię</label>
                    <input {...input} type="text" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label>E-Mail</label>
                    <input {...input} type="email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="message">
                {({ input, meta }) => (
                  <div>
                    <label>Wiadomość</label>
                    <textarea {...input} type="text"  />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
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
