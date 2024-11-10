import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

function AuthLayout() {

	return (
		<div className={styles['layout']}>
			<div className={styles['logo']}>
				<img src={'/logo-icon.svg'} alt='Логотип компании'/>
			</div>
			<div className={styles['content']}>
				<Outlet/>
			</div>
		</div>
	);
}

export default AuthLayout;