import ProductCard from '../ProductCard';
import { MenuListProps } from './MenuListProps';

export function MenuList({products}: MenuListProps) {
	return products.map((product) => {
		return <ProductCard
			key={product.id}
			id={product.id}
			name={product.name}
			description={product.ingredients.join(', ')}
			rating={product.rating}
			price={product.price}
			image={product.image}
		/>;
	})
}