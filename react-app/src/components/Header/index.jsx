import styles from './styles/index.module.css';
export default function Header() {
	return (
		<img className={styles.logo} src="/logo.svg" alt="Логотип журнала"/>
	);
}