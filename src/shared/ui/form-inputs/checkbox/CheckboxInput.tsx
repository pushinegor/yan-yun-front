import React, { CSSProperties } from "react";
import { Checkbox, Form } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { FieldError } from "react-hook-form/dist/types/errors";

export interface ICheckboxInput {
	label?: React.ReactNode;
	value?: boolean;
	onChange?: (e: CheckboxChangeEvent) => void;
	onBlur?: React.ChangeEventHandler<HTMLInputElement>;
	autoFocus?: boolean;
	error?: FieldError;
	children?: React.ReactNode;

	className?: string;
	style?: CSSProperties;
}

export const CheckboxInput = ({ label, ...props }: ICheckboxInput) => {
	return (
		<Form.Item label={label} className={props.className} style={props.style}>
			<Checkbox {...props} checked={props.value}>
				{props.children}
			</Checkbox>
			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

CheckboxInput.defaultProps = {};
