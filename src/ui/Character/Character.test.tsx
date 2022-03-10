import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Character from './Character';
import { CharacterType } from '../../services/characters/characters.type';

const characterInformation = {
  name: 'name character',
  status: 'status',
  species: 'species',
  type: 'type',
  origin: {
    name: 'origin',
    url: '',
  },
  location: {
    name: 'location',
    url: '',
  },
  image: 'image',
  gender: 'gender',
} as CharacterType;

describe('Character', () => {
  test('should render', () => {
    const { container } = render(<Character {...characterInformation} />);
    expect(container.querySelector('.character')).toBeInTheDocument();
    expect(screen.getByText('name character')).toBeInTheDocument();
  });

  test('should render type', () => {
    render(<Character {...characterInformation} />);
    expect(screen.getByText('type')).toBeInTheDocument();
  });

  test('should render unknown type', () => {
    const characterWithoutType = { ...characterInformation, type: '' };
    render(<Character {...characterWithoutType} />);
    expect(screen.getByText('unknown')).toBeInTheDocument();
  });
});
