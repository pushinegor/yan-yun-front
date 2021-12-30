import React, { CSSProperties } from "react";
import { Avatar, Button, ButtonProps, Form, message, Upload, UploadProps } from "antd";
import { FieldError } from "react-hook-form/dist/types/errors";
// import LocalStorage from "shared/lib/LocalStorage";
// import { ACCESS_TOKEN_KEY } from "shared/api";
import { Icon } from "shared/ui/atoms";
import styles from "./ImageInput.module.scss";
import cx from "classnames";

export interface IImageInput {
	label?: React.ReactNode;
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
	onBlur?: () => void;
	autoFocus?: boolean;
	description?: React.ReactNode;
	error?: FieldError;

	className?: string;
	imageClassName?: string;
	imageWrapperClassName?: string;
	buttonsWrapClassName?: string;

	imageSize?: number;
	uploadButtonProps?: ButtonProps;
	style?: CSSProperties;
	shape?: "circle" | "square";

	loadButtonText?: string;
	editButtonText?: string;
	deleteButtonText?: string;
}

/*const headers = {
	get authorization() {
		const token = LocalStorage.getItem(ACCESS_TOKEN_KEY);
		return token ? `Bearer ${token}` : "";
	}
};*/

export const ImageInput = ({ label, ...props }: IImageInput) => {
	const uploadProps: UploadProps = {
		name: "image",
		// headers: headers,
		action: process.env.API_URL + "/common/images",
		multiple: false,
		showUploadList: false,
		onChange: (info) => {
			if (info.file.status !== "uploading") {
				// console.log(info.file, info.fileList);
			}
			if (info.file.status === "done") {
				const image = info.file.response?.data || {};
				props.onChange?.(image.id);
			} else if (info.file.status === "error") {
				message.error(`Ошибка загрузки файла ${info.file.name}.`);
			}
		},
	};

	return (
		<Form.Item label={label} style={props.style} className={props.className}>
			{props.description && <div className="form-item-description">{props.description}</div>}

			{!props.value && (
				<Upload {...uploadProps} className={styles.upload}>
					<Button icon={<Icon name="load" />} {...props.uploadButtonProps}>
						{props.loadButtonText || "Загрузить"}
					</Button>
				</Upload>
			)}

			{props.value && (
				<div className={cx(styles.input_wrapper, props.imageWrapperClassName)}>
					<Avatar
						style={{ flexShrink: 0 }}
						shape={props.shape}
						size={props.imageSize || 80}
						className={props.imageClassName}
						src={process.env.API_URL + "/common/images/" + props.value}
					/>

					<div className={cx(styles.buttons, props.buttonsWrapClassName)}>
						<Upload {...uploadProps}>
							<Button icon={<Icon name="refresh" />}>{props.editButtonText || "Обновить фото"}</Button>
						</Upload>

						<Button danger icon={<Icon name="delete" />} onClick={() => props.onChange?.(undefined!)}>
							{props.deleteButtonText || "Удалить фото"}
						</Button>
					</div>
				</div>
			)}

			{props.error?.message && <p className="form-item-error">{props.error.message}</p>}
		</Form.Item>
	);
};

ImageInput.defaultProps = {
	shape: "square",
};
