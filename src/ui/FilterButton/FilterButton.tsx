import classNames from 'classnames';
import React from 'react';
import './FilterButton.css';
import { FilterButtonProps } from './FilterButton.type';

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  isActive,
  onClick,
  className,
  ...props
}) => {
  const hasActive = isActive && 'filter-button--active';
  return (
    <button
      className={classNames('filter-button', hasActive, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default FilterButton;
