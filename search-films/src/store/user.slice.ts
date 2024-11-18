import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const USER_PERSISTENT_STATE = 'users';

export interface UserPersistentState {
    name: string
}

export interface UserState {
    id: number,
    name: string,
    isLogined: boolean
};

export interface UsersState {
    data: UserState[];
    currentUser: UserState | null;
}

const loadedData = loadState<UsersState>(USER_PERSISTENT_STATE);
const initialState : UsersState = {
	data: loadedData?.data ?? [],
    currentUser: loadedData?.currentUser ?? null
};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action : PayloadAction<UserPersistentState>) => {
            const newUser = {
                id: state.data.length + 1,
                name: action.payload.name,
                isLogined: true
            };

			state.data = [newUser, ...state.data];
            state.currentUser = newUser;
		},
		logout: (state, action : PayloadAction<UserState>) => {
            state.data = state.data.filter(user => user.id !== action.payload.id);
            state.currentUser = state.data.find(user => user.isLogined) || null;
        }
	}
	}
);

export default userSlice.reducer;
export const userActions = userSlice.actions;