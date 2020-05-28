module.exports = {
	client: {
		service: {
			name: 'graphql-sandbox',
			url: 'http://localhost:3000/graphql'
		},
		includes: [
			'app/javascript/**/*.vue',
			'app/javascript/**/*.ts',
			'app/javascript/**/*.js'
		]
	}
};
