import React from "react";
import { Tag } from "./tag";

export default {
	title: "ui/tag",
	component: Tag,
};

export const primary = (args) => <Tag {...args}>Primary</Tag>;
primary.args = {
	appearance: "primary",
};
