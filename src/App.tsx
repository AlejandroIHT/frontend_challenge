import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CharactersList from './screen/CharactersList';
import Layout from './ui/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <CharactersList />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
