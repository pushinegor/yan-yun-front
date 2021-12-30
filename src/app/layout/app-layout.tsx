import React from "react";
import { NextRouter } from "next/router";
import { AdminLayout } from "modules/layout";

export interface IAppLayout {
	router: NextRouter;
	children?: React.ReactNode;
}

export const AppLayout = (props: IAppLayout) => {
	const role = "admin";

	if (role === "admin") {
		return <AdminLayout>{props.children}</AdminLayout>;
	}

	return <>{props.children}</>;
};
