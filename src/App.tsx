import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Documents} from '@app/components/screens/Documents';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Documents />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
