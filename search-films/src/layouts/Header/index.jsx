import { Logo, Menu } from '../../components';
import styles from './styles/index.module.css';

/**
 * Layout Header component 
 * @param {boolean} isAuthenticated - authenticated user or not
 * @returns {component} Header 
 * 
*/
function Header({isAuthenticated=false}) {
	return (
		<header className={styles.header}>
			<div className={`${styles['header-content']} restrict-content-size`}>
				<Logo/>
				<Menu isAuthenticated={isAuthenticated}/>
			</div>
		</header>
	);
}

export default Header;