import { numberWithSpaces } from "shared/lib/format/number";
import { Rub } from "shared/ui";
import React from "react";

export const formatMoney = (
	amount?: string | number,
	options?: { currency?: string; fixed?: number }
): React.ReactNode | string => {
	if (isNaN(Number(amount))) return "";

	const num = numberWithSpaces(Number(amount).toFixed(options?.fixed ?? 0));

	const currency = options?.currency ?? <Rub />;

	if (!currency) return num;

	return (
		<>
			{num}&nbsp;{currency}
		</>
	);
};

export default formatMoney;
