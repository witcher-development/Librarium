const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const graphql = require('graphql');
const { ApolloServer, gql } = require('apollo-server-express');
const { PubSub } = require('apollo-server');
const { createHttpLink } = require('apollo-link-http');

// const pubsub = new PubSub();

const cors = require('cors');

// const {
// 	GraphQLObjectType,
// 	GraphQLString,
// 	GraphQLSchema,
// } = graphql;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello!');
})


// const RootQuery = new GraphQLObjectType({
// 	name: 'RootQueryType',
// 	fields: () => ({
// 		id: {
// 			type: GraphQLString,
// 			resolve() {
// 				return 'sgdffgfg';
// 			}
// 		},
// 	})
// });
//
// const schema = new GraphQLSchema({
// 	query: RootQuery,
// 	subscription:
// });
//
// app.use('/graphql', graphqlHTTP({
// 	schema,
// 	graphiql: true
// }));

// const typeDefs = gql`
// 	type Query {
// 		id: String
// 	}
// 	type Subscription {
// 		postAdded: String
// 	}
// `;
//
// const POST_ADDED = 'POST_ADDED';
//
// const resolvers = {
// 	Subscription: {
// 		postAdded: {
// 			// Additional event labels can be passed to asyncIterator creation
// 			subscribe: () => pubsub.asyncIterator([POST_ADDED]),
// 		},
// 	},
// 	Query: {
// 		id: () => 'sdfsdgdfg123',
// 	},
// };
//
// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// });

const httpLink = new createHttpLink({
	uri: '/graphql',
});
const wsLink = new WebSocketLink({
	uri: 'ws://localhost:3005/graphql',
	options: {
		reconnect: true
	},
});
const link = split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === 'OperationDefinition' && operation === 'subscription';
	},
	wsLink,
	httpLink,
);
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

server.applyMiddleware({ app });

app.listen(3005, () =>
	console.log(`🚀 Server ready at http://localhost:3005${server.graphqlPath}`)
);
