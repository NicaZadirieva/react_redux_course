import { MovieCardProps } from '../components/MovieCard/MovieCard.props';

export function mapToFilmDescApi (movieCardData: MovieCardProps) {
    const filmDescApiData = {
			'#TITLE': movieCardData.movieName,
			rating: movieCardData.rating,
            ['#IMDB_ID']: movieCardData.movieId,
            ['#IMG_POSTER']: movieCardData.posterUrl,
		}
    return filmDescApiData;
}