import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";
import { ISelectInput, SelectInput } from "./SelectInput";

interface ISelectField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		Omit<ISelectInput, "value" | "onChange" | "onBlur"> {}

export const SelectField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: ISelectField<TFieldValues, TName>
) => (
	<Controller
		{...props}
		control={props.control}
		render={({ field }) => (
			<SelectInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
		)}
	/>
);
