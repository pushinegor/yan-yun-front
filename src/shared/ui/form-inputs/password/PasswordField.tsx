import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { IPasswordInput, PasswordInput } from "./PasswordInput";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldPath } from "react-hook-form/dist/types";

interface IPasswordField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ControllerProps<TFieldValues, TName>, "render">,
		IPasswordInput {}

export const PasswordField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
	props: IPasswordField<TFieldValues, TName>
) => (
	<Controller
		{...props}
		control={props.control}
		render={({ field }) => (
			<PasswordInput value={field.value as any} onChange={field.onChange} onBlur={field.onBlur} {...props} />
		)}
	/>
);
