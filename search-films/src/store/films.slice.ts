import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmDescApi } from '../api';
import { loadState } from './storage';

export const FILMS_PERSISTENT_STATE = 'filmsData';

type FilmsPersistentStore = {
    favorites: FilmDescApi[]
};

const simpleInitialData : FilmsPersistentStore = {
    favorites: []
};


const initialState : FilmsPersistentStore = loadState<FilmsPersistentStore>(FILMS_PERSISTENT_STATE) ?? simpleInitialData;


const favorsSlice = createSlice({
	name: 'favors',
	initialState,
	reducers: {
        deleteFilm: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(item => {
                return item['#IMDB_ID'] != action.payload
            });
        },
        addFilm: (state, action: PayloadAction<FilmDescApi>) => {
            const existed = state.favorites.find(item => item['#IMDB_ID'] == action.payload['#IMDB_ID']);
            if(!existed) {
                state.favorites.push(action.payload);
            }
        },
        
	}
});



export default favorsSlice.reducer;
export const favorsActions = favorsSlice.actions;