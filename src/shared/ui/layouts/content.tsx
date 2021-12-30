import React, { CSSProperties } from "react";
import { Layout } from "antd";
import cx from "classnames";
import styles from "./content.module.scss";

export interface IContent {
	children?: React.ReactNode;

	className?: string;
	style?: CSSProperties;
}

export const Content = (props: IContent) => (
	<Layout.Content className={cx(styles.content, props.className)} style={props.style}>
		{props.children}
	</Layout.Content>
);

Content.defaultProps = {};
