import React, { useContext, useState } from 'react';
import './FilterModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import FilterButton from '../../ui/FilterButton';
import ActionButton from '../../ui/ActionButton';
import { ActionButtonType } from '../../ui/ActionButton/ActionButton.type';
import Modal from '../../ui/Modal';
import ModalContext from '../../context/ModalContext/ModalContext';
import useCharacters from '../../hooks/useCharacters';
import Spinner from '../../ui/Spinner';

const FilterModal = () => {
  const [statusValue, setStatusValue] = useState<string>('');
  const [genderValue, setGenderValue] = useState<string>('');

  const modalActions = useContext(ModalContext);
  const { refetch, isFetching } = useCharacters({
    statusParam: statusValue,
    genderParam: genderValue,
  });

  const handleClickStatus = (value: string) => {
    statusValue === value ? setStatusValue('') : setStatusValue(value);
  };

  const handleClickGender = (value: string) => {
    genderValue === value ? setGenderValue('') : setGenderValue(value);
  };

  const handleClickApplyFilters = async () => {
    await refetch();
    window.scrollTo(0, 0);
    modalActions?.closeModal();
  };

  const handleClickClearFilters = async () => {
    setStatusValue('');
    setGenderValue('');
  };

  const statusActiveButton = {
    ['alive']: statusValue === 'alive',
    ['dead']: statusValue === 'dead',
    ['unknown']: statusValue === 'unknown',
  };

  const genderActiveButton = {
    ['female']: genderValue === 'female',
    ['male']: genderValue === 'male',
    ['genderless']: genderValue === 'genderless',
    ['unknown']: genderValue === 'unknown',
  };

  return (
    <Modal isOpen={modalActions?.isOpen || false}>
      <div className="filter-modal">
        <div className="filter-modal__header">
          <h1>Filter by</h1>
          <button onClick={modalActions?.closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div className="filter-modal__body">
          <div className="filter-modal__element">
            <h3>Status</h3>
            <div>
              {Object.entries(statusActiveButton).map(
                ([statusCharacter, status]) => (
                  <FilterButton
                    key={statusCharacter}
                    onClick={() => handleClickStatus(statusCharacter)}
                    isActive={status}
                    data-testid="status-button"
                  >
                    {statusCharacter}
                  </FilterButton>
                )
              )}
            </div>
          </div>
          <div className="filter-modal__element">
            <h3>Gender</h3>
            <div>
              {Object.entries(genderActiveButton).map(([gender, status]) => (
                <FilterButton
                  key={gender}
                  onClick={() => handleClickGender(gender)}
                  isActive={status}
                  data-testid="gender-button"
                >
                  {gender}
                </FilterButton>
              ))}
            </div>
          </div>
          {isFetching && (
            <div className="filter-modal__spinner">
              <Spinner />
            </div>
          )}
          <div className="filter-modal__actions">
            <ActionButton
              typeButton={ActionButtonType.PRIMARY}
              onClick={handleClickApplyFilters}
            >
              Apply filter
            </ActionButton>
            <ActionButton
              typeButton={ActionButtonType.SECONDARY}
              onClick={handleClickClearFilters}
            >
              Clear filter
            </ActionButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
