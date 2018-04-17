import React, { Component } from 'react';

const Button = ({
  children,
  type = 'button',
  loading,
  accessibilityLabel,
  disabled,
  onClick,
  className
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={accessibilityLabel}
      aria-busy={loading ? true : undefined}
      role={loading ? 'alert' : undefined}
      className={className}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
