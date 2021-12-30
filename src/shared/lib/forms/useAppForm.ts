import { FieldValues, UseControllerProps, useForm, UseFormReturn } from "react-hook-form";
import * as React from "react";
import { useEffect, useState } from "react";
import { UseFormProps } from "react-hook-form/dist/types";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { FieldPath } from "react-hook-form/dist/types/utils";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import { FieldError } from "react-hook-form/dist/types/errors";
import { getBackendErrors } from "shared/lib/forms/backend-errors";

export interface IUseAppFormProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext extends object = object,
	TResponse extends any = void
> extends UseFormProps<TFieldValues, TContext> {
	onSubmit: (value: TFieldValues) => Promise<TResponse> | TResponse;
	onSuccess?: (resp: TResponse, values: TFieldValues) => void;
}

export type UseAppFormRegister<TFieldValues extends FieldValues> = <
	TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	name: TFieldName,
	options?: RegisterOptions<TFieldValues, TFieldName>
) => UseFormRegisterReturn & { error?: string };

export interface IUseAppForm<TFieldValues extends FieldValues = FieldValues> extends UseFormReturn<TFieldValues> {
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
	globalError?: string;
	setGlobalError: (message?: string) => void;
	cleanGlobalError: () => void;
	submitProps: { loading: boolean; disabled: boolean };
	register: UseAppFormRegister<TFieldValues>;
	regField: <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
		name: TFieldName,
		rules?: Omit<RegisterOptions<TFieldValues, TFieldName>, "valueAsNumber" | "valueAsDate" | "setValueAs">
	) => UseControllerProps<TFieldValues, TFieldName>;
}

export const useAppForm = <
	TFieldValues extends FieldValues = FieldValues,
	TResponse extends any = any,
	TContext extends object = object
>(
	props: IUseAppFormProps<TFieldValues, TContext, TResponse>
): IUseAppForm<TFieldValues> => {
	const form = useForm<TFieldValues, TContext>({ mode: "all", ...props });

	const [globalError, setGlobalError] = useState<string>();
	const cleanGlobalError = () => setGlobalError(undefined);

	useEffect(() => {
		form.trigger();
	}, []);

	const onSubmit = form.handleSubmit(async (values) => {
		try {
			const resp = await props.onSubmit(values as any);
			await props.onSuccess?.(resp, values as any);
			cleanGlobalError();
		} catch (e) {
			const errors = await getBackendErrors(e as any);
			Object.entries(errors.errors).forEach(([key, value]) => form.setError(key as any, value));
			if (errors.globalError) setGlobalError(errors.globalError);
		}
	});

	const submitProps = {
		loading: form.formState.isSubmitting,
		disabled: !form.formState.isValid,
	};

	const register = (name: FieldPath<TFieldValues>, options: any) => ({
		...form.register(name, { required: true, ...options }),
		error: (form.formState.errors as any)?.[name]?.message,
	});

	const reg = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
		name: TFieldName,
		rules?: Omit<RegisterOptions<TFieldValues, TFieldName>, "valueAsNumber" | "valueAsDate" | "setValueAs">
	): UseControllerProps<TFieldValues, TFieldName> & { error?: FieldError } => {
		return {
			name: name,
			control: form.control as any,
			error: (form as any).formState.errors[name],
			rules: {
				required: true,
				...rules,
			},
		};
	};

	return {
		...form,
		onSubmit,
		globalError,
		setGlobalError,
		cleanGlobalError,
		submitProps,
		register,
		regField: reg,
	} as any;
};
