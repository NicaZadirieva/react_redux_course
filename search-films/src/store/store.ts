import { configureStore } from '@reduxjs/toolkit';
import favourSlice, { FILMS_PERSISTENT_STATE } from './films.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
        favors: favourSlice
	}
});

store.subscribe(() => {
	saveState({ favorites: store.getState().favors.favorites}, FILMS_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;