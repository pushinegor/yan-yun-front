import formatNumber from "shared/lib/format/number";

export const formatPercent = (num: number | string, digits: number = 2): string => {
	return (formatNumber(num, digits) || "0") + "\u00A0" + "%";
};
