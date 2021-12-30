import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import styles from "./second-sidebar-layout.module.scss";
import { Icon } from "shared/ui/atoms";
import cx from "classnames";
import { useAppContext } from "shared/context/app-context.provider";
import { useRouter } from "next/router";

export interface ISecondSidebarLayout {
	title: React.ReactNode;

	sidebar?: React.ReactNode;
	children?: React.ReactNode;
	extra?: React.ReactNode;
}

export const SecondSidebarLayout = (props: ISecondSidebarLayout) => {
	const { drawer } = useAppContext();

	const toggleMobileMenu = () => {
		if (drawer.visible) drawer.hide();
		else drawer.show();
	};

	const router = useRouter();

	const [currentPath, setCurrentPath] = useState(router.route);

	const hideDrawerOnRouterChange = (url: string) => {
		const path = url.split("?")[0];
		if (path !== currentPath) {
			setCurrentPath(path);
			drawer.hide();
		}
	};

	useEffect(() => {
		router.events.on("routeChangeStart", hideDrawerOnRouterChange);

		return () => router.events.off("routeChangeStart", hideDrawerOnRouterChange);
	}, []);

	return (
		<>
			<Layout.Sider width={280} className={cx(styles.second_sidebar, drawer.visible && styles.visible_on_mobile)}>
				{props.sidebar}
				<div className={styles.bottom} />
			</Layout.Sider>

			{props.extra}

			<Layout.Content className={styles.content}>{props.children}</Layout.Content>

			<div className={cx(styles.dropdown, drawer.visible && styles.active)} onClick={toggleMobileMenu}>
				<Typography.Title ellipsis={{ rows: 1 }} level={2} className={styles.dropdown__title}>
					{props.title}
				</Typography.Title>
				<Icon name="arrow-down" className={styles.dropdown__arrow} />
			</div>
		</>
	);
};

SecondSidebarLayout.defaultProps = {};
