import { toMap } from "shared/lib";

const camelize = (str?: string) => {
	if (!str) return str;

	return str
		.replaceAll("_", " ")
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, "");
};

export const getBackendErrors = async (resp: Response) => {
	try {
		const response = await resp.json();

		const errors: { detail: string; source?: string }[] = response.errors?.map((it: any) => ({
			...it,
			source: camelize(it.source),
		}));

		const formErrors = errors
			.filter((it) => it.source)
			.map((it) => ({
				key: camelize(it.source)!,
				value: { message: it.detail, type: "manual" },
			}))
			.reduce(toMap, {});

		const globalError = errors.find((it) => !it.source)?.detail;

		return {
			errors: formErrors,
			globalError,
		};
	} catch (e) {
		console.log(resp);
		console.error(e);
		return {
			errors: [],
		};
	}
};
