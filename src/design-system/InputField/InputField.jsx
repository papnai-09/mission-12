import React from 'react';
import PropTypes from 'prop-types';

export const InputField = ({
  label,
  helperText,
  error,
  id,
  type = 'text',
  placeholder,
  value,
  disabled = false,
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  const descriptionId = `${inputId}-description`;
  const message = error || helperText;

  return (
    <label className="ds-field" htmlFor={inputId}>
      <span className="ds-field__label">{label}</span>
      <input
        id={inputId}
        className="ds-field__input"
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={message ? descriptionId : undefined}
        readOnly
      />
      {message && (
        <span
          id={descriptionId}
          className={error ? 'ds-field__message ds-field__message--error' : 'ds-field__message'}
        >
          {message}
        </span>
      )}
    </label>
  );
};

InputField.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'search']),
  value: PropTypes.string,
};
