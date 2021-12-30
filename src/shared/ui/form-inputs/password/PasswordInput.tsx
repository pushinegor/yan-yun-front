import React from "react";
import { Form, Input } from "antd";
import { Icon } from "shared/ui/atoms";
import { FieldError } from "react-hook-form/dist/types/errors";

export interface IPasswordInput {
	label?: React.ReactNode;
	description?: React.ReactNode;
	placeholder?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.ChangeEventHandler<HTMLInputElement>;
	autoFocus?: boolean;
	prefix?: React.ReactNode;
	error?: FieldError;
}

export const PasswordInput = ({ label, ...props }: IPasswordInput) => {
	return (
		<Form.Item label={label}>
			{props.description && <div className="form-item-description">{props.description}</div>}
			<Input.Password {...props} iconRender={(visible) => <Icon name={visible ? "eye-off" : "eye-on"} />} />

			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

PasswordInput.defaultProps = {};
