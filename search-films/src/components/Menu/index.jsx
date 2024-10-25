import LinkedMenuItem from '../LinkedMenuItem';
import MenuIconBuilder from '../shared/MenuIconBuider';
import styles from './index.module.css';
/**
 * Util Menu component 
 * @params isAuthenticated (optional, byDefault=false) authenticated user or not
 * @params userName (optional, byDefault=null) name of the user
 * @returns {component} Menu 
 * 
*/
function Menu({isAuthenticated=false, userName=null}) {
	
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
				linkUrl="https://www.google.com"
				onClick={(event) => console.log(event)}
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
				linkUrl="https://www.google.com"
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