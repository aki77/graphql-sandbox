import Vue from 'vue';
import VueApollo from 'vue-apollo';
import registerCustomElement from '@sonicgarden/vue-custom-element-rails';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {split} from 'apollo-link';
import ActionCable from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/dist/subscriptions/ActionCableLink';
import Rails from '@rails/ujs';
import HelloWorld from '../components/HelloWorld.vue';
import ChatRoom from '../components/ChatRoom.vue';

export default function () {
	const cable = ActionCable.createConsumer();

	// HTTP connection to the API
	const httpLink = createHttpLink({
		// You should use an absolute URL here
		uri: 'http://localhost:3000/graphql'
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
	const apolloClient = new ApolloClient({
		link,
		cache
	});

	Vue.use(VueApollo);

	const apolloProvider = new VueApollo({
		defaultClient: apolloClient
	});

	registerCustomElement('hello-world', HelloWorld, {vueOptions: {apolloProvider}});
	registerCustomElement('chat-room', ChatRoom, {vueOptions: {apolloProvider}});
}
