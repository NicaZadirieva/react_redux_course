import { USE_MOCKS } from './film.constants';
import { getBothDetailsAndDesc as mock_getBoth, getDetails as mock_GetDetails, searchFilmDescByName as mock_searchFilmDescByName } from './film.mocks';
import { getBothDetailsAndDesc, getDetails, searchFilmDescByName } from './film.request';

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

export const doGetBothDetailsAndDesc = async (filmId: string) => {
	if (USE_MOCKS) {
		return await mock_getBoth(filmId);
	} else {
		return await getBothDetailsAndDesc(filmId);
	}
}
export type { FilmDescApi, FilmDetailsApi } from './film.request';

