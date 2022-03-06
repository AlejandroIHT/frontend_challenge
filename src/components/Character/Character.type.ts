interface OriginCharacter {
  name: string;
  url: string;
}

type LocationCharacter = OriginCharacter;

export interface CharacterProps {
  name: string;
  status: string;
  species: string;
  type: string;
  origin: OriginCharacter;
  location: LocationCharacter;
  image: string;
}