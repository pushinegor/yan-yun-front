import React, { CSSProperties } from "react";
import { Tag as TagBase } from "antd";
import styles from "./tag.module.scss";
import cx from "classnames";
import { TagProps } from "antd/lib/tag";
import { Icon, IconName } from "shared/ui/atoms/icon";

export type ITagAppearance = "primary" | "success" | "alert" | "draft" | "dark";

export interface ITag extends TagProps {
	appearance: ITagAppearance;
	icon?: IconName;
	children?: React.ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const Tag = (props: ITag) => (
	<TagBase
		className={cx(props.className, styles.tag, styles[props.appearance])}
		style={props.style}
		icon={props.icon ? <Icon name={props.icon} className={styles.icon} /> : undefined}
	>
		<>{props.children}</>
	</TagBase>
);

Tag.defaultProps = {
	appearance: "primary",
};
