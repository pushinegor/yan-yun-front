import { onlyDigits } from "shared/lib";

export const formatPhone = (phone: string | undefined) => {
	if (!phone) return;
	return onlyDigits(phone).replace(/(\d*)(\d{3})(\d{3})(\d{2})(\d{2})/, `+$1 ($2) $3 $4 $5`);
};
