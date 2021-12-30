import React from "react";
import styles from "./layout-content.module.scss";
import cx from "classnames";

interface ILayoutContent {
	children: React.ReactNode;

	isBig?: boolean;
}

export const LayoutContent = (props: ILayoutContent) => {
	return <div className={cx(styles.content, props.isBig && styles.big)}>{props.children}</div>;
};
