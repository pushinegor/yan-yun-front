import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { IPhoneInput, PhoneInput } from "./PhoneInput";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";

interface IPhoneField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		IPhoneInput {}

export const PhoneField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: IPhoneField<TFieldValues, TName>
) => (
	<Controller
		{...props}
		control={props.control}
		render={({ field }) => (
			<PhoneInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
		)}
	/>
);
