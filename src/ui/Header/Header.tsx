import React from 'react';
import './Header.css';
import SearchCharacterName from '../../components/SearchCharacterName';

const Header = () => {
  return (
    <div className="header">
      <h4>
        Frontend-Challenge | <span>Rick&Morty</span>
      </h4>
      <SearchCharacterName />
    </div>
  );
};

export default Header;
