import React, { useEffect, useState } from "react";
import { Drawer, Layout } from "antd";
import { EmptyLayout } from "./empty-layout";
import styles from "./panel-layout.module.scss";
import cx from "classnames";
import Router from "next/router";
import { useAppContext } from "shared/context/app-context.provider";

export interface IAppLayout {
	sidebar?: React.ReactNode;
	mobileSidebar?: React.ReactNode;
	children?: React.ReactNode;
	headerExtra?: React.ReactNode;

	bottomSidebar?: React.ReactNode;
	isBottomSidebarOpened?: boolean;
	setIsBottomSidebarOpened?: (value: boolean) => void;

	footer?: React.ReactNode;
}

export const PanelLayout = (props: IAppLayout) => {
	const [drawer, setDrawer] = useState(false);

	useEffect(() => {
		const handleRouteChange = () => {
			setDrawer(false);
		};

		Router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			Router.events.off("routeChangeStart", handleRouteChange);
		};
	}, []);

	return (
		<>
			<EmptyLayout headerExtra={props.headerExtra} onToggleDrawer={() => setDrawer(!drawer)}>
				<Layout>
					<div className={styles.main_sidebar_wrapper}>
						<Layout.Sider width={310} className={styles.main_sidebar}>
							{props.sidebar}
						</Layout.Sider>
					</div>

					<Drawer
						width={240}
						closable={false}
						visible={drawer}
						onClose={() => setDrawer(false)}
						placement="left"
						className={styles.drawer}
					>
						<Layout.Sider width={220} className={cx(styles.main_sidebar, styles.main_sidebar__drawer)}>
							{props.sidebar}
						</Layout.Sider>
					</Drawer>

					<Drawer
						closable={false}
						visible={drawer}
						onClose={() => setDrawer(false)}
						placement="top"
						className={styles.mobile_drawer}
					>
						<Layout.Sider
							className={cx(
								styles.main_sidebar,
								styles.main_sidebar__drawer,
								styles.mobile_sidebar_drawer
							)}
						>
							{props.mobileSidebar}
						</Layout.Sider>
					</Drawer>

					<Drawer
						closable={false}
						visible={props.isBottomSidebarOpened}
						onClose={() => props.setIsBottomSidebarOpened?.(false)}
						placement="bottom"
						className={styles.bottom_drawer}
						zIndex={900}
					>
						<Layout.Sider className={cx(styles.main_sidebar, styles.main_sidebar__drawer)}>
							{props.bottomSidebar}
						</Layout.Sider>
					</Drawer>

					<Layout className={styles.content}>{props.children}</Layout>
				</Layout>
			</EmptyLayout>
		</>
	);
};

PanelLayout.defaultProps = {};
