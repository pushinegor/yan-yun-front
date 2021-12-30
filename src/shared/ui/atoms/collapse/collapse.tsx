import React, { CSSProperties } from "react";
import { Collapse as CollapseBase, CollapsePanelProps, CollapseProps } from "antd";
import styles from "./collapse.module.scss";
import cx from "classnames";
import { Button } from "shared/ui/ant";
import { Icon } from "shared/ui/atoms/icon";

export interface ICollapse extends CollapseProps {
	panelKey: string | number;
	panel?: Omit<CollapsePanelProps, "header key">;

	header: React.ReactNode;
	headerExtra?: CollapsePanelProps["extra"];
	children: React.ReactNode;

	openedByDefault?: boolean;

	className?: string;
	style?: CSSProperties;
}

export const Collapse = (props: ICollapse) => {
	return (
		<CollapseBase
			{...props}
			className={cx(styles.collapse, props.className)}
			style={props.style}
			bordered={false}
			expandIconPosition="right"
			expandIcon={(panelProps) => (
				<Button type="link">
					<Icon name="arrow-down" className={cx(styles.dropdown, panelProps.isActive && styles.active)} />
				</Button>
			)}
		>
			<CollapseBase.Panel
				{...props.panel}
				key={props.panelKey}
				header={props.header}
				extra={props.headerExtra}
				className={cx(props.panel?.className, styles.panel)}
			>
				<div className={styles.content}>{props.children}</div>
			</CollapseBase.Panel>
		</CollapseBase>
	);
};
