import { useLoaderData } from 'react-router-dom';
import { Product as ProductData } from '../../interfaces/product.interface';

export function Product() {
	const data = useLoaderData() as ProductData;

	return <>{'Product ' + data.name}</>;
}