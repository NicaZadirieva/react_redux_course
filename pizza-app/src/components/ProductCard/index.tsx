import { Link } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.props';
import styles from './index.module.css';

function ProductCard(props : ProductCardProps) {
	return (
		<Link to={'/'} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles['price']}>
						{props.price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']}>
						<img src='/cart-icon.svg' alt='Добавить в корзину'/>
					</button>
					<div className={styles['rating']}>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt='Иконка звезды'/>
					</div>
				</div>
				<div className={styles['foot']}>
					<div className={styles['title']}>{props.title}</div>
					<div className={styles['description']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;