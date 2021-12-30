import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";
import { IMultiSelectInput, MultiSelectInput } from "./MultiSelectInput";

interface IMultiSelectField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		Omit<IMultiSelectInput, "value" | "onChange" | "onBlur"> {}

export const MultiSelectField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: IMultiSelectField<TFieldValues, TName>
) => (
	<Controller
		{...props}
		control={props.control}
		render={({ field }) => (
			<MultiSelectInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
		)}
	/>
);
