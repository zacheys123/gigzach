import React, { useContext, useReducer } from 'react';
import { AuthProvider } from '../config';
import { auth, auth_state } from '../reducers/auth_reducer';
const AuthContext = ({ children }) => {
	const [authstate, setAuth] = useReducer(auth, auth_state);

	let value = { authstate, setAuth };
	return (
		<AuthProvider.Provider value={value}>
			{children}
		</AuthProvider.Provider>
	);
};

export const useAuthContext = () => {
	const context = useContext(AuthProvider);
	if (!context) {
		throw new Error(
			'useAuthContext must be used within AuthContextProvider',
		);
	}
	return context;
};
export default AuthContext;
