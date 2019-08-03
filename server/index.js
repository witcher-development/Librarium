const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const cors = require('cors');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
} = graphql;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello!');
})


const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve() {
				return 'sgdffgfg';
			}
		},
	})
});

const schema = new GraphQLSchema({
	query: RootQuery,
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(3005);
