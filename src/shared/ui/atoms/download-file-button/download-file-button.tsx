import React, { CSSProperties } from "react";
import { Button } from "shared/ui/ant";
import { Icon } from "shared/ui/atoms/icon";
import styles from "./download-file-button.module.scss";
import cx from "classnames";
import { Typography } from "antd";
import { getIconNameFromFileName } from "shared/lib";

export interface IFile {
	id: string;
	name: string;
	file: string;
}

interface IDownloadFileButton {
	data: IFile;

	className?: string;
	style?: CSSProperties;
}

export const DownloadFileButton = (props: IDownloadFileButton) => {
	const it = props.data;

	const iconName = getIconNameFromFileName(it.name);

	const downloadFile = (file: string) => {};

	return (
		<Button
			onClick={() => downloadFile(it.file)}
			icon={<Icon name={iconName} overrideColor={false} className={styles.icon} />}
			className={cx(styles.button, props.className)}
			style={props.style}
		>
			<Typography.Paragraph ellipsis>{it.name}</Typography.Paragraph>
		</Button>
	);
};
