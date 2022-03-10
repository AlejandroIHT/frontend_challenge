import debounce from 'just-debounce-it';
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import useCharacters from '../../hooks/useCharacters';
import SearchBar from '../../ui/SearchBar';
import { SearchCharacterNameProps } from './SearchCharacterName.type';
import FilterContext from '../../context/FilterContext/FilterContext';

const SearchCharacterName = ({ className }: SearchCharacterNameProps) => {
  const filterActions = useContext(FilterContext);
  const { refetch, isFetching } = useCharacters({
    nameParam: filterActions?.searchValue,
    statusParam: filterActions?.statusValue,
    genderParam: filterActions?.genderValue,
  });

  const debouncedHandleNextPage = useCallback(
    debounce(() => !isFetching && refetch(), 1000),
    [isFetching, refetch]
  );

  useEffect(() => {
    debouncedHandleNextPage();
  }, [filterActions?.searchValue]);

  return (
    <SearchBar
      className={className}
      value={filterActions?.searchValue}
      onChange={filterActions?.handleSearch}
      isLoading={isFetching}
      placeholder="Search for name of character…"
    />
  );
};

export default SearchCharacterName;
