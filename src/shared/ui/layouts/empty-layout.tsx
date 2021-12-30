import React from "react";
import { Layout } from "antd";
import { Header } from "./header";
import { ModalsRoot } from "shared/ui/modals/Modals";
import styles from "./empty-layout.module.scss";

export interface IEmptyLayout {
	sidebar?: React.ReactNode;
	children?: React.ReactNode;
	headerExtra?: React.ReactNode;
	onToggleDrawer?: () => void;

	hideHeaderMenu?: boolean;
}

export const EmptyLayout = (props: IEmptyLayout) => {
	return (
		<Layout className={styles.app_layout}>
			<Header onToggleDrawer={props.onToggleDrawer} hideMenu={props.hideHeaderMenu}>
				{props.headerExtra}
			</Header>

			{props.children}

			<ModalsRoot />
		</Layout>
	);
};

EmptyLayout.defaultProps = {};
