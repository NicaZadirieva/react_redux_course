import { useState } from 'react';
import { useLocalStorage } from '../../../hooks';
import UserContext from '../user.context';
import { UserProviderProps } from './user.provider.props';

const UserProvider = ({ children } : UserProviderProps) => {
	const {saveAuthUser, logout, currentUser} = useLocalStorage('users');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
    
	const logoutCurrentUser = () => {
		setIsAuthenticated(false);
		if (currentUser) {
			logout(currentUser);
		}

	};

	const saveCurrentUser = (newCurrentUser: string) => {
		saveAuthUser(newCurrentUser);
		setIsAuthenticated(true);
	};


	return (
		<UserContext.Provider value={{
			isAuthenticated, setIsAuthenticated,
			currentUser, 
			saveCurrentUser, logoutCurrentUser}}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;