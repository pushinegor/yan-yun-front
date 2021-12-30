import React from "react";
import { Form, Input } from "antd";
import { FieldError } from "react-hook-form/dist/types/errors";
import InputMask from "react-input-mask";
import { isServer } from "shared/lib";

export interface IPhoneInput {
	label?: React.ReactNode;
	placeholder?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.ChangeEventHandler<HTMLInputElement>;
	autoFocus?: boolean;
	disabled?: boolean;
	prefix?: React.ReactNode;
	error?: FieldError;
}

export const PhoneInput = ({ label, value, onChange, onBlur, disabled, ...props }: IPhoneInput) => {
	if (isServer()) return <div />;

	return (
		<Form.Item label={label}>
			<InputMask mask="+7 (999) 999 99 99" value={value} onChange={onChange} onBlur={onBlur}>
				<Input {...props} />
			</InputMask>

			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

PhoneInput.defaultProps = {};
