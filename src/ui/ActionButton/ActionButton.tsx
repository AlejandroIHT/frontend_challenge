import classNames from 'classnames';
import React from 'react';
import './ActionButton.css';
import { ActionButtonProps } from './ActionButton.type';

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  className,
  typeButton,
  onClick,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'action-button',
        `action-button--${typeButton}`,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
