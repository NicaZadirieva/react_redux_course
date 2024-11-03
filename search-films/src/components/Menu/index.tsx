import { useContext } from 'react';
import { IUserContext, UserContext } from '../../context/user.context';
import LinkedMenuItem from '../LinkedMenuItem';
import MenuIconBuilder from '../shared/MenuIconBuider';
import styles from './index.module.css';
/**
 * Util Menu component 
 * @param {boolean}  (optional, byDefault=false) authenticated user or not
 * @param {string} userName (optional, byDefault=null) name of the user
 * @param {callback} logout (optional, byDefault=null) can be used to log out
 * @returns {component} Menu 
 * 
*/
function Menu() {
	const {currentUser, isAuthenticated, logoutCurrentUser} = useContext(UserContext) as IUserContext;
	const authMenu = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				canChoose={false} /**if it is current page */
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				icon={MenuIconBuilder.buildCounterIcon(3)}
				linkUrl="https://www.google.com"
				handleClicks={(event) => console.log(event)}
			/>
			<LinkedMenuItem 
				text={currentUser as string} /** if currentUser not null */
				icon={MenuIconBuilder.buildAvatarIcon()}
				linkUrl="https://www.google.com"
				handleClicks={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Выйти"
				handleClicks={logoutCurrentUser}
			/>
		</>
	);
	const defaultMenuItems = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				canChoose={false} /**if it is current page */
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				linkUrl="https://www.google.com"
				icon={MenuIconBuilder.buildCounterIcon(3)}
				handleClicks={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Войти"
				canChoose={false}
				icon={MenuIconBuilder.buildExitIcon()}
			/>
		</>
	);
	return (
		<ul className={styles.menu}>
			{isAuthenticated ? authMenu: defaultMenuItems}
		</ul>
	);
}

export default Menu;