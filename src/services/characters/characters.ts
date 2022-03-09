import { BASE_API_URL } from '../../utils/urls';

interface CharactersServiceProps {
  nameParam?: string | undefined;
  statusParam?: string | undefined;
  genderParam?: string | undefined;
}

const charactersService =
  ({ nameParam, statusParam, genderParam }: CharactersServiceProps) =>
  async ({ pageParam = 1 }: { pageParam?: number | undefined }) => {
    const hasNameParem = nameParam ? `&name=${nameParam}` : '';
    const hasStatusParem = statusParam ? `&status=${statusParam}` : '';
    const hasGenderParem = genderParam ? `&gender=${genderParam}` : '';
    const urlCharacters = `${BASE_API_URL}/character/?page=${pageParam}${hasNameParem}${hasStatusParem}${hasGenderParem}`;
    const response = await fetch(urlCharacters, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Something went wrong!');

    return response.json();
  };

export { charactersService };
