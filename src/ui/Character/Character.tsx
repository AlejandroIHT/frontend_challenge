import {
  faCircleExclamation,
  faDisease,
  faDna,
  faLocationCrosshairs,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Character.css';
import Card from '../Card';
import InformationWithIcon from '../InformationWithIcon';
import Tag from '../Tag';
import { TagType } from '../Tag/Tag.type';
import { CharacterType } from '../../services/characters/characters.type';

const Character = ({
  name,
  status,
  species,
  type,
  origin,
  location,
  image,
  gender,
}: CharacterType) => {
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
            <Tag type={TagType.SECONDARY}>{gender}</Tag>
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
