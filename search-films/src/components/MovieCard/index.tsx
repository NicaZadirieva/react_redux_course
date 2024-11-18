
import cs from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmDescApi } from '../../api';
import { mapToFilmDescApi } from '../../helpers/mapper';
import { favorsActions } from '../../store/films.slice';
import { RootState } from '../../store/store';
import AddToWishListItem from '../AddToWishItem';
import DeleteFromWishListItem from '../DeleteFromWishItem';
import Rating from '../Rating';
import styles from './index.module.css';
import type { MovieCardProps } from './MovieCard.props';

function MovieCard(props: MovieCardProps) {
	const favors = useSelector((f: RootState) => f.favors.favorites);
	const [isLiked, setIsLiked] = useState(false);
	const dispatch = useDispatch();
	const {rating=/*byDefault*/ 0} = props;

	const addToWishList = () => {
		const movieData = mapToFilmDescApi(props);
		dispatch(favorsActions.addFilm(movieData))
		setIsLiked(true);
	};

	const deleteFromWishList = () => {
		const movieData = mapToFilmDescApi(props);
		dispatch(favorsActions.deleteFilm(movieData['#IMDB_ID']))
		setIsLiked(false);
	};

	const includesInFavours = (movieData: FilmDescApi) => {
		return favors.some((f: FilmDescApi) => f['#IMDB_ID'] === movieData['#IMDB_ID']);
	};

	

	useEffect(() => {
		const filmDescApi = mapToFilmDescApi(props);
		setIsLiked(includesInFavours(filmDescApi));
	}, [])

	const Poster = (
		<div className={styles['poster-movie-card']} style={{background: `url(${props.posterUrl})`}}><Rating value={rating}/></div>
	);
    
	const MovieTitle = (
		<div className={styles['title-movie-card']}>{props.movieName}</div>
	);


	return (
		<div className={cs(props.className, styles['movie-card'])}>
			{Poster}
			{MovieTitle}
			{/*не стала изменять для читабельности */}
			{isLiked ? <DeleteFromWishListItem marginTop={16} movieId={props.movieId} deleteFromWishList={deleteFromWishList}/> : <AddToWishListItem marginTop={16} movieId={props.movieId} addToWishList={addToWishList}/>}
		</div>
	);
}

export default MovieCard;