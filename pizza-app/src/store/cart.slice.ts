import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../helpers/API';
import { LoginResponse } from '../interfaces/auth.interface';


export interface CartItem{
    id: number;
    count: number;
}
export interface CartState {
    items: CartItem[]
}


const initialState : CartState = {
	items : []
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

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add(state, action: PayloadAction<number>) {
			const existed = state.items.find(item => item.id = action.payload);
			if (!existed) {
				state.items.push({id: action.payload, count: 1});
			} else {
				state.items.map(item => {
					if(item.id == action.payload) {
						item.count++;
					} 
					return item;
				});
			}

		}
	},
	extraReducers: (builder) => {
	}
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;