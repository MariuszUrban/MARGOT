import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { LANG_NAMES } from "../../../languages/translations";

export default class LangSwitch extends Component {
  render() {
    return (
      <div className="langWrap">
        {LANG_NAMES.map((language, i) => (
          <button
            style={{
              fontWeight: this.props.locale === language.locale ? "bold" : "",
            }}
            onClick={() => this.props.setLanguage(language.locale)}
          >
            <spaan>{language.name}</spaan>
          </button>
        ))}
      </div>
    );
  }
}

LangSwitch.propTypes = {
    locale: PropTypes.string.isRequired,
    setLanguage: React.PropTypes.func,
  };