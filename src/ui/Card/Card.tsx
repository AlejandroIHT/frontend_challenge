import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {
  BodyProps,
  CardProps,
  DescriptionProps,
  HeaderProps,
  ImageProps,
  MainInformationProps,
  MainTitleProps,
} from './Card.type';

const Header = ({ title, icon, status, className }: HeaderProps) => {
  return (
    <div className={classNames('card__header', className)}>
      <h6>{title}</h6>
      <p>
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        {status}
      </p>
    </div>
  );
};

const Body: React.FC<BodyProps> = ({ children, className }) => {
  return <div className={classNames('card__body', className)}>{children}</div>;
};

const MainInformation: React.FC<MainInformationProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames('card__main-information', className)}>
      {children}
    </div>
  );
};

const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className="card__wrapper-img">
      <img src={src} alt={alt} />
    </div>
  );
};

const MainTitle: React.FC<MainTitleProps> = ({ title, children }) => {
  return (
    <div className="card__main-title">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

const Description: React.FC<DescriptionProps> = ({ children, className }) => {
  return (
    <div className={classNames('card__description', className)}>{children}</div>
  );
};

const Card = ({ children, className }: CardProps) => {
  return <div className={classNames('card', className)}>{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.MainInformation = MainInformation;
Card.Image = Image;
Card.MainTitle = MainTitle;
Card.Description = Description;

export default Card;
