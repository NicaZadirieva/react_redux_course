import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './index.module.css';

function NavigateLayout() {

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img alt='Аватар' src='/user-avatar.svg' className={styles['user-avatar']}/>
					<div className={styles['user-name']}>Антон Ларичев</div>
					<div className={styles['user-email']}>alaricode@ya.ru</div>
				</div>
				<div className={styles['menu']}>
					<NavLink to='/' className={({ isActive }) => cn(styles['link-container'], styles['menu-container'], {
						[styles.active]: isActive
					}
					)}>
						<div className={cn(styles['link-icon'], styles['menu-icon'])}></div>
						<div>Меню</div>
					</NavLink>

					
					<NavLink to='/cart' className={({ isActive} ) => cn(styles['link-container'], styles['cart-container'], {
						[styles.active]: isActive
					}
					)}>
						<div className={cn(styles['link-icon'], styles['cart-icon'])}></div>
						<div>Корзина</div>
						<div className={styles['goods-icon']}>2</div>
					</NavLink>

				
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

export default NavigateLayout;