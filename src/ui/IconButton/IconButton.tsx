import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import './IconButton.css';
import { IconButtonProps } from './IconButton.type';

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <button className={classNames('icon-button', className)} {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
