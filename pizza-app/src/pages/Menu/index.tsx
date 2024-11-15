import axios, { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import { MenuList } from '../../components/MenuList';
import Search from '../../components/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './index.module.css';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			// Simulate delay to show loading state for a moment before fetching data
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
			setProducts(data);
			setIsLoading(false);
		} catch(err) {
			console.error(err);
			if (err instanceof AxiosError) {
				setError(err.message);
				return;
			}
			setIsLoading(false);
			return;
		}
	};

	
	return (
		<>
			<div className={styles['head']}>
				<Heading>Menu</Heading>
				<Search placeholder='Введите блюдо или состав' onChange={updateFilter}/>
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && !error && products.length > 0 && <MenuList products={products}/>}
				{isLoading && !error && <>Загружаем продукты...</>}
			</div>
		</>
	);
}

export default Menu;