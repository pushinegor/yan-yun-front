import React, { CSSProperties } from "react";
import styles from "./table-row.module.scss";
import { Typography } from "antd";
import cx from "classnames";

interface ITableRow {
	label: React.ReactNode;
	children: React.ReactNode;
	extra?: React.ReactNode;
	description?: React.ReactNode;

	className?: string;
	labelClassName?: string;
	contentClassName?: string;

	style?: CSSProperties;
}

export const TableRow = (props: ITableRow) => (
	<Typography className={cx(styles.row, props.className)} style={props.style}>
		<div className={styles.label_wrap}>
			<h3 className={cx(styles.label, props.labelClassName)}>{props.label}</h3>
			<p className={styles.description}>{props.description}</p>
		</div>

		<p className={cx(styles.content, props.contentClassName)}>{props.children}</p>
		{props.extra}
	</Typography>
);
