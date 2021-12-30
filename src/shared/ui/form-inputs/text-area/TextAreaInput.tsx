import React, { CSSProperties } from "react";
import { Form, Input } from "antd";
import { FieldError } from "react-hook-form/dist/types/errors";

export interface ITextAreaInput {
	label?: React.ReactNode;
	placeholder?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	onBlur?: React.ChangeEventHandler<HTMLTextAreaElement>;
	autoFocus?: boolean;
	error?: FieldError;

	className?: string;
	inputClassName?: string;

	inputStyle?: CSSProperties;
}

export const TextAreaInput = (props: ITextAreaInput) => {
	return (
		<Form.Item label={props.label} className={props.className}>
			<Input.TextArea style={{ width: 472, ...props.inputStyle }} {...props} className={props.inputClassName} />
			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

TextAreaInput.defaultProps = {};
