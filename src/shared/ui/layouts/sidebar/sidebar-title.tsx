import React, { CSSProperties } from "react";
import { Typography } from "antd";
import styles from "./sidebar-title.module.scss";
import cx from "classnames";

export interface ISidebarTitle {
	children?: React.ReactNode;
	level: 1 | 2 | 3;
	className?: string;
	style?: CSSProperties;
}

export const SidebarTitle = (props: ISidebarTitle) => {
	return (
		<Typography.Title level={props.level} className={cx(styles.sidebar_title, props.className)} style={props.style}>
			{props.children}
		</Typography.Title>
	);
};

SidebarTitle.defaultProps = {
	level: 1,
};
