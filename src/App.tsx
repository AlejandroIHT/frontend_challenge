import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CharactersList from './screen/CharactersList';
import Layout from './ui/Layout';
import ModalState from './context/ModalContext/ModalState';
import FilterState from './context/FilterContext/FilterState';

const queryClient = new QueryClient();
queryClient.invalidateQueries();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalState>
        <FilterState>
          <Layout>
            <CharactersList />
          </Layout>
        </FilterState>
      </ModalState>
    </QueryClientProvider>
  );
}

export default App;
