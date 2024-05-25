/** @format */

import { createContext, useEffect, useMemo, useState } from "react";
import { UserAPI } from "../api/user";
import { secureStore } from "../services/secure-store";
import IUser from "../types/IUser";
// ============================================================

export interface IUserData {
	tokens: { accessToken: string } | null;
	user: IUser | null;
}

export enum verificationStatus {
	UNVERIFIED = "Unverified",
	PENDING = "Pending",
	CLOSED = "Closed",
	VERIFIED = "Verified",
}

export interface IAuth {
	auth: IUserData;
	isReady: boolean;
	isLogged: boolean;
	isActive: boolean;
	showVerificationModal: boolean;
	set: (arg: any) => void;
	clear: () => void;
	update: () => void;
	toggleVerificationModal: () => void;
}

const initialState: IUserData = {
  tokens: null,
  user: null,
};

export const AuthContext = createContext<IAuth>({
	auth: initialState,
	isReady: false,
	isLogged: false,
	isActive: true,
	showVerificationModal: false,
	set: (arg: any) => {},
	clear: () => {},
	update: () => {},
	toggleVerificationModal: () => {},
});

// ============================================================

const AuthProvider = ({ children }: any) => {
	const [auth, setAuth] = useState<IUserData>(initialState);
	const [showVerificationModal, setShowVerificationModal] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const [isActive, setIsActif] = useState<boolean>(true);

	/**
	 * User activity
	 * @returns state
	 * */

	const isLogged = useMemo(() => {
		return !!auth?.tokens && !!auth?.user;
	}, [auth]);

	/**
	 * toggle verification modal
	 * @returns void
	 * */

	const toggleVerificationModal = () => {
		setShowVerificationModal(!showVerificationModal);
	};

	/**
	 * Set / Load auth from local storage
	 * @returns void
	 * */

	const set = async (data: any) => {
		setAuth({ ...data });
	};

	/**
	 * update user auth
	 * @returns void
	 * */

	const update = async () => {
		const user = (await UserAPI.get()).data;
		setShowVerificationModal(!user.verified);
		if (user) set({ ...auth, user });
	};

	/**
	 * clear auth from local storage
	 * @returns void
	 * */

	const clear = () => {
		setAuth({ ...auth!, tokens: null });
		secureStore.clear();
	};

	/**
	 * setup auth from local storage
	 * @returns void
	 * */

	const setup = async () => {
		const authentication = await secureStore.get("auth");

		if (authentication) setAuth({ tokens: authentication.tokens, user: authentication.user });
		else await secureStore.set('auth', initialState as any);

		setIsReady(true);
	};

	/**
	 * Load auth from local storage if found
	 * @returns void
	 * */

	useEffect(() => {
		setup();
	}, []);

	useEffect(() => {
		// console.log(auth);
	}, [isReady]);

	return (
		<AuthContext.Provider
			value={{
				auth,
				showVerificationModal,
				isReady,
				isLogged,
				isActive,
				set,
				clear,
				update,
				toggleVerificationModal,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
