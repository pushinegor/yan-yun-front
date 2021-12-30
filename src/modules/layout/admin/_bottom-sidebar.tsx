import React from "react";
import styles from "modules/layout/admin/admin-layout.module.scss";
import { useSelectedMenus } from "shared/ui/layouts/sidebar-lib";
import { Badge, Menu } from "antd";
import { Icon } from "shared/ui";
import AppRouter from "router";

interface I_BottomSidebar {}

export const AdminBottomSidebar = (props: I_BottomSidebar) => {
	return (
		<div className={styles.sidebar}>
			<Menu selectedKeys={useSelectedMenus()}>
				<Menu.Item key="/crm/payouts" onClick={() => {}} icon={<Icon name="user" />}>
					Пользователи
				</Menu.Item>
			</Menu>
		</div>
	);
};
