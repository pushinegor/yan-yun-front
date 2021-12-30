import { getAccessToken } from "./access-token";

export const headers = {
	get authorization() {
		const token = getAccessToken();
		if (token) return `Bearer ${token}`;
		return "";
	},
};
