const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const withAntdLess = require("next-plugin-antd-less");

module.exports = withBundleAnalyzer(
	withAntdLess({
		lessVarsFilePath: "./src/shared/ui/ant/variables.less",

		target: "serverless",

		env: {
			PROJECT_PREFIX: "yanyun",
			API_URL: process.env.API_URL || "https://yanyun/api",
			IMAGE_BASE_URL: process.env.IMAGE_BASE_URL || "https://yanyun",
			SENTRY_DNS: "todo",
		},

		images: {
			minimumCacheTTL: 31_622_400, // 1 year
			domains: ["https://yanyun"],
		},
		pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
	})
);
