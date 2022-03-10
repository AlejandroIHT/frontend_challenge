interface InfoResponseAPI {
  count: number,
  pages: number,
  next: null | string,
  prev: null | string,
}

interface OriginAndLocation {
  name: string,
  url: string
}

export interface CharacterType {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: OriginAndLocation,
  location: OriginAndLocation,
  image: string,
  episode: string[],
  url: string,
  created: string
}

export interface Characters {
  info: InfoResponseAPI,
  results: CharacterType[]
}

