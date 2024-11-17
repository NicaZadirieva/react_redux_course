import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { IUserContext, UserContext } from '../../context/user.context';
import { RootState } from '../../store/store';
import LinkedMenuItem from '../LinkedMenuItem';
import MenuIconBuilder from '../shared/MenuIconBuilder';
import SimpleMenuItem from '../SimpleMenuItem';
import styles from './index.module.css';

function Menu() {
	const {currentUser, isAuthenticated, logoutCurrentUser} = useContext(UserContext) as IUserContext;
	const favors = useSelector((f: RootState) => f.favors.favorites);

	const authMenu = (
		<>
			<LinkedMenuItem
				text="Поиск фильмов"
				linkUrl="/"
			/>
			<LinkedMenuItem
				text="Мои фильмы"
				icon={MenuIconBuilder.buildCounterIcon(favors.length)}
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
				icon={MenuIconBuilder.buildCounterIcon(0)}
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