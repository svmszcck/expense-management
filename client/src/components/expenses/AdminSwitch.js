import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { switchAdmin } from '../../actions/commonActions';

class AdminSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      language: 'ENG',
      content: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.locale && nextProps.locale.language) {
      this.setState({
        language: nextProps.locale.language,
        content: nextProps.locale.content
      });
    }
  }
  switchToAdmin = (e, adminStatus) => {
    e.preventDefault();
    this.setState({ admin: adminStatus });
    this.props.switchAdmin(adminStatus);
  };
  render() {
    return (
      <div className="text-center">
        <button
          className={classnames('btn-sm mx-1', {
            'btn-secondary': this.state.admin,
            'btn-outline-secondary': !this.state.admin
          })}
          onClick={e => this.switchToAdmin(e, true)}
        >
          {this.state.content.employer}
        </button>
        <button
          className={classnames('btn-sm mx-1', {
            'btn-secondary': !this.state.admin,
            'btn-outline-secondary': this.state.admin
          })}
          onClick={e => this.switchToAdmin(e, false)}
        >
          {this.state.content.employee}
        </button>
      </div>
    );
  }
}

AdminSwitch.propTypes = {
  admin: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired,
  switchAdmin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  locale: state.locale,
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { switchAdmin }
)(AdminSwitch);
