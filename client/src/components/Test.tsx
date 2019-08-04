import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { useQuery, useSubscription } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const RootQuery = gql`
	{
		id
	}
`;

const NEW_MESSAGES_COUNT_CHANGED_SUBSCRIPTION = gql`
	subscription postAdded {
		test
	}
`;

interface TestI {
	id: string;
}

const Test: React.FC = () => {
	const { data, error, loading } = useSubscription(
		NEW_MESSAGES_COUNT_CHANGED_SUBSCRIPTION
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error! {error.message}</div>;
	}

	if (!data) {
		return <div>Empty</div>;
	}

	return <div>{data.newMessagesCount} new messages</div>;
};

// export default compose(
// 	graphql(RootQuery, { name: "data" }),
// )(Test);
export default Test
