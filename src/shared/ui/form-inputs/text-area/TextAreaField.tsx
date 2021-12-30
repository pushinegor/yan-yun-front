import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { ITextAreaInput, TextAreaInput } from "./TextAreaInput";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";

interface ITextAreaField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		Omit<ITextAreaInput, "name"> {}

export const TextAreaField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	control,
	rules,
	name,
	...props
}: ITextAreaField<TFieldValues, TName>) => (
	<Controller
		name={name}
		control={control}
		rules={rules}
		render={({ field }) => (
			<TextAreaInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
		)}
	/>
);
