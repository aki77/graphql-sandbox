import registerCustomElement from '@sonicgarden/vue-custom-element-rails';
import HelloWorld from '../components/HelloWorld.vue';

export default function () {
	registerCustomElement('hello-world', HelloWorld);
}
