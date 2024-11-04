import { useState } from 'react';
import { useLocalStorage } from '../../../hooks';
import UserContext from '../../user.context/user.context';

const UserProvider = ({ children }) => {
	const [saveAuthUser, logout, currentUser] = useLocalStorage('users');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
    
	const logoutCurrentUser = () => {
		setIsAuthenticated(false);
		if (currentUser) {
			logout(currentUser);
		}

	};

	const saveCurrentUser = (newCurrentUser) => {
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