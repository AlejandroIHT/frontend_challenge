import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import './SearchBar.css';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isLoading?: boolean;
}

const SearchBar = ({
  placeholder,
  isLoading,
  className,
  ...props
}: SearchBarProps) => {
  const isLoader = isLoading && 'search-bar__wrapper-icon--loading';

  return (
    <div className={classNames('search-bar', className)}>
      <label className="search-bar__label">
        <span className={classNames('search-bar__wrapper-icon', isLoader)}>
          {!isLoading && <FontAwesomeIcon icon={faMagnifyingGlass} />}
        </span>
        <input
          data-testid="input-search"
          type="text"
          placeholder={placeholder}
          {...props}
        />
      </label>
    </div>
  );
};

export default SearchBar;
