import React from 'react';
import './Header.css';
import SearchCharacterName from '../../components/SearchCharacterName';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../IconButton';

const Header = () => {
  return (
    <div className="header">
      <h4>
        Frontend-Challenge | <span>Rick&Morty</span>
      </h4>
      <SearchCharacterName className="header__search" />
      <IconButton className="header_icon-button" icon={faFilter} />
    </div>
  );
};

export default Header;
