import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
	reducer: {
	}

});

store.subscribe(() => {
	//saveState({ favorites: store.getState().films.favorites}, FILM_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;