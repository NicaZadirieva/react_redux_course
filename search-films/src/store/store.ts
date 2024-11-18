import { configureStore } from '@reduxjs/toolkit';
import favourSlice, { FILMS_PERSISTENT_STATE } from './films.slice';
import { saveState } from './storage';
import userSlice, { USER_PERSISTENT_STATE } from './user.slice';

export const store = configureStore({
	// TODO: для полноценной работы приложения необходимо дореализовать user.slice.ts по аналогии с pizza-app
	reducer: {
        favors: favourSlice,
		users: userSlice
	}
});

store.subscribe(() => {
	saveState({ favorites: store.getState().favors.favorites}, FILMS_PERSISTENT_STATE);
	
	saveState({ data: store.getState().users.data, currentUser: store.getState().users.currentUser},
	USER_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;