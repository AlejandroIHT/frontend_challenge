import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <div className="header">
      <h4>
        Frontend-Challenge | <span>Rick&Morty</span>
      </h4>
      <SearchBar placeholder="Search for name of character…" />
    </div>
  );
};

export default Header;
