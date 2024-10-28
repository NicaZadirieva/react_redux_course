import { useEffect, useState } from 'react';

function useLocalStorage(profileKey) {
	const [profile, setProfile] = useState([]);
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		if (profile) {
			localStorage.setItem(profileKey, JSON.stringify(profile));
			setCurrentUser(profile[profile.length - 1]?.name); // save current user as a last saved user in profile
		} 
        
	}, [profile, profileKey]);

	const saveAuthUser = (userName) => {
		// [{name: 'Вася', isLogined: true}] успешный вход
		// [{name: 'Вася', isLogined: false}] выход
		const oldProfile = [...profile];
		const index = oldProfile.findIndex((user) => user.name === userName);
		if( index == -1 ) {
			// this is a new user
			setProfile([...oldProfile, {name: userName, isLogined: true}]);
			// save current user as a last saved user in profile
		} else {
			// this is an existing user
			const newProfile = [...oldProfile];
			newProfile[index].isLogined = true;
			setProfile(newProfile);
		}
	};

	const logout = (userName) => {
		const oldProfile = [...profile];
		const index = oldProfile.findIndex((user) => user.name === userName);
		console.log(index);
		if( index != -1 ) {
			// this is an existing user
			const newProfile = [...oldProfile];
			newProfile[index].isLogined = false;
			setProfile(newProfile);
		}
	};

	return [saveAuthUser, logout, currentUser];
}

export default useLocalStorage;