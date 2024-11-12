
// В момент написания дз не работал сервер с данными (смотри URL в константах), пришлось сделать моки

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
			duration: 'PT3H1M'
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
				'#IMG_POSTER': 'https://m.media-amazon.com/images/M/MV5BNzkwOTRjZDItOGNhOS00YjRkLTg3NmEtYWE2MWY5NDcyZDAwXkEyXkFqcGc@._V1_.jpg',
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
				'#IMG_POSTER': 'https://m.media-amazon.com/images/M/MV5BM2E4Nzk0NDQtZTFmOC00MDI5LWFmYmEtNWNlMzhkMDA1MzZmXkEyXkFqcGc@._V1_.jpg',
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
				'#IMG_POSTER': 'https://m.media-amazon.com/images/M/MV5BYjVhM2E5ZjItMTY3Yi00YWM0LTkxYWYtMzBhYjRkZTUyN2E4XkEyXkFqcGc@._V1_.jpg',
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
				'#IMG_POSTER': 'https://m.media-amazon.com/images/M/MV5BNjBmYzdjYWUtNmQ0Yi00YWZlLTk1OTYtZjIxYWU0ODE5NTczXkEyXkFqcGc@._V1_.jpg',
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

export type FilmDescApi = {
    '#TITLE': string, // name of the film
    '#IMDB_ID': string, // id of the film
    '#IMG_POSTER': string, // url of the film's poster 
}

/**
 * Search film descriptions 
 * @param filmName 
 * @returns FilmDescApi[]
 */
export async function searchFilmDescByName(filmName: string) {
	console.log(filmName);
	try {
		const response = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(success_mock_data.searchFilmDescByName);
			}, 2000);
		});
		return (response as typeof success_mock_data.searchFilmDescByName)['description'];
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch film details');
	}
}
