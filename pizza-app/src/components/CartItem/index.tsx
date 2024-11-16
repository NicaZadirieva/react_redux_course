import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import { appDispatch } from '../../store/store';
import { CartItemProps } from './CartItems.props';
import styles from './index.module.css';

function CartItem(props : CartItemProps) {
	const dispatch = useDispatch<appDispatch>();
    

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};
	const decrease = () => {
		dispatch(cartActions.removeOnlyOneItem(props.id));
	};
	const remove = () => {
		dispatch(cartActions.deleteAllSuchItem(props.id));
	};
	
	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url(${props.image})`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<span className={styles['price']}>{props.price}&nbsp;₽</span>
			</div>
			<div className={styles['actions']}>
				<button className={cn(styles['button'], styles['decrease'])} onClick={decrease}>
					<img src='/minus.svg' alt='Удалить из корзины'/>
				</button>
				<div className={styles['count']}>{props.count < 10 ? '0' + props.count : props.count}</div>
				<button className={cn(styles['button'], styles['increase'])} onClick={increase}>
					<img src='/plus-icon.svg' alt='Добавить в корзину'/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src='/del.svg' alt='Удалить все'/>
				</button>
			</div>
		</div>
	);
};

export default CartItem;