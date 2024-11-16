import axios from 'axios';
import { FILM_ID_PARAMETER, FILM_NAME_PARAMETER, URL_TO_DATA } from './film.constants';

export type FilmReviewApi = {
    author: {
		name: string,
		dateCreated: string,
    	reviewBody: string
	}
}

export type FilmDetailsApi = {
   '@type': string, // can be Movie
    name: string,
    image: string,
    description: string,
    review: FilmReviewApi,
    aggregateRating: {ratingValue: number},
    datePublished: string,
    genre: string[],
    duration: string // PT3H1M PT{часы}H{минуты}M
}

// !!!!! CAN THROW RUNTIME ERROR
/**
 * Get details about a film
 * @param film_id id of the film
 * @returns FilmApi | Error
 */
export async function getDetails(filmId: string) {
	try {
		const response = await axios.get(`${URL_TO_DATA}`, {
			params: {
				[FILM_ID_PARAMETER]: filmId
			}
		});
		return response.data['@short'] as FilmDetailsApi;
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch film details');
	}
}

export type FilmDescApi = {
    '#TITLE': string, // name of the film
    '#IMDB_ID': string, // id of the film
    '#IMG_POSTER': string, // url of the film's poster 
	rating?: number // rating of the film (optional)
}

export type FilmsDescApi = {
	description: FilmDescApi[]
};

// !!!!! CAN THROW RUNTIME ERROR
/**
 * Search film descriptions 
 * @param filmName 
 * @returns FilmDescApi | Error
 */
export async function searchFilmDescByName(filmName: string) {
	try {
		const filmDesc = await axios.get<FilmsDescApi>(`${URL_TO_DATA}`, {
			params: {
				[FILM_NAME_PARAMETER]: filmName
			}
		}); // FilmDescApi[] without rating
		const ratingPromises = filmDesc.data
			.description.map(async (description: FilmDescApi) => {
				return getDetails(description['#IMDB_ID'])
				;
			});
		
		const ratings = await Promise.all(ratingPromises);
		const res = filmDesc.data.description.map((description, index) => {
			return {...description, rating: ratings[index].aggregateRating.ratingValue}
		});

		return res;
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch film description');
	}
}