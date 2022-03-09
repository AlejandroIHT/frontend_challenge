import React from 'react';
import './FilterModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import FilterButton from '../../ui/FilterButton';
import ActionButton from '../../ui/ActionButton';
import { ActionButtonType } from '../../ui/ActionButton/ActionButton';

const FilterModal = () => {
  return (
    <div className="filter-modal">
      <div className="filter-modal__header">
        <h1>Filter Modal</h1>
        <button>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
      <div className="filter-modal__body">
        <div className="filter-modal__element">
          <h3>To status</h3>
          <div>
            <FilterButton>Alive</FilterButton>
            <FilterButton>Dead</FilterButton>
            <FilterButton>Unknown</FilterButton>
          </div>
        </div>
        <div className="filter-modal__element">
          <h3>To gender</h3>
          <div>
            <FilterButton>Female</FilterButton>
            <FilterButton>Male</FilterButton>
            <FilterButton>Genderless</FilterButton>
            <FilterButton>Unknown</FilterButton>
          </div>
        </div>
        <div className="filter-modal__actions">
          <ActionButton typeButton={ActionButtonType.PRIMARY}>
            Apply filter
          </ActionButton>
          <ActionButton typeButton={ActionButtonType.SECONDARY}>
            Clear filter
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
