import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactCountryFlag from "react-country-flag";

const Languages = ({ language, switchLanguage }) => {
  return (
    <div className="text-center">
      <button
        className={classnames('btn-sm mx-1', {
          'btn-secondary': language === 'ENG',
          'btn-outline-secondary': language !== 'ENG'
        })}
        onClick={e => switchLanguage(e, 'ENG')}
      >
        <ReactCountryFlag code="GB" />
      </button>
      <button
        className={classnames('btn-sm mx-1', {
          'btn-secondary': language === 'GER',
          'btn-outline-secondary': language !== 'GER'
        })}
        onClick={e => switchLanguage(e, 'GER')}
      >
        <ReactCountryFlag code="DE" />
      </button>
    </div>
  );
};

Languages.propTypes = {
  language: PropTypes.string.isRequired,
  switchLanguage: PropTypes.func.isRequired
};

export default Languages;
