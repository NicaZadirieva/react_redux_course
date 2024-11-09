import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Product as ProductData } from '../../interfaces/product.interface';

export function Product() {
	const data  = useLoaderData() as {data: ProductData};

	return <>
		<Suspense fallback={'Загружаю'}>
			<Await
				resolve={data.data}>
				{({data}: {data: ProductData}) => {
					return <>{'Product ' + data.name}</>;
				}}
			</Await>
		</Suspense></>;
}