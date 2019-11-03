import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

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

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.admin && nextProps.admin.admin) {
      this.setState({ admin: nextProps.admin.admin });
    }
  }

  switchLanguage = (e, language) => {
    e.preventDefault();
    this.setState({ language: language });
    this.props.switchLanguage(language);
  };

  switchToAdmin = (e, adminStatus) => {
    e.preventDefault();
    this.setState({ admin: adminStatus });
    this.props.switchAdmin(adminStatus);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark myNavbar">
        <div className="container">
          <h3 className="text-white my-0">Pleo</h3>
          <Languages
            language={this.state.language}
            switchLanguage={this.switchLanguage}
          />
          <AdminSwitch
            admin={this.state.admin}
            switchToAdmin={this.switchToAdmin}
          />
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
