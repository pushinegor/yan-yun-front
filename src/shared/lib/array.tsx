// [1, 2, 2, 2, 3, 3].filter(onlyUnique) == [1, 2, 3]
export const onlyUnique = <T,>(value: T, index: number, array: T[]) => array.indexOf(value) === index;

// range(4, 10) === [4, 5, 6, 7, 8, 9, 10]
export const range = (from: number, to: number): number[] => {
	const res: number[] = [];

	if (from < to) {
		for (let i = from; i <= to; i++) {
			res.push(i);
		}
	} else {
		for (let i = from; i >= to; i--) {
			res.push(i);
		}
	}

	return res;
};

// array(5, it => it) => [0, 1, 2, 3, 4]
export const array = <T extends any = any>(size: number, init: (key: number) => T) => {
	return range(0, size - 1).map(init);
};

export const toMap = <Value extends any>(
	obj: { [key: string]: Value },
	{ key, value }: { key: string; value: Value }
) => {
	obj[key] = value;
	return obj;
};

export const toIdMap = <Value extends { id: string }>(obj: { [id: string]: Value }, value: Value) => {
	obj[value.id] = value;
	return obj;
};

export const createIdMap = <Value extends { id: string }>(arr?: Value[]): { [id: string]: Value } => {
	return (arr || []).reduce(toIdMap, {});
};
