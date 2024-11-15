import { configureStore } from '@reduxjs/toolkit';
import userReducer, { JWT_PERSISTENT_STATE } from '../store/user.slice';
import cartSlice from './cart.slice';
import { saveState } from './storage';


export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartSlice
	}

});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;