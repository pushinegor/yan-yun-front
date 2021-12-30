import React from "react";
import { Icon, IconName } from "shared/ui/atoms";
import Link from "next/link";
import cx from "classnames";
import styles from "./mobile-nav.module.scss";
import { Badge } from "antd";

type link = {
	label: string;
	icon: IconName;

	href?: string;
	as?: string;

	appearance?: "button";
	onClick?: () => void;

	active?: boolean;

	counter?: number;
};

interface IMobileNav {
	links: link[];
}

export const MobileNav = (props: IMobileNav) => {
	return (
		<div className={styles.nav}>
			{props.links.map((it, key) => (
				<div
					className={cx(styles.link, it.active && styles.active, it.appearance === "button" && styles.button)}
					onClick={it.onClick}
					key={key}
				>
					<Tag href={it.href} as={it.as}>
						<span className={styles.icon_wrap}>
							<Icon name={it.icon} className={styles.icon} />
						</span>
						<span className={styles.text}>{it.label}</span>
						<Badge count={it.counter} className={styles.counter} />
					</Tag>
				</div>
			))}
		</div>
	);
};

interface ITag {
	href?: string;
	as?: string;

	children: React.ReactNode;
}

const Tag = (props: ITag) => {
	if (props.href)
		return (
			<Link href={props.href} as={props.as}>
				<a className={cx(styles.link)}>{props.children}</a>
			</Link>
		);

	return <div className={styles.link}>{props.children}</div>;
};
