import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useRef } from 'react';
import './SearchBar.css';

interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchBar = ({ placeholder, className, ...props }: SearchBarProps) => {
  return (
    <div className={classNames('search-bar', className)}>
      <label className="search-bar__label">
        <span className="search-bar__wrapper-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" placeholder={placeholder} {...props} />
      </label>
    </div>
  );
};

export default SearchBar;
