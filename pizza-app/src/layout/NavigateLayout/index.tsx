import cn from 'classnames';
import { Link, Outlet } from 'react-router-dom';
import styles from './index.module.css';

function LinkLayout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['link-layout']}>
				<div className={styles['user']}>
					<img alt='Аватар' src='/user-avatar.svg' className={styles['user-avatar']}/>
					<div className={styles['user-name']}>Антон Ларичев</div>
					<div className={styles['user-email']}>alaricode@ya.ru</div>
				</div>
				<div className={styles['link-layout-container']}>
					<div className={cn(styles['link-container'], styles['menu-link-container'])}>
						<div className={cn(styles['link-icon'], styles['menu-link-icon'])}></div>
						<Link to='/'>Меню</Link>
					</div>
					<div className={cn(styles['link-container'], styles['cart-link-container'])}>
						<div className={cn(styles['link-icon'], styles['cart-link-icon'])}></div>
						<Link to='/cart'>Корзина</Link>
						<div className={styles['goods-icon']}>2</div>
					</div>
				
				</div>
			</div>
			<div className={styles['layout-content']}>
				<Outlet/>
			</div>
		</div>
	);
}

export default LinkLayout;