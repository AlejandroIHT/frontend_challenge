import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('should render', () => {
    render(<Card>Card</Card>);
    expect(screen.getByText('Card')).toBeInTheDocument();
  });

  test('should render with className', () => {
    render(<Card className="test">Card</Card>);
    expect(screen.getByText('Card')).toHaveClass('test');
  });

  test('should render with Header', () => {
    const { container } = render(
      <Card>
        <Card.Header
          title="Header"
          icon="icon"
          status="status"
          className="className"
        />
      </Card>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('status')).toBeInTheDocument();
    expect(container.querySelector('.className')).toBeInTheDocument();
  });

  test('should render with Body', () => {
    const { container } = render(
      <Card>
        <Card.Body className="className">Body</Card.Body>
      </Card>
    );
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(container.querySelector('.className')).toBeInTheDocument();
  });

  test('should render with MainInformation', () => {
    const { container } = render(
      <Card>
        <Card.MainInformation className="className">
          MainInformation
        </Card.MainInformation>
      </Card>
    );
    expect(screen.getByText('MainInformation')).toBeInTheDocument();
    expect(container.querySelector('.className')).toBeInTheDocument();
  });

  test('should render with Image', () => {
    const { container } = render(
      <Card>
        <Card.Image src="src" alt="alt" />
      </Card>
    );
    expect(container.querySelector('.card__wrapper-img')).toBeInTheDocument();
  });

  test('should render with MainTitle', () => {
    const { container } = render(
      <Card>
        <Card.MainTitle title="MainTitle">Children</Card.MainTitle>
      </Card>
    );
    expect(screen.getByText('MainTitle')).toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(container.querySelector('.card__main-title')).toBeInTheDocument();
  });

  test('should render with Description', () => {
    const { container } = render(
      <Card>
        <Card.Description className="className">Description</Card.Description>
      </Card>
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(container.querySelector('.className')).toBeInTheDocument();
  });
});
