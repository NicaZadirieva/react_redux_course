import cn from 'classnames';
import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './index.module.css';

function LinkLayout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img alt='Аватар' src='/user-avatar.svg' className={styles['user-avatar']}/>
					<div className={styles['user-name']}>Антон Ларичев</div>
					<div className={styles['user-email']}>alaricode@ya.ru</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={cn(styles['link-container'], styles['menu-container'])}>
						<div className={cn(styles['link-icon'], styles['menu-icon'])}></div>
						<div>Меню</div>
					</Link>

					
					<Link to='/cart' className={cn(styles['link-container'], styles['cart-container'])}>
						<div className={cn(styles['link-icon'], styles['cart-icon'])}></div>
						<div>Корзина</div>
						<div className={styles['goods-icon']}>2</div>
					</Link>

				
				</div>
				<Button className={styles['exit']}>
					<img alt='Выход' src='/exit-icon.svg' className={styles['exit-icon']}/>
					Выход
				</Button>
			</div>
			<div className={styles['layout-content']}>
				<Outlet/>
			</div>
		</div>
	);
}

export default LinkLayout;