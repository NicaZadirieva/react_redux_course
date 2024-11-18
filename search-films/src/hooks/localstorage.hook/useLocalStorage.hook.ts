import { useEffect, useState } from 'react';
import { LocalStorageValue, ProfileElement } from './useLocalStorage';

// TODO: Deprecated
function useLocalStorage(profileKey: string) : LocalStorageValue {
	const [profile, setProfile] = useState<ProfileElement[]>([]);
	const [currentUser, setCurrentUser] = useState(/*defaultValue=*/'');

	useEffect(() => {
		if (profile) {
			const profileLastElement : ProfileElement = profile[profile.length - 1];
			localStorage.setItem(profileKey, JSON.stringify(profile));
			setCurrentUser(profileLastElement?.name); // save current user as a last saved user in profile
		} 
        
	}, [profile, profileKey]);

	const saveAuthUser = (userName: string) => {
		// [{name: 'Вася', isLogined: true}] успешный вход
		// [{name: 'Вася', isLogined: false}] выход
		const oldProfile : Array<ProfileElement> = [...profile];
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

	const logout = (userName: string) => {
		const oldProfile = [...profile];
		const index = oldProfile.findIndex((user) => user.name === userName);
		if( index != -1 ) {
			// this is an existing user
			const newProfile = [...oldProfile];
			newProfile[index].isLogined = false;
			setProfile(newProfile);
		}
	};

	return {saveAuthUser, logout, currentUser};
}

export default useLocalStorage;