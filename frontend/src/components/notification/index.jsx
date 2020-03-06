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
    <div role='alertdialog' className={`notification notification--${type}`} arialabeledby='notification__message'>
      <button autofocus className='notification__close' onClick={clear} aria-label='Dismiss'>&times;</button>
      <p className='notification__message' id='notification__message'>{message}</p>
    </div>
  );
}