import React from "react";
import { Form, Select } from "antd";
import { FieldError } from "react-hook-form/dist/types/errors";

export interface IMultiSelectInput {
	label: React.ReactNode;
	value: string[];
	placeholder?: string;
	onChange: (value: string[]) => void;
	onBlur: () => void;
	options?: { label: string; value: string }[];
	error?: FieldError;
	mode?: "multiple" | "tags";
	showArrow?: boolean;
	className?: string;
}

export const MultiSelectInput = (props: IMultiSelectInput) => {
	return (
		<Form.Item label={props.label}>
			<Select
				style={{ width: 472 }}
				placeholder={props.placeholder}
				onChange={props.onChange}
				onBlur={props.onBlur}
				options={props.options}
				value={props.value || []}
				mode={props.mode || "tags"}
				showArrow={props.showArrow}
				className={props.className}
			/>
			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

MultiSelectInput.defaultProps = {};
