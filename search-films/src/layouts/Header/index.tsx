import cs from 'classnames';
import { Logo, Menu } from '../../components';
import styles from './index.module.css';

function Header() {
	return (
		<header className={styles.header}>
			<div className={cs(styles['header-content'], 'restrict-content-size')}>
				<Logo/>
				<Menu/>
			</div>
		</header>
	);
}

export default Header;