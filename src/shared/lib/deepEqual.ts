export const deepEqual: (obj1?: any, obj2?: any) => boolean = (obj1, obj2) => {
	if (typeof obj1 !== "object" || typeof obj2 !== "object") {
		return false;
	}
	if (obj1 === undefined || obj2 === undefined) {
		return false;
	}
	if (obj1 === null || obj2 === null) {
		return false;
	}
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);
	if (obj1Keys.length !== obj2Keys.length) {
		return false;
	}
	for (let i = 0; i < obj1Keys.length; i++) {
		if (!obj2Keys.includes(obj1Keys[i])) {
			return false;
		}
	}
	for (let i = 0; i < obj1Keys.length; i++) {
		if (typeof obj1[obj1Keys[i]] === "object") {
			return deepEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]]);
		}
		if (obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) {
			return false;
		}
	}
	return true;
};
