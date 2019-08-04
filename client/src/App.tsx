import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import Test from './components/Test';

import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:3005/graphql'
});

// Create a WebSocket link:
const link = new WebSocketLink({
  uri: `ws://localhost:3005/graphql`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
});

const App: React.FC = () => {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Test />
        </ApolloHooksProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
