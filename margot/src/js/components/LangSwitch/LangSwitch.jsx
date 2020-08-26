import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { LANG_NAMES } from "../../../languages/translations";
import '../../../sass/_langSwitch/_langSwitch.scss';

export default class LangSwitch extends Component {


  
  render() {
    return (
      <div className="langWrap">
        {LANG_NAMES.map((language, i) => (
          <button
          className='langSwitchBTN'
            key={i}
            onClick={() => this.props.setLanguage(language.locale)}
          >
            <span>{language.name}</span>
          </button>
        ))}
      </div>
    );
  }
}

LangSwitch.propTypes = {
  locale: PropTypes.string.isRequired,
  setLanguage: PropTypes.func,
};
