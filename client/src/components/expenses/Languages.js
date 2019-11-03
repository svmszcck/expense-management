import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactCountryFlag from 'react-country-flag';
import { connect } from 'react-redux';
import { switchLanguage } from '../../actions/commonActions';

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'ENG'
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.locale && nextProps.locale.language) {
      this.setState({
        language: nextProps.locale.language
      });
    }
  }
  switchLanguage = (e, language) => {
    e.preventDefault();
    this.setState({ language: language });
    this.props.switchLanguage(language);
  };
  render() {
    return (
      <div className="text-center">
        <button
          className={classnames('btn-sm mx-1', {
            'btn-secondary': this.state.language === 'ENG',
            'btn-outline-secondary': this.state.language !== 'ENG'
          })}
          onClick={e => this.switchLanguage(e, 'ENG')}
        >
          <ReactCountryFlag code="GB" />
        </button>
        <button
          className={classnames('btn-sm mx-1', {
            'btn-secondary': this.state.language === 'GER',
            'btn-outline-secondary': this.state.language !== 'GER'
          })}
          onClick={e => this.switchLanguage(e, 'GER')}
        >
          <ReactCountryFlag code="DE" />
        </button>
      </div>
    );
  }
}

Languages.propTypes = {
  locale: PropTypes.object.isRequired,
  switchLanguage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  locale: state.locale
});

export default connect(
  mapStateToProps,
  { switchLanguage }
)(Languages);
