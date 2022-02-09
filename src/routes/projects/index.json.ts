export const get = async () => {
	try {
		const base_url = process.env['BASE_URL'];
		const res = await fetch(`${base_url}projects?populate=*&pagination[page]=1&pagination[pageSize]=10`);

		const res_json = await res.json();

		return { status: 200, body: res_json };
	} catch (err) {
		return {
			status: 500,
			body: 'Internal server error'
		}
	}
};
