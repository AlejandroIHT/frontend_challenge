import React, { useContext } from 'react';
import './Header.css';
import SearchCharacterName from '../SearchCharacterName';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../ui/IconButton';
import ModalContext from '../../context/ModalContext/ModalContext';

const Header = () => {
  const modalActions = useContext(ModalContext);

  return (
    <div className="header">
      <h4>
        Frontend-Challenge | <span>Rick&Morty</span>
      </h4>
      <SearchCharacterName className="header__search" />
      <IconButton
        className="header_icon-button"
        icon={faFilter}
        onClick={modalActions?.openModal}
      />
    </div>
  );
};

export default Header;
