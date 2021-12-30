import React, { CSSProperties } from "react";
import { Empty, List as AntdList } from "antd";
import { ListLocale } from "antd/lib/list";

export interface IList<T> {
	data: {
		isValidating: boolean;
		data?: {
			data?: T[];
		};
		pagination?: {
			total?: number;
			current: number;
			pageSize: number;
		};
	};
	renderItem: (data: T) => React.ReactNode;
	onChangePage?: (page: number, pageSize?: number) => void;
	showSizeChanger?: boolean;
	locale?: ListLocale;
	style?: CSSProperties;
	className?: string;
}

export const List = <T extends any>(props: IList<T>) => (
	<AntdList
		loading={!props.data.data && props.data.isValidating}
		dataSource={props.data.data?.data}
		renderItem={props.renderItem}
		pagination={
			props.data.pagination && {
				...props.data.pagination,
				hideOnSinglePage: true,
				showSizeChanger: props.showSizeChanger,
				onChange: props.onChangePage,
				responsive: true,
			}
		}
		locale={props.locale}
		style={props.style}
		className={props.className}
	/>
);

List.defaultProps = {
	showSizeChanger: false,
	locale: {
		emptyText: <Empty description="Нет данных" image={Empty.PRESENTED_IMAGE_SIMPLE} />,
	},
};
