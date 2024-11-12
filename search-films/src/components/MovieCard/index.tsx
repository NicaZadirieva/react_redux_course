
import cs from 'classnames';
import AddToWishListItem from '../AddToWishItem';
import DeleteFromWishListItem from '../DeleteFromWishItem';
import Rating from '../Rating';
import styles from './index.module.css';
import type { MovieCardProps } from './MovieCard.props';

function MovieCard(props: MovieCardProps) {

	const {isLiked=/*byDefault*/false, rating=/*byDefault*/ 0} = props;

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
			{isLiked ? <DeleteFromWishListItem marginTop={16} movieId={props.movieId} deleteFromWishList={props.deleteFromWishList}/> : <AddToWishListItem marginTop={16} movieId={props.movieId} addToWishList={props.addToWishList}/>}
		</div>
	);
}

export default MovieCard;