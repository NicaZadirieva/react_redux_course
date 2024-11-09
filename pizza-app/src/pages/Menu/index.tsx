import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getMenu = async () => {
		try {
			setIsLoading(true);
			// Simulate delay to show loading state for a moment before fetching data
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
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

	useEffect(() => {
		getMenu();
	}, []);
	
	return (
		<>
			<div className={styles['head']}>
				<Heading>Menu</Heading>
				<Search placeholder='Введите блюдо или состав'/>
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && !error && <MenuList products={products}/>}
				{isLoading && !error && <>Загружаем продукты...</>}
			</div>
		</>
	);
}

export default Menu;