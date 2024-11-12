import { USE_MOCKS } from './film.constants';
import { getDetails as mock_GetDetails, searchFilmDescByName as mock_searchFilmDescByName } from './film.mocks';
import { getDetails, searchFilmDescByName } from './film.request';

// use only if you need to test both on mock data and on real data
export const doGetDetails = async (filmId: string) => {
	if (USE_MOCKS) {
		return await mock_GetDetails(filmId);
	} else {
		return await getDetails(filmId);
	}
};

// use only if you need to test both on mock data and on real data
export const doSearchFilmDescByName = async (filmId: string) => {
	if (USE_MOCKS) {
		return await mock_searchFilmDescByName(filmId);
	} else {
		return await searchFilmDescByName(filmId);
	}
};


export type { FilmDescApi, FilmDetailsApi } from './film.request';

