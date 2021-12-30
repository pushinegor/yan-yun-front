import React from "react";
import { Form, Input } from "antd";
import { LiteralUnion } from "antd/lib/_util/type";
import { FieldError } from "react-hook-form/dist/types/errors";

export interface ITextInput {
	label?: React.ReactNode;
	placeholder?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.ChangeEventHandler<HTMLInputElement>;
	autoFocus?: boolean;
	type?: LiteralUnion<
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week",
		string
	>;
	tabIndex?: number;
	prefix?: React.ReactNode;
	description?: React.ReactNode;
	error?: FieldError;

	className?: string;
	inputClassName?: string;
}

export const TextInput = ({ label, ...props }: ITextInput) => {
	return (
		<Form.Item label={label} className={props.className}>
			{props.description && <div className="form-item-description">{props.description}</div>}
			<Input {...props} className={props.inputClassName} />
			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

TextInput.defaultProps = {};
