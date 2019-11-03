import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { switchAdmin } from '../../actions/commonActions';

import AdminSwitch from '../expenses/AdminSwitch';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      admin: false
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.admin && nextProps.admin.admin) {
      this.setState({ admin: nextProps.admin.admin });
    }
  }

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
          <AdminSwitch
            admin={this.state.admin}
            switchToAdmin={this.switchToAdmin}
          />
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {};

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  {
    switchAdmin
  }
)(Navbar);
