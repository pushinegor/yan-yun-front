import React, { CSSProperties } from "react";
import { Typography } from "antd";
import cx from "classnames";
import styles from "./text-with-label.module.scss";

interface ITextWithLabel {
	label: React.ReactNode;
	children: React.ReactNode;

	className?: string;
	textClassName?: string;
	style?: CSSProperties;
}

export const TextWithLabel = (props: ITextWithLabel) => {
	return (
		<Typography.Paragraph className={cx(props.className, styles.text, props.textClassName)} style={props.style}>
			<span className={styles.label}>{props.label}: </span> {props.children}
		</Typography.Paragraph>
	);
};
