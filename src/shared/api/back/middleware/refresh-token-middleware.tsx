import { LocalStorage } from "shared/lib";
import { FetchAPI, ResponseContext } from "../_generated";

export const refreshTokenMiddleware = (accessTokenKey: string, refreshTokenKey: string, refreshUrl: string) => {
	let refreshTokenPromise: Promise<void> | undefined;

	const refreshToken = async (fetch: FetchAPI) => {
		try {
			const refreshToken = LocalStorage.getItem(refreshTokenKey);

			const resp = await fetch(refreshUrl, {
				method: "POST",
				body: JSON.stringify({ refreshToken }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (resp.status === 401) {
				LocalStorage.removeItem(accessTokenKey);
				LocalStorage.removeItem(refreshTokenKey);
			}
		} finally {
			refreshTokenPromise = undefined;
		}
	};

	return async (context: ResponseContext): Promise<Response | void> => {
		if (context.url === refreshUrl) return;

		if (!LocalStorage.getItem(accessTokenKey)) return;

		if (context.response.status === 401) {
			if (!refreshTokenPromise) {
				refreshTokenPromise = refreshToken(context.fetch);
			}
			await refreshTokenPromise;

			const accessToken = LocalStorage.getItem(accessTokenKey);
			if (!accessToken) return;

			return await context.fetch(context.url, {
				...context.init,
				headers: { ...context.init.headers, Authorization: `Bearer ${accessToken}` },
			});
		}
	};
};
