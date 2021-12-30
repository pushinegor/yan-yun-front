import React from "react";
import cx from "classnames";

interface IModalButtons {
	children?: React.ReactNode;
	noTop?: boolean;
}

const ModalButtons = (props: IModalButtons) => (
	<div className={cx("modal__buttons", props.noTop && "modal__buttons--no_top")}>{props.children}</div>
);

export default ModalButtons;
