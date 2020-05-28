import Vue from 'vue';
import VueApollo from 'vue-apollo';
import registerCustomElement from '@sonicgarden/vue-custom-element-rails';
import {getApolloClient} from './apollo';
import HelloWorld from '../components/HelloWorld.vue';
import ChatRoom from '../components/ChatRoom.vue';
import LikeCount from '../components/LikeCount.vue';

export default function () {
	Vue.use(VueApollo);

	const apolloProvider = new VueApollo({
		defaultClient: getApolloClient()
	});

	registerCustomElement('hello-world', HelloWorld, {vueOptions: {apolloProvider}});
	registerCustomElement('chat-room', ChatRoom, {vueOptions: {apolloProvider}});
	registerCustomElement('like-count', LikeCount);
}
