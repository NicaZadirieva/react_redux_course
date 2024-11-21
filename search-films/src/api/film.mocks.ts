
// В момент написания дз не работал сервер с данными (смотри URL в константах), пришлось сделать моки

import { FilmDescApi } from './film.request';

const success_mock_data = {
	getDetails: {
		'@short': {
			'@type': 'Movie',
			name: 'Avengers: Endgame',
			image: '/poster/big_band.png',
			description: 'Not as good as infinity war',
			review: {
				author: {
					name: 'John Doe',
					dateCreated: '2019-04-29',
					reviewBody: `But its a pretty good film. 
							A bit of a mess in some parts, 
							lacking the cohesive and effortless feel infinity war 
							somehow managed to accomplish. 
							Some silly plot holes and characters 
							that could&apos;ve been cut (Ahem, captain marvel and thanos). 
							The use of Captain marvel in this film was just ridiculous. 
							Shes there at the start, bails for some reason? 
							And then pops up at the end to serve no purpose but deux ex machina a space ship...`
				}
			},
			aggregateRating: { ratingValue: 8.4 },
			datePublished: '2019-04-24',
			genre: ['Adventure', 'Science Fiction', 'Action'],
			duration: 'PT3H1M',
			imbdId: 'tt4154796'
		}
	},
	searchFilmDescByName: {
		'ok': true,
		'description': [
			{
				'#TITLE': 'Avengers: Endgame',
				'#YEAR': 2019,
				'#IMDB_ID': 'tt4154796',
				'#RANK': 1309730,
				'#ACTORS': '',
				'#AKA': 'Avengers: Endgame',
				'#IMDB_URL': 'https://www.imdb.com/title/tt4154796',
				'#IMDB_IV': 'https://html.imdbot.workers.dev/tt4154796',
				'#IMG_POSTER': '/poster/big_band.png',
				'photo_width': 763,
				'photo_height': 1080
			},
			{
				'#TITLE': 'Marvel Studios\' Avengers: Endgame LIVE Red Carpet World Premiere',
				'#YEAR': 2019,
				'#IMDB_ID': 'tt10240638',
				'#RANK': 44,
				'#ACTORS': '',
				'#AKA': 'Marvel Studios\' Avengers: Endgame LIVE Red Carpet World Premiere',
				'#IMDB_URL': 'https://www.imdb.com/title/tt10240638',
				'#IMDB_IV': 'https://html.imdbot.workers.dev/tt10240638',
				'#IMG_POSTER': '/poster/big_band.png',
				'photo_width': 2560,
				'photo_height': 1348
			},
			{
				'#TITLE': 'Avengers Endgame: the Butt Plan',
				'#YEAR': 2019,
				'#IMDB_ID': 'tt10399328',
				'#RANK': 11,
				'#ACTORS': '',
				'#AKA': 'Avengers Endgame: the Butt Plan',
				'#IMDB_URL': 'https://www.imdb.com/title/tt10399328',
				'#IMDB_IV': 'https://html.imdbot.workers.dev/tt10399328',
				'#IMG_POSTER': '/poster/big_band.png',
				'photo_width': 3840,
				'photo_height': 2160
			},
			{
				'#TITLE': 'Avengers: Endgame and the Latest Captain Marvel Outrage!!',
				'#YEAR': 2019,
				'#IMDB_ID': 'tt10025738',
				'#RANK': 35,
				'#ACTORS': '',
				'#AKA': 'Avengers: Endgame and the Latest Captain Marvel Outrage!!',
				'#IMDB_URL': 'https://www.imdb.com/title/tt10025738',
				'#IMDB_IV': 'https://html.imdbot.workers.dev/tt10025738',
				'#IMG_POSTER': '/poster/big_band.png',
				'photo_width': 1920,
				'photo_height': 1080
			}
		]
	}
};

/**
 * Get details about a film (mock data)
 * @param film_id id of the film
 * @returns FilmApi
 */
export async function getDetails(filmId: string) {
	console.log(filmId);
	try {
		const response = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(success_mock_data.getDetails);
			}, 2000);
		});
		return (response as typeof success_mock_data.getDetails)['@short'];
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch film details');
	}
}

/**
 * Search film descriptions 
 * @param filmName 
 * @returns FilmDescApi[]
 */
export async function searchFilmDescByName(filmName: string) {
	console.log(filmName);
	try {
		const filmDesc = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(success_mock_data.searchFilmDescByName);
			}, 2000);
		}) as typeof success_mock_data.searchFilmDescByName;
		
		const ratingPromises = filmDesc
			.description.map(async (description: FilmDescApi) => {
				return getDetails(description['#IMDB_ID'])
				;
			});
		
		const ratings = await Promise.all(ratingPromises);
		const res = filmDesc.description.map((description, index) => {
			return {...description, rating: ratings[index].aggregateRating.ratingValue}
		});

		return res;
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch film details');
	}
}

export async function getBothDetailsAndDesc(filmId: string) {
	const details = await getDetails(filmId);
	const allDescriptionsByName = await searchFilmDescByName(details.name);
    const descAboutThisFilm = allDescriptionsByName.find((desc) => desc['#IMDB_ID'] == filmId);
    return {details, desc: descAboutThisFilm};
}
