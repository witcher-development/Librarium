import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Test from './components/Test';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql'
});

const App: React.FC = () => {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Test />
        sadjgdfg
      </ApolloProvider>
    </div>
  );
};

export default App;
