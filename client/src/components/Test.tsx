import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const RootQuery = gql`
	{
		id
	}
`;

const Test: React.FC = (props) => {
	console.log(props);
	return (
		<div>
			<p>testst</p>
		</div>
	)
};

export default compose(
	graphql(RootQuery, { name: "data" }),
)(Test);
