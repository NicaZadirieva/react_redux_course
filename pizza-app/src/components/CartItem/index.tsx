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
		
	};
	const remove = () => {
		
	};
	
	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image})'`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<span className={styles['currency']}>{props.price}&nbsp;</span>
			</div>
			<div className={styles['actions']}>
				<button className={styles['button']} onClick={decrease}>
					<img src='/cart-icon.svg' alt='Удалить из корзины'/>
				</button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<img src='/cart-icon.svg' alt='Добавить в корзину'/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src='/cart-icon.svg' alt='Удалить все'/>
				</button>
			</div>
		</div>
	);
};

export default CartItem;