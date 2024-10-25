import cs from 'classnames';
import { Logo, Menu } from '../../components';
import styles from './index.module.css';
/**
 * Layout Header component 
 * @param {boolean} isAuthenticated - authenticated user or not
 * @param {string} userName - (byDefault=null) name of the user
 * @returns {component} Header 
 * 
*/
function Header({isAuthenticated=false, userName=null}) {
	return (
		<header className={styles.header}>
			<div className={cs(styles['header-content'], 'restrict-content-size')}>
				<Logo/>
				<Menu isAuthenticated={isAuthenticated} userName={userName}/>
			</div>
		</header>
	);
}

export default Header;