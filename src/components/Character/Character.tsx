import {
  faCircleExclamation,
  faDisease,
  faDna,
  faLocationCrosshairs,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Character.css';
import Card from '../../ui/Card';
import InformationWithIcon from '../../ui/InformationWithIcon';
import Tag from '../../ui/Tag';
import { TagType } from '../../ui/Tag/Tag';
import { CharacterProps } from './Character.type';

const Character = ({
  name,
  status,
  species,
  type,
  origin,
  location,
  image,
}: CharacterProps) => {
  const sanitizedType = !!type ? type : 'unknown';

  return (
    <Card className="character">
      <Card.Header
        title="Status of character"
        icon={faCircleExclamation}
        status={status}
      />
      <Card.Body>
        <Card.MainInformation>
          <Card.Image src={image} alt={name} />
          <Card.MainTitle title={name}>
            <Tag type={TagType.SECONDARY}>{species}</Tag>
          </Card.MainTitle>
        </Card.MainInformation>
        <Card.Description>
          <InformationWithIcon
            icon={faDna}
            title="Type"
            description={sanitizedType}
          />
          <InformationWithIcon
            icon={faDisease}
            title="Origin"
            description={origin.name}
          />
          <InformationWithIcon
            icon={faLocationCrosshairs}
            title="Location"
            description={location.name}
          />
        </Card.Description>
      </Card.Body>
    </Card>
  );
};

export default Character;
