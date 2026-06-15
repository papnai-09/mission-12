import React from 'react';
import PropTypes from 'prop-types';

const getFieldId = (id, label) =>
  id || label.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

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
  const inputId = getFieldId(id, label);
  const descriptionId = `${inputId}-description`;
  const supportMessage = error || helperText;
  const messageClassName = error
    ? 'ds-field__message ds-field__message--error'
    : 'ds-field__message';

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
        aria-describedby={supportMessage ? descriptionId : undefined}
        readOnly
      />
      {supportMessage && (
        <span id={descriptionId} className={messageClassName}>
          {supportMessage}
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
