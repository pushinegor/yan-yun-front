import React, { CSSProperties } from "react";
import { DownloadFileButton, IFile } from "shared/ui/atoms/download-file-button";
import styles from "./files-list.module.scss";
import cx from "classnames";
import { Typography } from "antd";

interface IFilesList {
	data?: IFile[];

	placeholder?: string;
	hidePlaceholder?: boolean;

	className?: string;
	buttonClassName?: string;
	style?: CSSProperties;
}

export const FilesList = (props: IFilesList) => {
	if ((!props.data || props.data.length === 0) && !props.hidePlaceholder)
		return (
			<Typography.Paragraph className={styles.placeholder}>
				{props.placeholder || "Файл не загружен"}
			</Typography.Paragraph>
		);

	return (
		<div className={cx(styles.container, props.className)} style={props.style}>
			{props.data?.map((it) => (
				<DownloadFileButton key={it.id} data={it} className={props.buttonClassName} />
			))}
		</div>
	);
};
