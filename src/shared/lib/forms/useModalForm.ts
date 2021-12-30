import {
	FieldError,
	FieldPath,
	FieldValues,
	RegisterOptions,
	UseControllerProps,
	useForm,
	UseFormProps,
	UseFormRegisterReturn,
	UseFormReturn,
} from "react-hook-form";
import * as React from "react";
import { useEffect, useState } from "react";
import { IModal } from "./IModal";
import { getBackendErrors } from "./backend-errors";

export interface IUseModalFormProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext extends object = object,
	TResponse extends any = void
> extends UseFormProps<TFieldValues, TContext> {
	onSubmit: (value: TFieldValues) => TResponse;
	onSuccess?: (resp: TResponse, values: TFieldValues) => void;
}

export type UseModalFormRegister<TFieldValues extends FieldValues> = <
	TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	name: TFieldName,
	options?: RegisterOptions<TFieldValues, TFieldName>
) => UseFormRegisterReturn & { error?: string };

export interface IUseModalForm<TFieldValues extends FieldValues = FieldValues> extends UseFormReturn<TFieldValues> {
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
	onCancel: () => void;
	globalError?: string;
	setGlobalError: (message?: string) => void;
	cleanGlobalError: () => void;
	submitProps: { loading: boolean; disabled: boolean };
	register: UseModalFormRegister<TFieldValues>;
	regField: <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
		name: TFieldName,
		rules?: Omit<RegisterOptions<TFieldValues, TFieldName>, "valueAsNumber" | "valueAsDate" | "setValueAs">
	) => UseControllerProps<TFieldValues, TFieldName>;
}

export const useModalForm = <TFieldValues extends FieldValues = FieldValues, TContext extends object = object>(
	modal: IModal<TFieldValues, any>,
	props: IUseModalFormProps<TFieldValues, TContext>
): IUseModalForm<TFieldValues> => {
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
			await modal.onSuccess?.(resp, values as any);
			await modal.close();
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
		...form.register(name, { required: true, shouldUnregister: true, ...options }),
		error: (form.formState.errors as any)?.[name]?.message,
	});

	const regField = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
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
		regField,
		onCancel: modal.close,
	} as any;
};
