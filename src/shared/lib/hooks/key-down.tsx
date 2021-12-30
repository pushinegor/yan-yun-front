import React from "react";

export const KeyName = {
	ESC: ["Escape", "Esc"],
};

export const useKeyDown = (id: string | string[] | string[][], handler: (e?: KeyboardEvent) => void) => {
	React.useEffect(() => {
		const keys = [id].flat(Infinity);

		const handle = (e: KeyboardEvent) => {
			if (keys.includes(e.key)) handler(e);
		};

		document.addEventListener("keydown", handle);
		return () => document.removeEventListener("keydown", handle);
	}, [id, handler]);
};
