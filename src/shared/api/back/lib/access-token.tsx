import { LocalStorage } from "shared/lib";
import { ACCESS_TOKEN_KEY } from "../config";

export const onAccessTokenChange = (fn: (accessToken?: string) => void): (() => void) => {
	return LocalStorage.subscribe(ACCESS_TOKEN_KEY, fn);
};

export const getAccessToken = () => {
	return LocalStorage.getItem(ACCESS_TOKEN_KEY);
};
