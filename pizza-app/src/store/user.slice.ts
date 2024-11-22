import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../helpers/API';
import { LoginResponse } from '../interfaces/auth.interface';
import { ProfileResponse } from '../interfaces/profile.interface';
import { loadState } from './storage';
import { RootState } from './store';

export const JWT_PERSISTENT_STATE = 'userData';
export interface UserPersistentState {
    jwt: string | null;
}
export interface UserState {
    jwt: string | null;
	loginErrorMsg?: string;
	registerErrorMsg?: string;
	profile?: ProfileResponse;
}

const initialState : UserState = {
	jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null
};

export const login = createAsyncThunk('user/login', 
	async (params: {email: string, password: string}) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email: params.email,
				password: params.password
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data?.message);
			}

		}
	}
);

export const getProfile = createAsyncThunk<ProfileResponse, void, {state: RootState}>('user/profile', 
	async (_, thunkApi) => {
		const jwt = thunkApi.getState().user.jwt;
		const { data } = await axios.get<ProfileResponse>(`${PREFIX}/user/profile`, {
			headers: { 'Authorization': 'Bearer ' + jwt }
		});
		return data;
	}
);

export const register = createAsyncThunk('user/register', 
	async (params: {email: string, password: string, name: string}) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/register`, {
				email: params.email,
				password: params.password,
				name: params.name
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data?.message);
			}

		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.jwt = null;
		},
		clearLoginError: (state) => {
			state.loginErrorMsg = undefined;
		},
		clearRegisterError: (state) => {
			state.registerErrorMsg = undefined;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			if (!action.payload) return;
			state.jwt = action.payload.access_token;
			localStorage.setItem(JWT_PERSISTENT_STATE, JSON.stringify({ jwt: action.payload.access_token }));
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMsg = action.error.message;
		});

		builder.addCase(getProfile.fulfilled, (state, action) => {
			state.profile = action.payload;
		});

		builder.addCase(register.rejected, (state, action) => {
			state.registerErrorMsg = action.error.message;
		});
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;