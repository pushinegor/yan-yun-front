import React, { useState } from "react";
import { MobileDrawerMenu, MobileNav, PanelLayout } from "shared/ui";
import { AdminLayoutSidebarSidebar } from "modules/layout/admin/_sidebar";
import { useRouter } from "next/router";
import AppRouter from "router";
import { AdminBottomSidebar } from "modules/layout/admin/_bottom-sidebar";

interface IAdminLayout {
	children?: React.ReactNode;
}

export const AdminLayout = (props: IAdminLayout) => {
	const router = useRouter();

	const [bottomMenuOpened, setBottomMenuOpened] = useState(false);

	return (
		<>
			<PanelLayout
				headerExtra={<></>}
				sidebar={<AdminLayoutSidebarSidebar />}
				mobileSidebar={<MobileDrawerMenu />}
				isBottomSidebarOpened={bottomMenuOpened}
				setIsBottomSidebarOpened={setBottomMenuOpened}
				bottomSidebar={<AdminBottomSidebar />}
			>
				<>{props.children}</>
			</PanelLayout>

			<MobileNav
				links={[
					{
						href: "",
						label: "Пользователи",
						icon: "user",
						active: router.asPath.includes("users"),
					},
				]}
			/>
		</>
	);
};
