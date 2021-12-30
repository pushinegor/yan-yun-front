import React from "react";
import styles from "./sidebar-actions.module.scss";

export interface ISidebarActions {
	label?: React.ReactNode;
	children?: React.ReactNode;
}

export const SidebarActions = (props: ISidebarActions) => {
	return (
		<div className={styles.sidebar_actions}>
			{props.label && <div className={styles.sidebar_actions__label}>{props.label}</div>}
			{props.children}
		</div>
	);
};

SidebarActions.defaultProps = {};
