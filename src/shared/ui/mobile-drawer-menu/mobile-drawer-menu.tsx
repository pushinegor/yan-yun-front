import React, { CSSProperties } from "react";
import { useSelectedMenus } from "shared/ui/layouts/sidebar-lib";
import { Menu } from "antd";
import styles from "./styles.module.scss";
import cx from "classnames";
import AppRouter from "router";
import { Icon } from "shared/ui/atoms";

interface IMobileDrawerMenu {
	extra?: React.ReactNode;

	className?: string;
	style?: CSSProperties;
}

export const MobileDrawerMenu = (props: IMobileDrawerMenu) => {
	return (
		<Menu selectedKeys={useSelectedMenus()} className={cx(props.className, styles.menu)} style={props.style}>
			<Menu.Item key="return-to-site" onClick={AppRouter.index.open} icon={<Icon name="refresh" />}>
				Вернуться на сайт
			</Menu.Item>
			<Menu.Item key="return-to-site" onClick={() => {}} icon={<Icon name="log-out" />}>
				Выйти
			</Menu.Item>
		</Menu>
	);
};
