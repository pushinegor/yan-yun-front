import React, { useState } from "react";
import { Button as AntdButton, ButtonProps } from "antd";

function isPromise(promise: any) {
	return !!promise && typeof promise.then === "function";
}

export const Button = (props: ButtonProps) => {
	const [loading, setLoading] = useState(false);

	const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		if (loading || props.loading || props.disabled) return;
		e.preventDefault();
		try {
			const result = props.onClick?.(e);
			if (isPromise(result)) {
				setLoading(true);
				await result;
			}
		} finally {
			setLoading(false);
		}
	};

	return <AntdButton {...props} loading={loading || props.loading} onClick={props.onClick && onClick} />;
};

Button.defaultProps = {};
