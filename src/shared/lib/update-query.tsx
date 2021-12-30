import Router from "next/router";

export const updateQuery = async (
	query: Record<string, any>,
	options?: {
		shallow?: boolean;
		scroll?: boolean;
	}
) => {
	if (query.page === 1) {
		delete query["page"];
	}

	await Router.replace({ query: removeEmpty(query) }, undefined, { shallow: true, ...options });
};

const removeEmpty = (obj: Record<string, any>) => {
	const res = { ...obj };

	Object.keys(res).forEach((key) => {
		if (res[key] === undefined || res[key] === "" || res[key] !== res[key]) {
			delete res[key];
		}
	});

	return res;
};
