import classNames from 'classnames';
import React from 'react';
import './FilterButton.css';

interface FilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  className?: string;
}

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
