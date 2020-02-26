import React from 'react';
import './index.scss';

export const NotificationTypes = {
  ERROR: 'error',
  INFO: 'info'
};

export default ({ isVisible = false, type = NotificationTypes.INFO, message, clear }) => {
  if (!isVisible) {
    return false;
  }
  return (
    <div className={`notification notification--${type}`}>
      <button className='notification__close' onClick={clear} aria-label='Dismiss'>&times;</button>
      <p className='notification__message'>{message}</p>
    </div>
  );
}