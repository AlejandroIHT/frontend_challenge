import React from 'react';
import './InformationWithIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InformationWithIconProps {
  icon: any;
  title: string;
  description: string;
}

const InformationWithIcon = ({
  icon,
  title,
  description,
}: InformationWithIconProps) => {
  return (
    <div className="information-with-icon">
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <p className="information-with-icon__data">
        <span>{title}: </span>
        {description}
      </p>
    </div>
  );
};

export default InformationWithIcon;
