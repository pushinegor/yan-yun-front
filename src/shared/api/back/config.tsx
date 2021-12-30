import { Configuration } from "./_generated";
import { refreshTokenMiddleware, successAuthMiddleware } from "./middleware";
import { isBrowser, LocalStorage } from "shared/lib";

export const ACCESS_TOKEN_KEY = process.env.NEXT_PUBLIC_PROJECT_PREFIX + ":access-token";
export const REFRESH_TOKEN_KEY = process.env.NEXT_PUBLIC_PROJECT_PREFIX + ":refresh-token";

const baseConfig = {
	basePath: process.env.NEXT_PUBLIC_API_URL!,
};

const browserConfig = {
	...baseConfig,
	get accessToken() {
		return LocalStorage.getItem(ACCESS_TOKEN_KEY);
	},
	middleware: [
		{
			post: successAuthMiddleware(ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, ["/api/login"], baseConfig.basePath),
		},
		{
			post: refreshTokenMiddleware(
				ACCESS_TOKEN_KEY,
				REFRESH_TOKEN_KEY,
				baseConfig.basePath + "/api/refresh-access-token"
			),
		},
	],
};

const serverConfig = {
	...baseConfig,
	fetchApi: fetch,
};

export class BackApiConfig extends Configuration {
	constructor() {
		super(isBrowser() ? browserConfig : serverConfig);
	}
}
