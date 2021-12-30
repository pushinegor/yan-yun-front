import React, { CSSProperties } from "react";
import cx from "classnames";
import styles from "./icon.module.scss";

export type IconName =
	| "actions"
	| "alert"
	| "archive"
	| "arrow-down"
	| "arrow-left"
	| "arrow-right"
	| "arrow-up"
	| "attach"
	| "balance"
	| "burger"
	| "calculate"
	| "calendar"
	| "cancel"
	| "chat"
	| "check"
	| "close"
	| "cloud"
	| "comment"
	| "copy"
	| "copyright"
	| "db"
	| "delete"
	| "document"
	| "dot"
	| "download"
	| "dribbble"
	| "edit"
	| "excel"
	| "eye-off"
	| "eye-on"
	| "facebook"
	| "facebook-messenger"
	| "favourite"
	| "file"
	| "filter"
	| "folder_closed"
	| "folder_opened"
	| "google"
	| "history"
	| "image"
	| "increase"
	| "info"
	| "instagram"
	| "jpeg"
	| "library"
	| "link"
	| "list"
	| "load"
	| "lock"
	| "log-out"
	| "logo"
	| "logo_mobile"
	| "mail-ru"
	| "map"
	| "message"
	| "news"
	| "notification_off"
	| "notification_on"
	| "odnoklassniki"
	| "pdf"
	| "percent"
	| "phone"
	| "play"
	| "power-point"
	| "question"
	| "refresh"
	| "rub"
	| "search"
	| "send"
	| "settings"
	| "site"
	| "skype"
	| "sort-down"
	| "sort-up"
	| "star"
	| "star_filled"
	| "telegram"
	| "text"
	| "time"
	| "title"
	| "turn-left"
	| "turn-right"
	| "twitter"
	| "user"
	| "viber"
	| "vk"
	| "whats-app"
	| "word"
	| "youtube"
	| "zip"
	| "zoom"
	| "plus"
	| "gift"
	| "checkbox_minus"
	| "checkbox_off"
	| "checkbox__on";

interface IIcon {
	name: IconName;
	onClick?: () => void;

	className?: string;
	style?: CSSProperties;

	overrideColor: boolean;
}

const loadIcon = (name: IconName, color: string = "black"): string => {
	return require(`!raw-loader!./svg/${name}.svg`).default.replace(/fill="none"/g, `fill="${color}"`);
};

export const Icon = (props: IIcon) => (
	<span
		className={cx(styles.icon_wrap, props.overrideColor && styles.override_color, props.className, "app-icon")}
		style={props.style}
		dangerouslySetInnerHTML={{ __html: loadIcon(props.name) }}
		onClick={props.onClick}
	/>
);

Icon.defaultProps = {
	overrideColor: true,
};
