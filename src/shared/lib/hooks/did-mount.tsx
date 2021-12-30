import { useEffect } from "react";

export const useDidMount = (func: () => any) => {
	useEffect(() => {
		func();
	}, []);
};
