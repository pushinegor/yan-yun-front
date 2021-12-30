import React from "react";
import styles from "modules/layout/admin/admin-layout.module.scss";
import { Badge, Menu, Typography } from "antd";
import { useSelectedMenus } from "shared/ui/layouts/sidebar-lib";
import { Icon } from "shared/ui";
import AppRouter from "router";

interface IAdminLayoutSidebarSidebar {}

export const AdminLayoutSidebarSidebar = (props: IAdminLayoutSidebarSidebar) => {
	return (
		<div className={styles.sidebar}>
			<Typography.Paragraph className={styles.list_title}>Основные разделы</Typography.Paragraph>
			<Menu selectedKeys={useSelectedMenus()}>
				<Menu.Item key="/admin/users" onClick={() => {}} icon={<Icon name="user" />}>
					Пользователи
				</Menu.Item>
			</Menu>

			<Typography.Paragraph className={styles.list_title}>Контент</Typography.Paragraph>
			<Menu selectedKeys={useSelectedMenus()}>
				<Menu.Item key="/crm/news" onClick={() => {}} icon={<Icon name="news" />}>
					Новости
				</Menu.Item>
			</Menu>

			<Menu selectedKeys={useSelectedMenus()} className={styles.pressed_bottom}>
				<Menu.Item key="/crm/settings" onClick={() => {}} icon={<Icon name="settings" />}>
					Настройки
				</Menu.Item>
				<Menu.Item key="log-out" onClick={() => {}} icon={<Icon name="log-out" />}>
					Выйти
				</Menu.Item>
			</Menu>
		</div>
	);
};
