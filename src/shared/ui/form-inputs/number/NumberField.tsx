import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { INumberInput, NumberInput } from "./NumberInput";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";

interface ITextField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		INumberInput {}

export const NumberField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: ITextField<TFieldValues, TName>
) => (
	<Controller
		{...props}
		control={props.control}
		render={({ field, ...rest }) => {
			return (
				<NumberInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
			);
		}}
	/>
);
