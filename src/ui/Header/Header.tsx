import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <div className="header">
      <h4>
        Frontend-Challenge | <span>Rick&Morty</span>
      </h4>
      <SearchBar placeholder="Busca por nombre del personaje…" />
    </div>
  );
};

export default Header;
