const env = process.env.NEXT_PUBLIC_DOMAIN;
export const API = {
	topPage: { 
		find: env + '/api/top-page/find',
		byAlias: env + '/api/top-page/byAlias/',
	},

	product: {
		find: env + '/api/product/find'
	},

	review: {
		createDemo: env + '/api/review/create-demo'
	},
	
};