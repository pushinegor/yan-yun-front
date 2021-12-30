import React from "react";
import { Collapse, ICollapse } from "shared/ui/atoms/collapse";
import styles from "./colapse-for-descriptions.module.scss";
import cx from "classnames";

interface ICollapseForDescriptions extends ICollapse {}

export const CollapseForDescriptions = (props: ICollapseForDescriptions) => {
	return (
		<Collapse {...props} className={cx(styles.sub_collapse, props.className)}>
			{props.children}
		</Collapse>
	);
};
