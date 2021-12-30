import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./sidebar-date-filter.module.scss";
import { SidebarTitle } from "shared/ui/layouts/sidebar/sidebar-title";
import { DateInput } from "shared/ui/form-inputs/date/DateInput";
import { Form } from "antd";

export interface ISidebarDateFilter {
	title?: React.ReactNode;

	value?: { from?: Date | string; to?: Date | string };
	onChange?: (value: { from?: string; to?: string }) => void;

	className?: string;
	style?: CSSProperties;
}

export const SidebarDateFilter = (props: ISidebarDateFilter) => {
	const from = props.value?.from ? new Date(props.value?.from) : undefined;
	const to = props.value?.to ? new Date(props.value?.to) : undefined;

	const onChange = ({ from, to }: { from?: Date; to?: Date }) => {
		props.onChange?.({
			from: from ? from.toISOString().split("T")[0] : undefined,
			to: to ? to.toISOString().split("T")[0] : undefined,
		});
	};

	return (
		<Form className={cx(styles.sidebar_date_filter, props.className)} style={props.style} layout="vertical">
			<SidebarTitle level={2}>{props.title}</SidebarTitle>
			<DateInput label="От" value={from} onChange={(from) => onChange({ from, to })} />
			<DateInput label="До" value={to} onChange={(to) => onChange({ from, to })} />
		</Form>
	);
};

SidebarDateFilter.defaultProps = {};
