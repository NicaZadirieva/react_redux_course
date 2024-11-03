
import cs from 'classnames';
import styles from './index.module.css';
import type { MovieCardProps } from './MovieCard.props';

/**
 * @callback requestCallback
 * @param {Object} requestBody
 * @param {string} requestBody.movieId - id of the movie
 * @returns {any}
 */

/**
 * Util MovieCard component 
 * @param {string} movieName - name of the movie
 * @param {string} movieId - id of the movie
 * @param {string} posterUrl -  url to use for the poster image
 * @param {string} className (optional) - additional classes for special movie card
 * @param {boolean} isLiked - (optional, byDefault = false)
 * @param {number} rating - (optional, byDefault = 0) value to describe a rating of the movie
 * @param {requestCallback} addToWishList - callback to do request for adding to wish list
 * @param {requestCallback} deleteFromWishList - callback to do request for deleting from wish list
 * @returns {component} MovieCard 
 * 
*/
function MovieCard(props: MovieCardProps) {

	const {isLiked=/*byDefault*/false, rating=/*byDefault*/ 0} = props;

	const Rating = (
		<div className={styles['rating-movie-card']}>
			<img alt='Иконка рейтинга' src='star-icon.svg'/>
			<div className={styles['rating-value']}>{rating}</div>
		</div>
	);

	const Poster = (
		<div className={styles['poster-movie-card']} style={{background: `url(/poster/${props.posterUrl})`}}>{Rating}</div>
	);
    
	const MovieTitle = (
		<div className={styles['title-movie-card']}>{props.movieName}</div>
	);

	// Добавить в избранное
	const AddToWishListItem = (
		<div className={styles['wishlist-item']} onClick={() => {props.addToWishList(props.movieId);}}>
			<div className={styles['can-be-added-icon']}></div>
			<p className={styles['can-be-added-desc']}>{'В избранное'}</p>
		</div>
	);

	// Удалить из избранного
	const DeleteFromWishListItem = (
		<div className={styles['wishlist-item']} onClick={() => {props.deleteFromWishList(props.movieId);}}>
			<div className={styles['delete-added-icon']}></div>
			<p className={styles['delete-added-desc']}>{'В избранном'}</p>
		</div>
	);

	return (
		<div className={cs(props.className, styles['movie-card'])}>
			{Poster}
			{MovieTitle}
			{/*не стала изменять для читабельности */}
			{isLiked ? DeleteFromWishListItem : AddToWishListItem}
		</div>
	);
}

export default MovieCard;