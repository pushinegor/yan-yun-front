import React from "react";
import { DatePicker, Form } from "antd";
import moment, { Moment } from "moment";
import { FieldError } from "react-hook-form";

export interface IDateInput {
	label?: React.ReactNode;
	value?: Date;
	onChange?: (value?: Date) => void;
	disabledDate?: (value?: Moment) => boolean;
	onBlur?: () => void;
	autoFocus?: boolean;
	placeholder?: string;
	error?: FieldError;
}

export const DateInput = ({ label, ...props }: IDateInput) => {
	return (
		<Form.Item label={label}>
			<DatePicker
				style={{ width: "100%" }}
				{...props}
				value={props.value ? moment(props.value) : undefined}
				onChange={(m) => props.onChange?.(m?.toDate())}
			/>
			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

DateInput.defaultProps = {};
