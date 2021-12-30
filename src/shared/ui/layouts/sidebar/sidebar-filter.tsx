import React, { CSSProperties } from "react";
import styles from "./sidebar-filter.module.scss";
import { Badge, Button } from "antd";
import cx from "classnames";

export interface ISidebarFilter<T> {
	label?: React.ReactNode;

	value: T;
	onChange: (value: T) => void;

	options: Array<{
		value: T;
		label: React.ReactNode;
		badge?: React.ReactNode;
	}>;

	buttonsStyle?: CSSProperties;
}

export const SidebarFilter = <T extends string | undefined>(props: ISidebarFilter<T>) => {
	return (
		<div className={styles.sidebar_filter}>
			{props.label && <div className={styles.sidebar_filter__label}>{props.label}</div>}
			{props.options.map((it, key) => (
				<Button
					key={key}
					type="link"
					onClick={() => props.onChange(it.value)}
					style={{
						fontWeight: 300,
						color: it.value !== props.value ? "#8B8B8B" : "#1A1A1A",
						...props.buttonsStyle,
					}}
					className={cx(
						styles.sidebar_filter__item,
						it.value === props.value && styles.sidebar_filter__item__active
					)}
				>
					{it.label} <Badge count={it.badge} className={styles.badge} />
				</Button>
			))}
		</div>
	);
};

SidebarFilter.defaultProps = {};
