import React from "react";
import { Icon } from "./Icon";

export default {
	title: "ui/icon",
	component: Icon,
};

export const basic = (args) => <Icon {...args} />;
basic.args = {
	name: "chat",
};
