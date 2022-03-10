import React, { ChangeEvent, createContext } from 'react';

export interface FilterContextProps {
  searchValue: string;
  statusValue: string;
  genderValue: string;
  handleSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  handleClickStatus: (value: string) => void;
  handleClickGender: (value: string) => void;
  handleClickClearFilters: () => void;
}

const FilterContext = createContext<FilterContextProps | null>(null);

export default FilterContext;