import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./hr.module.scss";

interface IHr {
	hideOnMobile?: boolean;

	className?: string;
	style?: CSSProperties;
}

export const Hr = (props: IHr) => {
	return (
		<div style={props.style} className={cx(props.className, styles.hr, props.hideOnMobile && styles.hidden_xs)} />
	);
};
