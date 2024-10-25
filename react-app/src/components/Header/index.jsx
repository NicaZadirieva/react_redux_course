import SelectUser from '../SelectUser';
import styles from './styles/index.module.css';
export default function Header() {
	
	const changeUser = (e) => {
		console.log(e.target.value); // Выводит выбранный id пользователя в консоль.
	};

	return (<>
		<img className={styles.logo} src="/logo.svg" alt="Логотип журнала"/>
		<SelectUser changeUser={changeUser}/>

	</>);
}