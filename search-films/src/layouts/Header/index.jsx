import { Logo, Menu } from '../../components';
import './styles/index.css';

/**
 * Layout Header component 
 * @param {boolean} isAuthenticated - authenticated user or not
 * @returns {component} Header 
 * 
*/
function Header({isAuthenticated=false}) {
	return (
		<header className='header'>
			<div className='header-content restrict-content-size'>
				<Logo/>
				<Menu isAuthenticated={isAuthenticated}/>
			</div>
		</header>
	);
}

export default Header;