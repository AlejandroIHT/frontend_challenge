import classNames from 'classnames';
import React from 'react';
import './ActionButton.css';

export enum ActionButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  typeButton: ActionButtonType.primary | ActionButtonType.secondary;
}

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
