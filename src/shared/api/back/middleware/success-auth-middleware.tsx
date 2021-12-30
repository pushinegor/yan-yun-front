import { LocalStorage } from "shared/lib";
import { ResponseContext } from "../_generated";

export const successAuthMiddleware = (
	accessTokenKey: string,
	refreshTokenKey: string,
	paths: string[],
	baseUrl: string
) => {
	return async (context: ResponseContext): Promise<Response | void> => {
		let url = context.url;

		if (url.startsWith(baseUrl)) {
			url = url.substring(baseUrl.length);
		}

		if (context.response.ok && paths.includes(url)) {
			const response = await context.response.json();
			LocalStorage.setItem(accessTokenKey, response.accessToken);
			LocalStorage.setItem(refreshTokenKey, response.refreshToken);
		}
	};
};
