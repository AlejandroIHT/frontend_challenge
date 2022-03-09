import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CharactersList from './screen/CharactersList';
import Layout from './components/Layout';
import ModalState from './context/ModalContext/ModalState';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalState>
        <Layout>
          <CharactersList />
        </Layout>
      </ModalState>
    </QueryClientProvider>
  );
}

export default App;
