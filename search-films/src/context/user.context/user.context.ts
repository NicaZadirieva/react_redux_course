import { createContext } from 'react';

const defaultValue = {
	currentUser: null,
	isAuthenticated: false
};

const UserContext = createContext(defaultValue);

export default UserContext;