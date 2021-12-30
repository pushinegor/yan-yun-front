import React, { CSSProperties } from "react";
import styles from "./content-header.module.scss";
import { Typography } from "antd";
import cx from "classnames";

interface IContentHeader {
	title: React.ReactNode;
	children?: React.ReactNode;

	className?: string;
	style?: CSSProperties;
}

export const ContentHeader = (props: IContentHeader) => {
	return (
		<div className={cx(styles.header, props.className)} style={props.style}>
			<Typography.Title className={styles.title}>{props.title}</Typography.Title>
			{props.children}
		</div>
	);
};
