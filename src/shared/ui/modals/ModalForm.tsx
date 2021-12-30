import React from "react";
import { IUseModalForm } from "shared/lib/forms/useModalForm";
import { Form, Modal } from "antd";
import { LegacyButtonType } from "antd/lib/button/button";

interface IModalForm {
	children?: React.ReactNode;
	form: IUseModalForm<any>;
	title?: React.ReactNode;
	className?: string;
	okType?: LegacyButtonType;
	okText?: React.ReactNode;
	disabled?: boolean;
	width?: string | number;
	footer?: React.ReactNode;
}

export const ModalForm = (props: IModalForm) => (
	<Modal
		width={props.width}
		visible={true}
		onCancel={props.form.onCancel}
		className={props.className}
		onOk={props.form.onSubmit}
		confirmLoading={props.form.submitProps.loading}
		okButtonProps={{ disabled: props.form.submitProps.disabled || props.disabled }}
		title={props.title}
		okType={props.okType}
		okText={props.okText ?? "Применить"}
		cancelText="Отменить"
		footer={props.footer}
	>
		<Form onFinish={props.form.onSubmit} className="form" layout="vertical">
			{props.children}
		</Form>

		<p className="form-error">{props.form.globalError}</p>
	</Modal>
);
