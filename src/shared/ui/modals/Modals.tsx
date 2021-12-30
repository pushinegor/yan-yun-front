/* eslint-disable */

import React, { useCallback, useEffect, useState } from "react";
import { IModal } from "shared/lib/forms/IModal";

interface IModalState {
	modal: any;
	props: any;
}

let state: IModalState = { modal: null, props: {} };
let updaters: ((value: IModalState) => void)[] = [];

type OptionalIfEmpty<T> = {} extends T ? [{}?] : [T];
type OmitType<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>;

const useCurrentModal = () => {
	const [value, update] = useState<IModalState>(state);

	useEffect(() => {
		updaters.push(update);
		return () => {
			updaters = updaters.filter((it) => it !== update);
		};
	}, []);

	return value;
};

const updateCurrentModal = (value: IModalState) => {
	state = value;
	updaters.forEach((it) => it(value));
};

export class Modals {
	static open<T>(modal: React.ComponentType<T>, props: OmitType<T, IModal>) {
		updateCurrentModal({ modal, props });
	}

	static close(modal?: React.ComponentType<any>) {
		if (modal && state.modal !== modal) return;

		updateCurrentModal({ modal: null, props: {} });
	}

	static prepare<RequiredProps, Props extends Partial<Omit<RequiredProps, "close">>>(
		modal: React.ComponentType<RequiredProps>,
		initProps: Partial<Props> = {}
	) {
		type RestProps = Omit<OmitType<RequiredProps, Props>, "close">;

		return (...props: OptionalIfEmpty<RestProps>) => {
			const restProps = props[0] instanceof Event ? {} : props[0];
			updateCurrentModal({ modal, props: { ...initProps, ...restProps } });
		};
	}
}

export const useModal = <RequiredProps, Props extends Partial<Omit<RequiredProps, "close">>>(
	modal: React.ComponentType<RequiredProps>,
	initProps: Partial<Props> = {}
) => {
	return useCallback(Modals.prepare(modal, initProps), [
		modal,
		...Object.keys(initProps),
		...Object.values(initProps),
	]);
};

export const ModalsRoot = () => {
	const state = useCurrentModal();
	if (!state.modal) return null;
	return <state.modal close={() => Modals.close(state.modal)} {...state.props} />;
};
