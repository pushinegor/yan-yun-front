import React, { useEffect } from "react";
import { Hr, Icon, SecondSidebarLayout, SidebarFilter, SidebarSearch } from "shared/ui";
import { useRouter } from "next/router";
import { Typography } from "antd";
import { updateQuery } from "shared/lib";
import { UsersListRoleEnum } from "shared/api";

interface IUsersLayout {
	children: React.ReactNode;
}

export const UsersLayout = (props: IUsersLayout) => {
	const router = useRouter();

	const search = router.query["search"] as string;
	const role = router.query["role"] as string;
	const status = router.query["status"] as string;
	const sort = router.query["sort"] as string;

	useEffect(() => {}, []);

	return (
		<SecondSidebarLayout
			title="Пользователи"
			sidebar={
				<>
					<Typography.Title>Пользователи</Typography.Title>

					<SidebarSearch
						value={search}
						onChange={(value) => updateQuery({ search: value, status, sort, role })}
						placeholder="Искать по ФИО"
						style={{ marginBottom: 20 }}
					/>

					<SidebarFilter
						value={role}
						onChange={(value) => updateQuery({ search, status, sort, role: value })}
						options={[
							{ value: UsersListRoleEnum.customer, label: "Покупатели" },
							{ value: UsersListRoleEnum.admin, label: "Администраторы" },
						]}
					/>
					<Hr />

					<SidebarFilter
						buttonsStyle={{ width: "100%" }}
						label={<Typography.Title level={2}>Сортировка</Typography.Title>}
						value={sort}
						onChange={(value) => updateQuery({ search, status, sort: value, role })}
						options={[
							{
								value: "date",
								label: <div style={{ marginRight: "auto" }}>По дате регистрации</div>,
								badge: <Icon name="sort-up" />,
							},
							{ value: "name", label: "По ФИО" },
						]}
					/>
				</>
			}
		>
			{props.children}
		</SecondSidebarLayout>
	);
};
