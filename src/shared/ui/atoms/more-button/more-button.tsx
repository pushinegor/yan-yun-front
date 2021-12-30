import React, { CSSProperties } from "react";
import { Button } from "shared/ui/ant";
import { Icon, IconName } from "shared/ui/atoms/icon";
import styles from "./more-button.module.scss";
import cx from "classnames";

interface IMoreButton {
	onLoadMore: () => void;

	text?: string;
	icon?: IconName;

	className?: string;
	style?: CSSProperties;

	bordered?: boolean;
	adaptedWithCardsMargins?: boolean;
}

export const MoreButton = (props: IMoreButton) => {
	return (
		<Button
			onClick={props.onLoadMore}
			className={cx(
				styles.button,
				props.className,
				props.bordered && styles.bordered,
				props.adaptedWithCardsMargins && styles.margin_like_card
			)}
			style={props.style}
		>
			{props.text || "Загрузить еще"} <Icon name={props.icon || "arrow-down"} className={styles.icon} />
		</Button>
	);
};

MoreButton.defaultProps = {
	adaptedWithCardsMargins: true,
};
