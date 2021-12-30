import { pluralize } from "../pluralize";

export const formatPoints = (data?: number) => {
	if (!data) return;

	return pluralize(data, {
		one: (it) => `${it} балл`,
		few: (it) => `${it} балла`,
		many: (it) => `${it} баллов`,
	});
};
