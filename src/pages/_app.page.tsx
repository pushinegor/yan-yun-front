import React from "react";
import App from "next/app";
import { AppLayout } from "app/layout/app-layout";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";
import Head from "next/head";
import { AppContextProvider } from "shared/context/app-context.provider";

import "modules/docs/shared/markdown-editor/markdown-editor.scss";
import "shared/ui/ant/override/index.scss";
import "shared/ui/styles/app.scss";

moment.locale("ru");

class MyApp extends App<{ Component: any; pageProps: any } & WithRouterProps> {
	render() {
		let { Component, pageProps, router } = this.props;
		return (
			<>
				<Head>
					<title>Yan Yun</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<ConfigProvider locale={ruRU}>
					<AppContextProvider>
						<AppLayout router={router}>
							<Component {...pageProps} />
						</AppLayout>
					</AppContextProvider>
				</ConfigProvider>
			</>
		);
	}
}

export default withRouter(MyApp);
