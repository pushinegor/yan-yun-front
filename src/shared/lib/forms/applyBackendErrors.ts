import { Path, UseFormSetError } from "react-hook-form";

export default function applyBackendErrors<T>(
	errors: { details: string; source?: string }[],
	setError: UseFormSetError<T>
) {
	errors.forEach(({ details, source }) => {
		if (source) {
			setError(source as Path<T>, { message: details, type: "manual" });
		}
	});
}
