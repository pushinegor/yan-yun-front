export const formatDateTime = (value?: number | string | Date): string => {
	if (!value) return "";

	return new Date(value).toLocaleString("ru-RU", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});
};

export const formatDate = (value?: number | string | Date): string => {
	if (!value) return "";

	return new Date(value).toLocaleString("ru-RU", {
		year: "numeric",
		month: "long",
		day: "2-digit",
	});
};
