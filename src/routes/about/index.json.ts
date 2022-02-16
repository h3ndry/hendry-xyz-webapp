export const get = async () => {
	{
		try {
			const base_url = process.env['BASE_URL'];
			const res = await fetch(`${base_url}about-page`);

			const res_json = await res.json();

			// if(!res_json.data) {
			// 	throw { error: "error"	}
			// }
            // Hey I want to test
            // this is crazy
            // YOh

			return { status: 200, body: res_json };
		} catch (err) {
			return {
				status: 500,
				body: 'Internal server error'
			};
		}
	}
};
