import React, { useContext } from "react";
import { IDrawerState, useDrawerReducer } from "shared/context/reducers/drawer-reducer";

interface IState {
	drawer: IDrawerState;
}

const initialState: IState = {
	drawer: {
		visible: false,
		show: () => {},
		hide: () => {},
	},
};

const AppContext = React.createContext(initialState);

export const useAppContext = () => {
	return useContext(AppContext);
};

export const AppContextProvider = (props: { children: React.ReactNode }) => {
	const drawerState = useDrawerReducer();

	return (
		<AppContext.Provider
			value={{
				drawer: drawerState,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
