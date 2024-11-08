import { useContext } from 'react';
import { IUserContext, UserContext } from '../../context/user.context';
import LinkedMenuItem from '../LinkedMenuItem';
import MenuIconBuilder from '../shared/MenuIconBuilder';
import SimpleMenuItem from '../SimpleMenuItem';
import styles from './index.module.css';

function Menu() {
	const {currentUser, isAuthenticated, logoutCurrentUser} = useContext(UserContext) as IUserContext;
	const authMenu = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				linkUrl="/"
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				icon={MenuIconBuilder.buildCounterIcon(3)}
				linkUrl="/favorites"
				handleClicks={(event) => console.log(event)}
			/>
			<SimpleMenuItem 
				text={currentUser as string} /** if currentUser not null */
				icon={MenuIconBuilder.buildAvatarIcon()}
				canChoose={false}
			/>
			<SimpleMenuItem
				text="Выйти"
				handleClicks={logoutCurrentUser}
			/>
		</>
	);
	const defaultMenuItems = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				linkUrl="/"
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				icon={MenuIconBuilder.buildCounterIcon(3)}
				linkUrl="/favorites"
				handleClicks={(event) => console.log(event)}
			/>
			<LinkedMenuItem
				text="Войти"
				linkUrl="/login"
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