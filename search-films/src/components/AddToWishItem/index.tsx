import CssUtils from '../shared/CssUtils';
import { AddToWishItemProps } from './AddToWishItem.props';
import styles from './index.module.css';

export default function AddToWishListItem(props: AddToWishItemProps) {
	const marginTopWithPx = props.marginTop ? CssUtils.addPxToCssProperty(props.marginTop) : 0;
	return (
		<div style={{marginTop: marginTopWithPx}} className={styles['wishlist-item']} onClick={() => {props.addToWishList(props.movieId);}}>
			<div className={styles['can-be-added-icon']}></div>
			<p className={styles['can-be-added-desc']}>{'В избранное'}</p>
		</div>
	);
	
}