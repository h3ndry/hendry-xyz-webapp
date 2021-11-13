export async function get({ params, locals }) {
	// const { slug } = params;
	// const { article } = await api.get(`articles/${slug}`, locals.user && locals.user.token);

	return {
		body: params
	};
}

// export async function put(request) {
// 	console.log('put', request);
// }
