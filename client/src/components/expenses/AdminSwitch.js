import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const AdminSwitch = ({ employer, switchToAdmin }) => {
  return (
    <div className="text-center">
      <button
        className={classnames('btn-sm mx-1', {
          'btn-secondary': employer,
          'btn-outline-secondary': !employer
        })}
        onClick={e => switchToAdmin(e, true)}
      >
        employer
      </button>
      <button
        className={classnames('btn-sm mx-1', {
          'btn-secondary': !employer,
          'btn-outline-secondary': employer
        })}
        onClick={e => switchToAdmin(e, false)}
      >
        employee
      </button>
    </div>
  );
};

AdminSwitch.propTypes = {
  employer: PropTypes.bool.isRequired,
  switchToAdmin: PropTypes.func.isRequired
};

export default AdminSwitch;
