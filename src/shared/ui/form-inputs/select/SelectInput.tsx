import React from "react";
import { Form, Select } from "antd";
import { Icon } from "shared/ui/atoms";
import styles from "./select.module.scss";
import cx from "classnames";

export interface ISelectInput {
	label?: React.ReactNode;
	value?: string;
	placeholder?: string;
	onChange: (value: string) => void;
	onBlur?: () => void;
	onSearch?: (value: string) => void;
	options?: { label: string; value: string }[];
	loading?: boolean;
	disabled?: boolean;
	filterOption?: boolean;
	showSearch?: boolean;
	allowClear?: boolean;
	defaultActiveFirstOption?: boolean;
	error?: any;

	className?: string;
}

export const SelectInput = (props: ISelectInput) => {
	return (
		<Form.Item label={props.label} className={cx(props.className, styles.container)}>
			<Select
				loading={props.loading}
				placeholder={props.placeholder}
				onChange={props.onChange}
				onBlur={props.onBlur}
				options={props.options}
				disabled={props.disabled}
				value={props.value}
				onSearch={props.onSearch}
				filterOption={props.filterOption}
				showSearch={props.showSearch}
				allowClear={props.allowClear}
				defaultActiveFirstOption={props.defaultActiveFirstOption}
				suffixIcon={<Icon name="arrow-down" className={styles.icon} />}
			/>
			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

SelectInput.defaultProps = {};
