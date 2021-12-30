import { LocalStorage } from "shared/lib";
import { ACCESS_TOKEN_KEY } from "../config";

export const logout = () => {
	LocalStorage.removeItem(ACCESS_TOKEN_KEY);
};
