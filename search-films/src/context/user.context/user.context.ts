import { createContext } from 'react';

export interface IUserContext {
	currentUser: string;
	isAuthenticated: boolean;
	// NB!: Needs to define the properties and methods for the UserContext
	logoutCurrentUser?: () => void;
	setIsAuthenticated?: (isAuth: boolean) => void;
	saveCurrentUser?: (currentUser: string) => void;
};

const defaultValue : IUserContext = {
	currentUser: '',
	isAuthenticated: false
};

const UserContext = createContext(defaultValue);

export default UserContext;