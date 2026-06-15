import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
}) => (
  <button
    type={type}
    className={[
      'ds-button',
      `ds-button--${variant}`,
      `ds-button--${size}`,
      fullWidth ? 'ds-button--full' : '',
    ]
      .filter(Boolean)
      .join(' ')}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};
