import React from 'react';
import './CharactersList.css';
import Character from '../../components/Character';
import useCharacters from '../../hooks/useCharacters';

const CharactersList = () => {
  return (
    <div className="characters-list">
      <h1>Characters List</h1>
      <div className="characters-list__wrapper">
        {/** Add list from API */}
        <Character
          name="Name"
          status="Status"
          species="Species"
          type="Type"
          origin={{ name: 'Origin', url: '' }}
          location={{ name: 'Location', url: '' }}
          image=""
        />
      </div>
    </div>
  );
};

export default CharactersList;
