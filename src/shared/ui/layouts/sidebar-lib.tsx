import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Route } from "antd/es/breadcrumb/Breadcrumb";
import { IRouterPage } from "shared/lib/router";

export const useSelectedMenus = () => {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState<Route[]>();

	useEffect(() => {
		if (router) {
			const linkPath = router.pathname.split("/");
			const linkAsPath = router.asPath.split("/");
			linkPath.shift();
			linkAsPath.shift();

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumbName: "/" + linkAsPath.slice(0, i + 1).join("/"),
					path: "/" + linkPath.slice(0, i + 1).join("/"),
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [router]);

	return breadcrumbs?.map((it) => it.path);
};

export const menuProps = (page: IRouterPage) => ({
	onClick: page.open,
	key: page.link.href,
});
