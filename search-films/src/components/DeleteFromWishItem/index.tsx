import CssUtils from '../shared/CssUtils';
import { DeleteFromWishProps } from './DeleteFromWish.props';
import styles from './index.module.css';

export default function DeleteFromWishListItem(props: DeleteFromWishProps) {
	const marginTopWithPx = props.marginTop ? CssUtils.addPxToCssProperty(props.marginTop) : 0;
	return (
		<div style={{marginTop: marginTopWithPx}} className={styles['wishlist-item']} onClick={() => {props.deleteFromWishList(props.movieId);}}>
			<div className={styles['delete-added-icon']}></div>
			<p className={styles['delete-added-desc']}>{'В избранном'}</p>
		</div>
	);
}