import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />

					<link type="image/x-icon" rel="shortcut icon" href="/favicon/favicon.ico" />

					<link type="image/png" sizes="16x16" rel="icon" href="/favicon/favicon-16x16.png" />
					<link type="image/png" sizes="32x32" rel="icon" href="/favicon/favicon-32x32.png" />
					<link type="image/png" sizes="96x96" rel="icon" href="/favicon/favicon-96x96.png" />
					<link type="image/png" sizes="120x120" rel="icon" href="/favicon/favicon-120x120.png" />

					<link type="image/png" sizes="72x72" rel="icon" href="/favicon/android-icon-72x72.png" />
					<link type="image/png" sizes="96x96" rel="icon" href="/favicon/android-icon-96x96.png" />
					<link type="image/png" sizes="144x144" rel="icon" href="/favicon/android-icon-144x144.png" />
					<link type="image/png" sizes="192x192" rel="icon" href="/favicon/android-icon-192x192.png" />
					<link type="image/png" sizes="512x512" rel="icon" href="/favicon/android-icon-512x512.png" />
					<link rel="manifest" href="/favicon/manifest.json" />

					<link sizes="57x57" rel="apple-touch-icon" href="/favicon/apple-touch-icon-57x57.png" />
					<link sizes="60x60" rel="apple-touch-icon" href="/favicon/apple-touch-icon-60x60.png" />
					<link sizes="72x72" rel="apple-touch-icon" href="/favicon/apple-touch-icon-72x72.png" />
					<link sizes="76x76" rel="apple-touch-icon" href="/favicon/apple-touch-icon-76x76.png" />
					<link sizes="114x114" rel="apple-touch-icon" href="/favicon/apple-touch-icon-114x114.png" />
					<link sizes="120x120" rel="apple-touch-icon" href="/favicon/apple-touch-icon-120x120.png" />
					<link sizes="144x144" rel="apple-touch-icon" href="/favicon/apple-touch-icon-144x144.png" />
					<link sizes="152x152" rel="apple-touch-icon" href="/favicon/apple-touch-icon-152x152.png" />
					<link sizes="180x180" rel="apple-touch-icon" href="/favicon/apple-touch-icon-180x180.png" />

					<meta name="msapplication-TileColor" content="#2b5797" />
					<meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
					<meta name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />
					<meta name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />
					<meta name="msapplication-wide310x150logo" content="/favicon/mstile-310x310.png" />
					<meta name="msapplication-square310x310logo" content="/favicon/mstile-310x150.png" />
					<meta name="application-name" content="Yan Yun" />
					<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				</Head>
				<body>
					<div id="modal-root" style={{ position: "absolute", zIndex: 10000 }} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
