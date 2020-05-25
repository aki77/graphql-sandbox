import Vue from 'vue';
import VueApollo from 'vue-apollo';
import registerCustomElement from '@sonicgarden/vue-custom-element-rails';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import Rails from '@rails/ujs';
import HelloWorld from '../components/HelloWorld.vue';

export default function () {
	// HTTP connection to the API
	const httpLink = createHttpLink({
		// You should use an absolute URL here
		uri: 'http://graphql-sandbox.test/graphql'
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

	// Create the apollo client
	const apolloClient = new ApolloClient({
		link: authLink.concat(httpLink),
		cache
	});

	Vue.use(VueApollo);

	const apolloProvider = new VueApollo({
		defaultClient: apolloClient
	});

	registerCustomElement('hello-world', HelloWorld, {vueOptions: {apolloProvider}});
}
