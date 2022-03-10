import React from 'react';
import './Spinner.css';
import classNames from 'classnames';
import { SpinnerProps } from './Spinner.type';

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={classNames('spinner', className)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
