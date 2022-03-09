import React, { useCallback, useEffect, useRef } from 'react';
import './CharactersList.css';
import Character from '../../components/Character';
import useCharacters from '../../hooks/useCharacters';
import Spinner from '../../ui/Spinner';
import { Characters } from '../../services/characters/characters.type';
import useEndScreen from '../../hooks/useEndScreen';
import debounce from 'just-debounce-it';

const CharactersList = () => {
  const endScreenRef = useRef(null);
  const {
    data: charactersInfo,
    isLoading,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useCharacters({});
  const hasExternalRef = isLoading ? null : endScreenRef;
  const { endScreen } = useEndScreen({
    externalRef: hasExternalRef,
    once: false,
  });

  const debouncedHandleNextPage = useCallback(
    debounce(() => hasNextPage && fetchNextPage(), 250),
    [hasNextPage]
  );

  useEffect(() => {
    if (endScreen) debouncedHandleNextPage();
  }, [endScreen, debouncedHandleNextPage]);

  const showCharacters = !isLoading && !isError && !!charactersInfo;
  const showSpinner = isLoading || isFetching || isFetchingNextPage;

  return (
    <div className="characters-list">
      <h1>Characters List</h1>
      {showCharacters && (
        <div className="characters-list__wrapper">
          {charactersInfo?.pages?.map((page: Characters) =>
            page.results.map((character) => {
              const {
                name,
                status,
                species,
                type,
                origin,
                location,
                gender,
                image,
              } = character;
              return (
                <Character
                  key={character.id}
                  name={name}
                  status={status}
                  species={species}
                  type={type}
                  origin={origin}
                  location={location}
                  image={image}
                  gender={gender}
                />
              );
            })
          )}
        </div>
      )}
      {showSpinner && (
        <div className="characters-list__spinner">
          <Spinner />
        </div>
      )}
      {isError && (
        <div className="characters-list__error">
          <h2>Something went wrong! Please try again later. 🥺</h2>
        </div>
      )}
      <div ref={endScreenRef}></div>
    </div>
  );
};

export default CharactersList;
