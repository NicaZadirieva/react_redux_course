import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';
import LinkedMenuItem from '../LinkedMenuItem';
import MenuIconBuilder from '../shared/MenuIconBuilder';
import SimpleMenuItem from '../SimpleMenuItem';
import styles from './index.module.css';

function Menu() {
	const currentUser = useSelector((s: RootState) => s.users.currentUser);
	const favors = useSelector((f: RootState) => f.favors.favorites);
	const dispatch = useDispatch();

	const logoutCurrentUser = () => {
		if (currentUser) {
			dispatch(userActions.logout(currentUser));
		}
	};


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
				text={currentUser?.name as string} /** if currentUser not null */
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
			{currentUser ? authMenu: defaultMenuItems}
		</ul>
	);
}

export default Menu;