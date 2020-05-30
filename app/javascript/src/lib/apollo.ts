import {ApolloClient} from 'apollo-client';
import {BatchHttpLink} from 'apollo-link-batch-http';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {split} from 'apollo-link';
import ActionCable from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/dist/subscriptions/ActionCableLink';
import Rails from '@rails/ujs';

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
	let _client: ApolloClient<NormalizedCacheObject> | null = null;

	return (() => {
		if (_client) {
			return _client;
		}

		const cable = ActionCable.createConsumer();

		// HTTP connection to the API
		const httpLink = new BatchHttpLink({
		// You should use an absolute URL here
			uri: 'http://localhost:3000/graphql',
			batchMax: 50
		});

		const authLink = setContext((_, {headers}) => {
			return {
				headers: {
					...headers,
					'X-CSRF-TOKEN': Rails.csrfToken()
				}
			};
		});

		// Cache implementation
		const cache = new InMemoryCache();

		const hasSubscriptionOperation = ({query: {definitions}}: any) => {
			return definitions.some(
				({kind, operation}) => kind === 'OperationDefinition' && operation === 'subscription'
			);
		};

		const link = split(
			hasSubscriptionOperation,
			new ActionCableLink({cable}),
			authLink.concat(httpLink)
		);

		// Create the apollo client
		_client = new ApolloClient({
			link,
			cache
		});

		return _client;
	})();
}
