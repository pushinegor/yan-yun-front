import { useReducer } from "react";

export interface IDrawerState {
	visible: boolean;
	show: () => void;
	hide: () => void;
}

enum DrawerActionsEnum {
	SHOW_DRAWER = "showDrawer",
	HIDE_DRAWER = "hideDrawer",
}

type IAction = { type: DrawerActionsEnum.SHOW_DRAWER } | { type: DrawerActionsEnum.HIDE_DRAWER };

export const drawerReducer = (state: IDrawerState, action: IAction) => {
	switch (action.type) {
		case DrawerActionsEnum.SHOW_DRAWER:
			return { ...state, visible: true };
		case DrawerActionsEnum.HIDE_DRAWER:
			return { ...state, visible: false };
		default:
			return state;
	}
};

export const useDrawerReducer = () => {
	const [state, dispatch] = useReducer(drawerReducer, {
		visible: false,
		show: () => dispatch({ type: DrawerActionsEnum.SHOW_DRAWER }),
		hide: () => dispatch({ type: DrawerActionsEnum.HIDE_DRAWER }),
	});

	return state;
};
