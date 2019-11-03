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
      <nav className="navbar navbar-expand-md navbar-dark myNavbar">
        <div className="container">
          <h3 className="text-white my-0">
            <img src={pleo} alt="pleo" className="img-fluid pleoIcon" />
          </h3>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-2">
              <AdminSwitch />
            </li>
            <li className="nav-item px-2">
              <Languages />
            </li>
          </ul>
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
