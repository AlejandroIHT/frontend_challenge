import React from 'react';
import './Spinner.css';
import classNames from 'classnames';

const Spinner = ({ className }: { className?: string }) => {
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
