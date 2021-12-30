import React, { CSSProperties } from "react";
import styles from "./sidebar-list-item.module.scss";
import { Button, Dropdown, Menu } from "antd";
import { Icon, IconName } from "shared/ui/atoms";
import cx from "classnames";

export interface ISidebarListItem {
	children?: React.ReactNode;
	small?: boolean;
	active?: boolean;
	style?: CSSProperties;
	onClick: () => void;
	menu?: { icon?: IconName; label: React.ReactNode; onClick: () => void; danger?: boolean }[];
}

export const SidebarListItem = (props: ISidebarListItem) => {
	return (
		<div
			className={cx(styles.sidebar_list_item, props.small && styles.small, props.active && styles.active)}
			style={props.style}
			onClick={props.onClick}
		>
			<div className={styles.content}>{props.children}</div>

			{props.menu && (
				<Dropdown
					trigger={["click"]}
					overlay={
						<Menu>
							{props.menu.map((it) => (
								<Menu.Item
									onClick={(e) => {
										e.domEvent.stopPropagation();
										it.onClick();
									}}
									icon={it.icon && <Icon name={it.icon} />}
									danger={it.danger}
								>
									{it.label}
								</Menu.Item>
							))}
						</Menu>
					}
				>
					<Button type="link" className={styles.more} onClick={(e) => e.stopPropagation()}>
						<Icon name="actions" />
					</Button>
				</Dropdown>
			)}
		</div>
	);
};

SidebarListItem.defaultProps = {};
