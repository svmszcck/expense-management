import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import pleo from '../../pleo.svg';

import { switchAdmin, switchLanguage } from '../../actions/commonActions';

import AdminSwitch from '../expenses/AdminSwitch';
import Languages from '../expenses/Languages';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'ENG',
      admin: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.admin && nextProps.admin.admin) {
      this.setState({ admin: nextProps.admin.admin });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark myNavbar">
        <div className="container">
          <h3 className="my-0">
            <img src={pleo} alt="pleo" className="img-fluid pleoIcon" />
          </h3>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li className="nav-item px-2 my-2">
                <AdminSwitch />
              </li>
              <li className="nav-item px-2 my-2">
                <Languages />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  switchAdmin: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  admin: state.admin,
  locale: state.locale
});

export default connect(
  mapStateToProps,
  {
    switchAdmin,
    switchLanguage
  }
)(Navbar);
