export const numberWithSpaces = (x: number | string) => {
	const parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
	return parts.join(".");
};

export const formatNumber = (
	value: string | number | undefined | null,
	fixed: number = 4,
	withSpaces: boolean = false
): string => {
	// Catch "Infinity" value
	if (value && !isFinite(parseFloat(value.toString()))) return "0";
	if (!value || value === "" || parseFloat(value + "") === 0) return "0";

	if (fixed === -1) {
		const parsedNumber = value + "";
		return withSpaces ? numberWithSpaces(parsedNumber) : parsedNumber;
	}

	const parsedNumber = Number(value).toFixed(fixed);
	const match = /(.*?)(\.?0*)$/.exec(parsedNumber);
	const outputValue = match ? match[1] : parsedNumber;
	return withSpaces ? numberWithSpaces(outputValue) : outputValue;
};

export default formatNumber;
