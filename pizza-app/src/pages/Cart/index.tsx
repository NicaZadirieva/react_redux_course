import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import Heading from '../../components/Heading';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { RootState } from '../../store/store';
import styles from './index.module.css';

const DELIVERY_PRICE = 169;
function Cart() {
	const [cartProducts, setCardProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
	const total = items.map((i) => {
		const product = cartProducts.find(p => i.id == p.id);
		if(!product) return 0;
		return i.count * product.price;
	}).reduce((acc, i) => acc += i);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};
	
	const loadAllItems = async () => {
		const res = await Promise.all(items.map((i) => getItem(i.id)));
		setCardProducts(res);
	};


	useEffect(() => {
		loadAllItems();
	}, [items]);

	
	return (
		<>
			<Heading className={styles['heading']}>Корзина</Heading>
			{items.map((i) => {
				const product = cartProducts.find(p => i.id == p.id);
				if(!product) return;
				return (<CartItem key={i.id} count={i.count} {...product}/>);
			})}
			<div className={styles['line']}>
				<div className={styles['text']}>Итог</div>
				<div className={styles['price']}>{total}&nbsp;<span>₽</span></div>
			</div>
			<hr className={styles['hr']}/>
			<div className={styles['line']}>
				<div className={styles['text']}>Доставка</div>
				<div className={styles['price']}>{DELIVERY_PRICE}&nbsp;<span>₽</span></div>
			</div>
			<hr className={styles['hr']}/>
			<div className={styles['line']}>
				<div className={styles['text']}>Итог </div>
				<div className={styles['price']}>{total + DELIVERY_PRICE}&nbsp;<span>₽</span></div>
			</div>
		</>
	);
}

export default Cart;