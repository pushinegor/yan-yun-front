import React, { CSSProperties } from "react";
import styles from "./card.module.scss";
import cx from "classnames";
import Link from "next/link";
import { IRouterLink } from "shared/lib";

export interface ICard {
	header?: React.ReactNode;
	headerStyle?: CSSProperties;
	id?: string;

	children?: React.ReactNode;

	href?: IRouterLink;

	className?: string;
	style?: CSSProperties;
}

const Tag = (props: {
	id?: string;
	href?: IRouterLink;
	children?: React.ReactNode;
	className?: string;
	style?: CSSProperties;
}) => {
	if (props.href)
		return (
			<Link {...props.href}>
				<a className={props.className} style={props.style} id={props.id}>
					{props.children}
				</a>
			</Link>
		);

	return (
		<div className={props.className} style={props.style} id={props.id}>
			{props.children}
		</div>
	);
};

export const Card = (props: ICard) => {
	return (
		<Tag href={props.href} className={cx(styles.card, props.className)} style={props.style} id={props.id}>
			{props.header && (
				<div className={styles.card_header} style={props.headerStyle}>
					{props.header}
				</div>
			)}

			{props.children}
		</Tag>
	);
};

Card.defaultProps = {};
