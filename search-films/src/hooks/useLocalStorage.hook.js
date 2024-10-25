import { useEffect, useState } from 'react';

export function useLocalStorage (profileKey) {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(profileKey));
		if (res) {
			setProfile(res);
		}
        
	}, [profile]);

	const saveAuthUser = (userName) => {
		// [{name: 'Вася', isLogined: true}] успешный вход
		// [{name: 'Вася', isLogined: false}] выход
		const oldProfile = JSON.parse(localStorage.getItem(profileKey));
		const index = oldProfile.findIndex(user => user.name === userName);
		if( index == -1 ) {
			// this is a new user
			setProfile([...oldProfile, {name: userName, isLogined: true}]);
		} else {
			// this is an existing user
			const newProfile = [...oldProfile];
			newProfile[index].isLogined = true;
			setProfile(newProfile);
		}
		
	};

	const logout = (userName) => {
		const oldProfile = JSON.parse(localStorage.getItem(profileKey));
		const index = oldProfile.findIndex(user => user.name === userName);
		if( index != -1 ) {
			// this is an existing user
			const newProfile = [...oldProfile];
			newProfile[index].isLogined = false;
			setProfile(newProfile);
		}
	};

	return [saveAuthUser, logout];
}