import React from 'react';
import classnames from 'classnames';
import './index.scss';

export default ({ id, type = 'text', label, icon, className, inputClassName }) => {
  const classes = classnames(
    'input-label',
    className
  );
  const inputClasses = classnames(
    'input',
    inputClassName
  );
  return (
    <label htmlFor={id} className={classes} aria-label={label}>
      {icon}
      <input type={type} placeholder={label} id={id} className={inputClasses} />
    </label>
  )
}