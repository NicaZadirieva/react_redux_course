import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../helpers/API';
import { LoginResponse } from '../interfaces/auth.interface';
import { ProfileResponse } from '../interfaces/profile.interface';
import { loadState } from './storage';

export const JWT_PERSISTENT_STATE = 'userData';
export interface UserPersistentState {
    jwt: string | null;
}
export interface UserState {
    jwt: string | null;
	loginErrorMsg?: string;
	profile?: ProfileResponse;
	profileErrorMsg?: string;
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

export const getProfile = createAsyncThunk('user/profile', 
	async (params : {jwt : string | null}) => {
		try {
			const { data } = await axios.get<ProfileResponse>(`${PREFIX}/auth/login`, {
				headers: { 'Authorization': 'Bearer ' + params.jwt }
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
			if (!action.payload) return;
			state.profile = { 
				email : action.payload.email,
				id : action.payload.id,
				name : action.payload.name
			};
		});
		builder.addCase(getProfile.rejected, (state, action) => {
			state.profileErrorMsg = action.error.message;
		});
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;