import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { charactersService } from '../services/characters/characters';
import { Characters } from '../services/characters/characters.type';

const useCharacters = (nameParam?: string | undefined) => {
  const getNextPageParam = (lastPage: Characters, pages: Characters[]) => {
    console.log({ lastPage, pages });
    if (lastPage.info.next) {
      return pages.length + 1;
    }
    return false;
  };

  const charactersInformation: UseInfiniteQueryResult<any, unknown> =
    useInfiniteQuery('CHARACTERS', charactersService({ nameParam }), {
      getNextPageParam,
    });

  return { ...charactersInformation };
};

export default useCharacters;
