import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './index.module.css';
export function Success() {
	const navigate = useNavigate();
	return (
		<div className={styles['success']}>
			<img src='/pizza.png' alt='Изображение пиццы'/>
			<div className={styles['text']}>Ваш заказ успешно оформлен!</div>
			<div className={styles['button-container']}><Button className={styles['button']} appearance={'big'} onClick={() => navigate('/')}>Сделать новый</Button></div>
		</div>
	);
}