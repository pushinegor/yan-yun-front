import React from "react";
import { PageHeader, Table, Typography } from "antd";
import { UsersLayout } from "pages/admin/users/_layout";
import { api, UsersListRoleEnum } from "shared/api";
import { useRouter } from "next/router";
import { Button, Icon } from "shared/ui";

const AdminUsersIndexPage = () => {
	const router = useRouter();

	const role = router.query["role"] as string;

	const usersList = api.user.useUsersList(role as any);

	const usersListMapped = usersList.data?.map((it, key) => ({ ...it, key: key + 1 }));

	const isAdmin = role === UsersListRoleEnum.admin;

	const pageTitle = role === UsersListRoleEnum.customer ? "Покупатели" : isAdmin ? "Администраторы" : "Пользователи";

	return (
		<UsersLayout>
			<PageHeader
				title={<Typography.Title>{pageTitle}</Typography.Title>}
				extra={
					isAdmin && (
						<Button type="primary" icon={<Icon name="plus" />}>
							Добавить
						</Button>
					)
				}
			/>

			<Table
				dataSource={usersListMapped}
				columns={[
					{
						title: "№",
						key: "key",
						dataIndex: "key",
						render: (col) => col + ".",
					},
					{
						title: "ФИО",
						key: "firstName",
						dataIndex: "firstName",
						render: (col, row) => `${row.lastName || ""} ${row.firstName || ""} ${row.middleName || ""}`,
					},
					{
						title: "E-mail",
						key: "email",
						dataIndex: "email",
					},
					{
						title: "Телефон",
						key: "phone",
						dataIndex: "phone",
					},
					{
						title: "Адрес",
						key: "city",
						dataIndex: "city",
					},
				]}
			/>
		</UsersLayout>
	);
};

export default AdminUsersIndexPage;
