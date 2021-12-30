import React, { CSSProperties, useState } from "react";
import { Input } from "antd";
import { Icon } from "shared/ui/atoms";
import styles from "./sidebar-search.module.scss";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "shared/ui/ant";
import cx from "classnames";

export interface ISidebarSearch {
	value?: string;
	onChange: (value: string) => void;

	label?: React.ReactNode;
	placeholder?: string;

	onSearchButtonClick?: () => void;

	className?: string;
	style?: CSSProperties;
}

export const SidebarSearch = (props: ISidebarSearch) => {
	const [value, setValue] = useState(props.value);
	const propsOnChange = useDebouncedCallback(props.onChange, 250);

	const onChange = (value: string) => {
		setValue(value);
		propsOnChange(value);
	};

	return (
		<div className={cx(styles.sidebar_search, props.className)} style={props.style}>
			{props.label && <div className={styles.sidebar_search__label}>{props.label}</div>}
			<Input
				value={value}
				suffix={<Icon name="search" />}
				placeholder={props.placeholder || "Найти"}
				allowClear
				onChange={(e) => onChange(e.target.value)}
			/>

			{props.onSearchButtonClick && (
				<Button onClick={props.onSearchButtonClick} className={styles.button}>
					Найти
				</Button>
			)}
		</div>
	);
};

SidebarSearch.defaultProps = {};
