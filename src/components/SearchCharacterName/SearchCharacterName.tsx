import debounce from 'just-debounce-it';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import useCharacters from '../../hooks/useCharacters';
import SearchBar from '../../ui/SearchBar';

const SearchCharacterName = ({ className }: { className?: string }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { refetch, isFetching } = useCharacters({ nameParam: searchValue });

  const debouncedHandleNextPage = useCallback(
    debounce(() => !isFetching && refetch(), 1000),
    [isFetching, refetch]
  );

  useEffect(() => {
    debouncedHandleNextPage();
  }, [searchValue]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <SearchBar
      className={className}
      value={searchValue}
      onChange={handleSearch}
      isLoading={isFetching}
      placeholder="Search for name of character…"
    />
  );
};

export default SearchCharacterName;
