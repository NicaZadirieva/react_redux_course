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
function Menu({isAuthenticated=false, userName=null, logout=null}) {
	
	const authMenu = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				canChoose={false} /**if it is current page */
				onClick={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				icon={MenuIconBuilder.buildCounterIcon(3)}
				linkUrl="https://www.google.com"
				onClick={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text={userName} /*currentUser*/
				icon={MenuIconBuilder.buildAvatarIcon()}
				linkUrl="https://www.google.com"
				onClick={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Выйти"
				onClick={logout}
			/>
		</>
	);
	const defaultMenuItems = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				canChoose={false} /**if it is current page */
				onClick={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				linkUrl="https://www.google.com"
				icon={MenuIconBuilder.buildCounterIcon(3)}
				onClick={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Войти"
				canChoose={false}
				icon={MenuIconBuilder.buildExitIcon()}
				onClick={(event) => console.log(event)}
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