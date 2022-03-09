import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { charactersService } from '../services/characters/characters';
import { Characters } from '../services/characters/characters.type';

interface UseCharactesProps {
  nameParam?: string | undefined;
  statusParam?: string | undefined;
  genderParam?: string | undefined;
}

const useCharacters = ({
  nameParam,
  statusParam,
  genderParam,
}: UseCharactesProps) => {
  const getNextPageParam = (lastPage: Characters, pages: Characters[]) => {
    if (lastPage.info.next) {
      return pages.length + 1;
    }
    return false;
  };

  const charactersInformation: UseInfiniteQueryResult<any, unknown> =
    useInfiniteQuery(
      'CHARACTERS',
      charactersService({
        nameParam,
        statusParam,
        genderParam,
      }),
      {
        getNextPageParam,
      }
    );

  return { ...charactersInformation };
};

export default useCharacters;
