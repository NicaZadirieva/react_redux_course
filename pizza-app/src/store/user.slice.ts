import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginResponse } from '../interfaces/auth.interface';
import { loadState } from './storage';

export const JWT_PERSISTENT_STATE = 'userData';
export interface UserPersistentState {
    jwt: string | null;
}
export interface UserState {
    jwt: string | null;
}

const initialState : UserState = {
	jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null
};

export const login = createAsyncThunk('user/login', 
	async (params: {email: string, password: string}) => {
		const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
			email: params.email,
			password: params.password
		});
		return data;
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.jwt = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
			state.jwt = action.payload.access_token;
			localStorage.setItem(JWT_PERSISTENT_STATE, JSON.stringify({ jwt: action.payload.access_token }));
		});
		builder.addCase(login.rejected, (state) => {
			state.jwt = null;
			localStorage.removeItem(JWT_PERSISTENT_STATE);
		});
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;