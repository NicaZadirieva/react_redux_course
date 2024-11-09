import ProductCard from '../ProductCard';
import { MenuListProps } from './MenuListProps';
import styles from './index.module.css';

export function MenuList({products}: MenuListProps) {
	return <div className={styles.wrapper}>
		{products.map((product) => {
			return <ProductCard
				key={product.id}
				id={product.id}
				name={product.name}
				description={product.ingredients.join(', ')}
				rating={product.rating}
				price={product.price}
				image={product.image}
			/>;}
		)}</div>;
}