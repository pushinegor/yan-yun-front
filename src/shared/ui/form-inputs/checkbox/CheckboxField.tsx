import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { CheckboxInput, ICheckboxInput } from "./CheckboxInput";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";

interface ICheckboxField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		ICheckboxInput {}

export const CheckboxField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: ICheckboxField<TFieldValues, TName>
) => (
	<Controller
		{...props}
		control={props.control}
		render={({ field }) => (
			<CheckboxInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
		)}
	/>
);
