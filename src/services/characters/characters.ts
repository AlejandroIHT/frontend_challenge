import { BASE_API_URL } from '../../utils/urls';

const charactersService =
  ({ nameParam }: { nameParam?: string | undefined }) =>
    async ({ pageParam = 1 }: { pageParam?: number | undefined }) => {
      const hasNameParem = nameParam ? `?name=${nameParam}` : '';
      const urlCharacters = `${BASE_API_URL}/character/?page=${pageParam}${hasNameParem}`;
      const response = await fetch(urlCharacters, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Something went wrong!');

      return response.json();
    };

export { charactersService };
