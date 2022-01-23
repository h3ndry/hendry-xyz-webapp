
export const get = async ( { params } ) => {
	try {
		const base_url = process.env['BASE_URL'];
		const res = await fetch(`${base_url}posts?filters[slug][$eq]=${params.slug}`);

		const res_json = await res.json();

		// if(!res_json.data) {
		// 	throw { error: "error"	}
		// }

		return { status: 200, body: res_json };
	} catch (err) {
		return {
			status: 500,
			body: 'Internal server error'
		}
	}
};
