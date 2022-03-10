import React, { ChangeEvent, useState } from 'react';
import FilterContext, { FilterContextProps } from './FilterContext';

const FilterState: React.FC = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [statusValue, setStatusValue] = useState<string>('');
  const [genderValue, setGenderValue] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleClickStatus = (value: string) => {
    statusValue === value ? setStatusValue('') : setStatusValue(value);
  };

  const handleClickGender = (value: string) => {
    genderValue === value ? setGenderValue('') : setGenderValue(value);
  };

  const handleClickClearFilters = async () => {
    setStatusValue('');
    setGenderValue('');
  };

  const valueContext: FilterContextProps = {
    searchValue,
    statusValue,
    genderValue,
    handleSearch,
    handleClickStatus,
    handleClickGender,
    handleClickClearFilters,
  };

  return (
    <FilterContext.Provider value={valueContext}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterState;
