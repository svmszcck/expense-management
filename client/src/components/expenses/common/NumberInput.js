import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const NumberInput = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  onChange,
  disabled,
  extraClass,
  min,
  max
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="number"
        className={classnames(`form-control ${extraClass}`, {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  error: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  info: PropTypes.string,
  extraClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default NumberInput;
