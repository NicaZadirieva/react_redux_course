import cs from 'classnames';
import { Logo, Menu } from '../../components';
import styles from './index.module.css';
/**
 * Layout Header component 
 * @param {boolean} isAuthenticated - authenticated user or not
 * @param {string} userName - (byDefault=null) name of the user
 * @param {callback} logout - (byDefault=null) can be used to log out
 * @returns {component} Header 
 * 
*/
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