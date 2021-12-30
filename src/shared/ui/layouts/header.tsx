import React from "react";
import { Icon } from "shared/ui/atoms";
import { Layout, Typography } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";
import AppRouter from "router";

export interface IHeader {
	children?: React.ReactNode;
	onToggleDrawer?: () => void;

	hideMenu?: boolean;

	baseRout?: string;
}

export const Header = (props: IHeader) => {
	const baseRout = props.baseRout || "/crm";

	return (
		<Layout.Header className={styles.header}>
			<div className={styles.header__side}>
				{!props.hideMenu && <MenuOutlined className={styles.menu} onClick={() => props.onToggleDrawer?.()} />}

				<Link {...AppRouter.index.link}>
					<a className={styles.logo}>
						<Icon name="logo_mobile" />
					</a>
				</Link>

				<Typography.Paragraph className={styles.sub_title}>Кабинет администратора</Typography.Paragraph>
			</div>

			<div className={styles.header__side}>{props.children}</div>
		</Layout.Header>
	);
};

Header.defaultProps = {};
