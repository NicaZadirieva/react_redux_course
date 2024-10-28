import styles from './styles/index.module.css';

export default function Logo({logo}) {
	return <img className={styles.logo} src={logo} alt="Логотип журнала"/>
}