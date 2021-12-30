import { useEffect, useState } from "react";
import { getAccessToken, onAccessTokenChange } from "./back";

export const useAuthed = () => {
	const [accessToken, setAccessToken] = useState(getAccessToken());

	useEffect(() => onAccessTokenChange(setAccessToken), []);

	return !!accessToken;
};
