import React from "react";
import { Form, Input } from "antd";

import { FieldError } from "react-hook-form/dist/types/errors";

export interface INumberInput {
	label?: React.ReactNode;
	placeholder?: string;
	value?: string | number;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.ChangeEventHandler<HTMLInputElement>;
	autoFocus?: boolean;
	tabIndex?: number;
	description?: React.ReactNode;
	addonAfter?: React.ReactNode;
	error?: FieldError;
	step?: number;
}

export const NumberInput = ({ label, description, error, ...props }: INumberInput) => {
	return (
		<Form.Item label={label}>
			{description && <div className="form-item-description">{description}</div>}
			<Input type="number" {...props} step={props.step} />
			{error?.message && <p className="form-item-error">{error.message}</p>}
		</Form.Item>
	);
};

NumberInput.defaultProps = {};
